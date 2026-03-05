'use client';

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

        const success = await onSubmit(name.trim(), message.trim());

        if (success) {
            setName('');
            setMessage('');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <label
                    htmlFor="guestbook-name"
                    className="text-sm font-medium text-black dark:text-gray-100"
                >
                    {t.guestbook.form.name.label}
                </label>
                <div className="relative">
                    <UserIcon
                        size={16}
                        className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500 dark:text-neutral-400"
                    />
                    <input
                        id="guestbook-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t.guestbook.form.name.placeholder}
                        className="h-11 w-full rounded-md border border-neutral-200 bg-white pr-3 pl-9 text-sm text-black outline-none placeholder:text-neutral-500 focus:border-teal-500 dark:border-neutral-600 dark:bg-neutral-800 dark:text-gray-100 dark:placeholder:text-neutral-400 dark:focus:border-teal-400"
                        disabled={isSubmitting}
                        maxLength={100}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label
                    htmlFor="guestbook-message"
                    className="text-sm font-medium text-black dark:text-gray-100"
                >
                    {t.guestbook.form.message.label}
                </label>
                <div className="relative">
                    <ChatTextIcon
                        size={16}
                        className="pointer-events-none absolute top-3 left-3 text-neutral-500 dark:text-neutral-400"
                    />
                    <textarea
                        id="guestbook-message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={t.guestbook.form.message.placeholder}
                        className="min-h-30 w-full resize-none rounded-md border border-neutral-200 bg-white p-3 pl-10 text-sm text-black outline-none placeholder:text-neutral-500 focus:border-teal-500 dark:border-neutral-600 dark:bg-neutral-800 dark:text-gray-100 dark:placeholder:text-neutral-400 dark:focus:border-teal-400"
                        disabled={isSubmitting}
                        maxLength={500}
                    />
                </div>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="flex h-13 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-teal-500 text-lg font-medium text-white transition-colors hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-70"
            >
                <PaperPlaneTiltIcon size={18} />
                {isSubmitting ? t.guestbook.form.submitting : t.guestbook.form.submit}
            </button>
        </form>
    );
}
