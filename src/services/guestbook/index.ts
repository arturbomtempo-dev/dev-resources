import type { GuestbookEntry, GuestbookInsert } from '@/lib/supabase';
import { supabase } from '@/lib/supabase';

export async function getGuestbookEntries(): Promise<GuestbookEntry[]> {
    const { data, error } = await supabase
        .from('guestbook')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        throw new Error(error.message);
    }

    return (data as GuestbookEntry[]) ?? [];
}

export async function createGuestbookEntry(entry: GuestbookInsert): Promise<GuestbookEntry> {
    const { data, error } = await supabase
        .from('guestbook')
        .insert(entry as never)
        .select()
        .single();

    if (error) {
        throw new Error(error.message);
    }

    return data as GuestbookEntry;
}

export async function subscribeToGuestbook(
    callback: (entry: GuestbookEntry) => void
): Promise<() => void> {
    const channel = supabase
        .channel('guestbook-changes')
        .on(
            'postgres_changes',
            {
                event: 'INSERT',
                schema: 'public',
                table: 'guestbook',
            },
            (payload) => {
                callback(payload.new as GuestbookEntry);
            }
        )
        .subscribe();

    return () => {
        supabase.removeChannel(channel);
    };
}
