import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!message || message.trim() === '') {
      return res.status(400).json({ error: 'Feedback message is required' });
    }

    // Initialize Supabase client with environment variables
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      console.error('Missing Supabase environment variables');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Insert feedback into Supabase
    const { data, error } = await supabase
      .from('feedback')
      .insert([
        {
          name: name?.trim() || null,
          email: email?.trim() || null,
          message: message.trim(),
          created_at: new Date().toISOString(),
          event: 'AI-VERSE 4.0'
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Failed to save feedback' });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Feedback submitted successfully!' 
    });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
