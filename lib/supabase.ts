import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { DEMO_MODE, SUPABASE_ANON_KEY, SUPABASE_URL } from './config';

let client: SupabaseClient | null = null;

export function supabase(): SupabaseClient | null {
  if (DEMO_MODE) return null;
  if (!client) client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  return client;
}
