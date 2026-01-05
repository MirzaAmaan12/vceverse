import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();
const srcRoot = path.join(projectRoot, 'src');

const CODE_EXTS = new Set(['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs']);
const ASSET_EXTS = [
  '.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs', '.json',
  '.css', '.scss', '.sass', '.less',
  '.png', '.jpg', '.jpeg', '.svg', '.webp', '.gif',
  '.mp4', '.webm', '.mp3', '.wav',
  '.woff', '.woff2', '.ttf', '.otf',
];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const results = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walk(full));
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name);
      if (CODE_EXTS.has(ext)) results.push(full);
    }
  }
  return results;
}

function* extractSpecifiers(code) {
  // import ... from 'x'
  const re1 = /import\s+[\s\S]*?from\s*['"]([^'"]+)['"]/g;
  // import('x')
  const re2 = /import\(\s*['"]([^'"]+)['"]\s*\)/g;
  // export ... from 'x'
  const re3 = /export\s+[\s\S]*?from\s*['"]([^'"]+)['"]/g;

  for (const re of [re1, re2, re3]) {
    let m;
    while ((m = re.exec(code)) !== null) {
      yield m[1];
    }
  }
}

function resolveImport(fromFile, spec) {
  const base = path.dirname(fromFile);
  const raw = path.resolve(base, spec);

  // If spec already has extension
  if (path.extname(raw)) {
    return fs.existsSync(raw) ? raw : null;
  }

  // Try as file with extensions
  for (const ext of ASSET_EXTS) {
    const cand = raw + ext;
    if (fs.existsSync(cand)) return cand;
  }

  // Try as directory with index.*
  if (fs.existsSync(raw) && fs.statSync(raw).isDirectory()) {
    for (const ext of ASSET_EXTS) {
      const cand = path.join(raw, 'index' + ext);
      if (fs.existsSync(cand)) return cand;
    }
  }

  return null;
}

function getCaseMismatch(absPath) {
  // Walk each path segment and verify it matches directory entry casing.
  const rel = path.relative(projectRoot, absPath);
  const parts = rel.split(path.sep);
  let current = projectRoot;

  for (const part of parts) {
    const entries = fs.readdirSync(current);
    const found = entries.find((name) => name.toLowerCase() === part.toLowerCase());
    if (!found) return { kind: 'missing', at: current, part };
    if (found !== part) {
      return { kind: 'case', at: current, expected: found, actual: part };
    }
    current = path.join(current, found);
  }

  return null;
}

function main() {
  if (!fs.existsSync(srcRoot)) {
    console.error('No src/ found.');
    process.exit(2);
  }

  const files = walk(srcRoot);
  const mismatches = [];

  for (const file of files) {
    const code = fs.readFileSync(file, 'utf8');
    for (const spec of extractSpecifiers(code)) {
      if (!(spec.startsWith('.') || spec.startsWith('..'))) continue;
      const resolved = resolveImport(file, spec);
      if (!resolved) continue;

      const mismatch = getCaseMismatch(resolved);
      if (mismatch?.kind === 'case') {
        mismatches.push({ from: path.relative(projectRoot, file), spec, resolved: path.relative(projectRoot, resolved), ...mismatch });
      }
    }
  }

  if (mismatches.length === 0) {
    console.log('✅ No import path case mismatches found.');
    return;
  }

  console.log(`❌ Found ${mismatches.length} import path case mismatch(es):`);
  for (const m of mismatches) {
    console.log(`- ${m.from}: import '${m.spec}' -> ${m.resolved}`);
    console.log(`  Segment case mismatch in ${path.relative(projectRoot, m.at)}: wrote '${m.actual}', actual is '${m.expected}'`);
  }
  process.exit(1);
}

main();
