import { createClient, SupabaseClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

function createSupabaseClient(): SupabaseClient<Database> {
    if (!supabaseUrl || !supabaseAnonKey) {
        console.warn('Supabase credentials not configured. Guestbook features will not work.');
    }
    return createClient<Database>(supabaseUrl, supabaseAnonKey);
}

export const supabase = createSupabaseClient();
