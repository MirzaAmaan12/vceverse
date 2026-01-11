// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a mock client if env vars are missing (for local development)
let supabase = null;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.warn('Supabase environment variables are not set. Feedback submission will not work.');
  // Create a mock object to prevent crashes
  supabase = {
    from: () => ({
      insert: async () => ({ data: null, error: { message: 'Supabase not configured. Please add environment variables.' } })
    })
  };
}

export { supabase };
