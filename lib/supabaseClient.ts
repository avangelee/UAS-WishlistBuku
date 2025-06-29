import { createClient } from '@supabase/supabase-js';

console.log('URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log('Key:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.substring(0, 10));

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(`
    Supabase configuration missing!
    Pastikan file .env.local berisi:
    NEXT_PUBLIC_SUPABASE_URL=your-url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key
  `);
}

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true
  }
});