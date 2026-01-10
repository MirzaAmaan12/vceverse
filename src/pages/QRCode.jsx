// src/pages/QRCode.jsx
import { motion } from "framer-motion";
import { useState } from "react";

const WEBSITE_URL = "https://vceverse.vercel.app/";

// Using Google Charts API for QR code generation (free, no package needed)
const QR_CODE_API = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(WEBSITE_URL)}&bgcolor=ffffff&color=000000&margin=10`;

export default function QRCodePage() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const response = await fetch(QR_CODE_API);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'vceverse-qrcode.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
    setDownloading(false);
  };

  return (
    <div className="min-h-screen bg-[#020205] text-white flex flex-col items-center justify-center px-4 py-12">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,#1A1A2E_0%,#020205_100%)] z-0" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] bg-[#7C5CFF]/10 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center max-w-lg w-full"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C5CFF] to-[#00F2FE]">
              VCE VERSE
            </span>
          </h1>
          <p className="text-white/50 text-sm sm:text-base">
            Scan to visit our website
          </p>
        </div>

        {/* QR Code Card */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl shadow-[#7C5CFF]/20"
        >
          <img
            src={QR_CODE_API}
            alt="VCE Verse QR Code"
            className="w-64 h-64 sm:w-80 sm:h-80"
            crossOrigin="anonymous"
          />
        </motion.div>

        {/* URL Display */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 px-4 py-2 rounded-full bg-white/5 border border-white/10"
        >
          <code className="text-[#00F2FE] text-xs sm:text-sm font-mono">
            {WEBSITE_URL}
          </code>
        </motion.div>

        {/* Info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-white/40 text-xs sm:text-sm text-center max-w-sm"
        >
          This QR code is permanent and always points to the latest version of the website.
          Any updates deployed will automatically reflect when scanned.
        </motion.p>

        {/* Download Button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          onClick={handleDownload}
          disabled={downloading}
          className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-[#7C5CFF] to-[#00F2FE] text-white font-bold text-sm hover:shadow-lg hover:shadow-[#7C5CFF]/40 transition-all disabled:opacity-50"
        >
          {downloading ? 'Downloading...' : 'Download QR Code'}
        </motion.button>

        {/* Back Link */}
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          href="/"
          className="mt-6 text-white/50 hover:text-white text-sm transition-colors"
        >
          ← Back to Home
        </motion.a>
      </motion.div>
    </div>
  );
}
