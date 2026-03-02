'use client';

import { useI18n } from '@/lib/i18n/I18nProvider';
import type { GuestbookEntry } from '@/lib/supabase';
import { ClockIcon } from '@phosphor-icons/react';

interface GuestbookCardProps {
    entry: GuestbookEntry;
}

function getInitials(name: string): string {
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) return '?';
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function formatDateTime(dateString: string, locale: string): string {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'America/Sao_Paulo',
    }).format(date);
}

export function GuestbookCard({ entry }: GuestbookCardProps) {
    const { t, locale } = useI18n();

    return (
        <div className="rounded-xl border border-neutral-200 bg-white p-5 transition-all hover:border-teal-200 hover:shadow-sm dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-teal-800">
            <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-teal-400 to-teal-600">
                    <span className="text-sm leading-none font-bold text-white">
                        {getInitials(entry.name)}
                    </span>
                </div>
                <div className="flex-1">
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-100">
                        {entry.name}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
                        <ClockIcon size={12} />
                        <span>
                            {formatDateTime(entry.created_at, locale === 'pt' ? 'pt-BR' : 'en-US')}
                        </span>
                    </div>
                </div>
            </div>
            <p className="leading-relaxed text-neutral-600 dark:text-neutral-300">
                {entry.message}
            </p>
        </div>
    );
}
