import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { DEMO_MODE, SUPABASE_ANON_KEY, SUPABASE_URL } from './config';

let client: SupabaseClient | null = null;

export function supabase(): SupabaseClient | null {
  if (DEMO_MODE) return null;
  if (!client) {
    client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, flowType: 'pkce',
        // default storage key on purpose: on www.fuchsdeutsch.de this shares the login with Fuchsdeutsch
        storage: typeof window !== 'undefined' ? window.localStorage : undefined,
      },
    });
  }
  return client;
}
