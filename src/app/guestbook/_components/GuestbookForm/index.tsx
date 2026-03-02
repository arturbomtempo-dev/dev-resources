'use client';

import { Button } from '@/components/ui/button';
import { useI18n } from '@/lib/i18n/I18nProvider';
import { ChatTextIcon, PaperPlaneTiltIcon, UserIcon } from '@phosphor-icons/react';
import { FormEvent, useState } from 'react';

interface GuestbookFormProps {
    onSubmit: (name: string, message: string) => Promise<boolean>;
    isSubmitting: boolean;
}

export function GuestbookForm({ onSubmit, isSubmitting }: GuestbookFormProps) {
    const { t } = useI18n();
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const trimmedName = name.trim();
        const trimmedMessage = message.trim();

        if (!trimmedName || !trimmedMessage) {
            return;
        }

        const success = await onSubmit(trimmedName, trimmedMessage);
        
        if (success) {
            setName('');
            setMessage('');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                    <UserIcon size={16} className="text-teal-500" />
                    {t.guestbook.form.name.label}
                </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.guestbook.form.name.placeholder}
                    className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-700 transition-colors placeholder:text-neutral-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder:text-neutral-500"
                    disabled={isSubmitting}
                    maxLength={100}
                />
            </div>

            <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                    <ChatTextIcon size={16} className="text-teal-500" />
                    {t.guestbook.form.message.label}
                </label>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.guestbook.form.message.placeholder}
                    className="min-h-30 w-full resize-none rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-700 transition-colors placeholder:text-neutral-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder:text-neutral-500"
                    disabled={isSubmitting}
                    maxLength={500}
                />
            </div>

            <Button
                type="submit"
                disabled={isSubmitting || !name.trim() || !message.trim()}
                className="w-full bg-linear-to-r from-teal-500 to-teal-600 py-6 text-base font-semibold text-white transition-all hover:from-teal-600 hover:to-teal-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
                {isSubmitting ? (
                    <>
                        <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        {t.guestbook.form.submitting}
                    </>
                ) : (
                    <>
                        <PaperPlaneTiltIcon size={18} weight="bold" />
                        {t.guestbook.form.submit}
                    </>
                )}
            </Button>
        </form>
    );
}
