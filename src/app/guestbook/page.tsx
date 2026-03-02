'use client';

import { SectionContainer } from '@/components/SectionContainer';
import { Subtitle } from '@/components/Subtitle';
import { Title } from '@/components/Title';
import { useGuestbook } from '@/hooks/useGuestbook';
import { useI18n } from '@/lib/i18n/I18nProvider';
import { ChatCircleDotsIcon } from '@phosphor-icons/react';
import { toast } from 'sonner';
import { GuestbookCard } from './_components/GuestbookCard';
import { GuestbookForm } from './_components/GuestbookForm';

export default function Guestbook() {
    const { t } = useI18n();
    const { entries, isLoading, error, addEntry, isSubmitting } = useGuestbook();

    async function handleSubmit(name: string, message: string): Promise<boolean> {
        if (!name.trim() || !message.trim()) {
            toast.error(t.guestbook.toast.fillAllFields);
            return false;
        }

        const success = await addEntry({ name: name.trim(), message: message.trim() });

        if (success) {
            toast.success(t.guestbook.toast.success);
        } else {
            toast.error(t.guestbook.toast.error);
        }

        return success;
    }

    return (
        <SectionContainer>
            <div className="mx-auto max-w-3xl">
                <Title text={t.guestbook.title} />
                <Subtitle text={t.guestbook.subtitle} />

                <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
                    <GuestbookForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
                </div>

                <div className="mt-10">
                    <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-neutral-800 dark:text-neutral-100">
                        <ChatCircleDotsIcon size={24} weight="duotone" className="text-teal-500" />
                        {t.guestbook.entries.title}
                        {!isLoading && entries.length > 0 && (
                            <span className="ml-2 rounded-full bg-teal-100 px-2.5 py-0.5 text-sm font-medium text-teal-700 dark:bg-teal-900/50 dark:text-teal-400">
                                {entries.length}
                            </span>
                        )}
                    </h2>

                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center py-12">
                            <span className="mb-3 inline-block h-8 w-8 animate-spin rounded-full border-3 border-teal-500 border-t-transparent" />
                            <p className="text-neutral-500 dark:text-neutral-400">
                                {t.guestbook.entries.loading}
                            </p>
                        </div>
                    ) : error ? (
                        <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center dark:border-red-900 dark:bg-red-900/20">
                            <p className="text-red-600 dark:text-red-400">
                                {t.guestbook.entries.error}
                            </p>
                        </div>
                    ) : entries.length === 0 ? (
                        <div className="rounded-xl border border-dashed border-neutral-300 bg-neutral-50 p-8 text-center dark:border-neutral-700 dark:bg-neutral-800/50">
                            <ChatCircleDotsIcon
                                size={48}
                                weight="duotone"
                                className="mx-auto mb-3 text-neutral-400 dark:text-neutral-500"
                            />
                            <p className="text-neutral-500 dark:text-neutral-400">
                                {t.guestbook.entries.empty}
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {entries.map((entry) => (
                                <GuestbookCard key={entry.id} entry={entry} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </SectionContainer>
    );
}
