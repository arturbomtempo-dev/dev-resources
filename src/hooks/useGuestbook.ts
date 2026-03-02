'use client';

import { useCallback, useEffect, useState } from 'react';
import type { GuestbookEntry, GuestbookInsert } from '@/lib/supabase';
import {
    createGuestbookEntry,
    getGuestbookEntries,
    subscribeToGuestbook,
} from '@/services/guestbook';

interface UseGuestbookReturn {
    entries: GuestbookEntry[];
    isLoading: boolean;
    error: string | null;
    addEntry: (entry: GuestbookInsert) => Promise<boolean>;
    isSubmitting: boolean;
}

export function useGuestbook(): UseGuestbookReturn {
    const [entries, setEntries] = useState<GuestbookEntry[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchEntries() {
            try {
                const data = await getGuestbookEntries();
                setEntries(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load entries');
            } finally {
                setIsLoading(false);
            }
        }

        fetchEntries();
    }, []);

    useEffect(() => {
        const unsubscribe = subscribeToGuestbook((newEntry) => {
            setEntries((prev) => {
                const exists = prev.some((entry) => entry.id === newEntry.id);
                if (exists) return prev;
                return [newEntry, ...prev];
            });
        });

        return () => {
            unsubscribe.then((cleanup) => cleanup());
        };
    }, []);

    const addEntry = useCallback(async (entry: GuestbookInsert): Promise<boolean> => {
        setIsSubmitting(true);
        try {
            await createGuestbookEntry(entry);
            return true;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to add entry');
            return false;
        } finally {
            setIsSubmitting(false);
        }
    }, []);

    return {
        entries,
        isLoading,
        error,
        addEntry,
        isSubmitting,
    };
}
