'use client';
import { SectionContainer } from '@/components/SectionContainer';
import { Subtitle } from '@/components/Subtitle';
import { Title } from '@/components/Title';
import { Button } from '@/components/ui/button';
import { getEmailJsConfig } from '@/config/emailJsConfig';
import { useI18n } from '@/lib/i18n/I18nProvider';
import emailjs from '@emailjs/browser';
import {
    ChatTextIcon,
    EnvelopeIcon,
    GithubLogoIcon,
    LinkedinLogoIcon,
    PaperPlaneTiltIcon,
    UserIcon,
} from '@phosphor-icons/react';
import { FormEvent, useState } from 'react';
import { toast } from 'sonner';

export default function Contact() {
    const [isSending, setIsSending] = useState(false);
    const { t } = useI18n();

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const name = String(formData.get('name') ?? '').trim();
        const email = String(formData.get('email') ?? '').trim();
        const subject = String(formData.get('subject') ?? '').trim();
        const message = String(formData.get('message') ?? '').trim();

        if (!name || !email || !subject || !message) {
            toast.error(t.contact.toast.fillAllFields);
            return;
        }

        const isValidEmail = /\S+@\S+\.\S+/.test(email);

        if (!isValidEmail) {
            toast.error(t.contact.toast.invalidEmail);
            return;
        }

        setIsSending(true);

        try {
            const emailJsConfig = getEmailJsConfig();
            const time = new Date().toLocaleString('pt-BR');
            const baseTemplateParams = {
                name,
                email,
                message,
                subject,
                time,
            };

            await emailjs.send(
                emailJsConfig.SERVICE_ID,
                emailJsConfig.TEMPLATE_ID_FOR_ME,
                {
                    ...baseTemplateParams,
                    title: `Nova mensagem do site: ${subject}`,
                },
                emailJsConfig.PUBLIC_KEY
            );

            let senderConfirmationSent = true;

            try {
                await emailjs.send(
                    emailJsConfig.SERVICE_ID,
                    emailJsConfig.TEMPLATE_ID_FOR_SENDER,
                    {
                        ...baseTemplateParams,
                        title: 'Recebemos sua mensagem!',
                    },
                    emailJsConfig.PUBLIC_KEY
                );
            } catch (error) {
                senderConfirmationSent = false;
                console.error('Falha ao enviar confirmação para remetente:', error);
            }

            if (senderConfirmationSent) {
                toast.success(t.contact.toast.success);
            } else {
                toast.success(t.contact.toast.success);
                toast.warning(t.contact.toast.confirmationWarning);
            }

            form.reset();
        } catch (error) {
            console.error('Falha ao enviar e-mail principal:', error);
            toast.error(t.contact.toast.error);
        } finally {
            setIsSending(false);
        }
    }

    return (
        <SectionContainer>
            <div className="mx-auto max-w-3xl">
                <Title text={t.contact.title} />
                <Subtitle text={t.contact.subtitle} />

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <Button
                        asChild
                        variant="ghost"
                        className="h-11 rounded-md border border-sky-500 bg-sky-500/10 text-sm font-semibold text-sky-500 transition-colors hover:bg-sky-500/20 hover:text-sky-600 dark:border-sky-400 dark:bg-sky-900/30 dark:text-sky-400 dark:hover:bg-sky-900/50"
                    >
                        <a
                            href="https://www.linkedin.com/in/artur-bomtempo"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <LinkedinLogoIcon size={16} />
                            {t.contact.socialButtons.linkedin}
                        </a>
                    </Button>

                    <Button
                        asChild
                        variant="ghost"
                        className="border-teal-primary text-teal-primary h-11 rounded-md border bg-teal-50 text-sm font-semibold transition-colors hover:bg-teal-500/20 hover:text-teal-600 dark:border-teal-400 dark:bg-teal-900/30 dark:text-teal-400 dark:hover:bg-teal-900/50"
                    >
                        <a href="mailto:arturbcolen@gmail.com">
                            <EnvelopeIcon size={16} />
                            {t.contact.socialButtons.email}
                        </a>
                    </Button>

                    <Button
                        asChild
                        variant="ghost"
                        className="h-11 rounded-md border border-black bg-white text-sm font-semibold text-black transition-colors hover:bg-gray-100 dark:border-neutral-500 dark:bg-neutral-700 dark:text-white dark:hover:bg-neutral-600"
                    >
                        <a
                            href="https://github.com/arturbomtempo-dev"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <GithubLogoIcon size={16} />
                            {t.contact.socialButtons.github}
                        </a>
                    </Button>
                </div>

                <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-1 block text-sm font-medium text-black dark:text-white"
                            >
                                {t.contact.form.name.label}
                            </label>
                            <div className="relative">
                                <UserIcon
                                    size={16}
                                    className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500 dark:text-neutral-400"
                                />
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder={t.contact.form.name.placeholder}
                                    autoComplete="name"
                                    className="h-11 w-full rounded-md border border-neutral-200 bg-white pr-3 pl-9 text-sm text-black outline-none placeholder:text-neutral-500 focus:border-sky-500 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white dark:placeholder:text-neutral-400 dark:focus:border-sky-400"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="mb-1 block text-sm font-medium text-black dark:text-white"
                            >
                                {t.contact.form.email.label}
                            </label>
                            <div className="relative">
                                <EnvelopeIcon
                                    size={16}
                                    className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500 dark:text-neutral-400"
                                />
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder={t.contact.form.email.placeholder}
                                    autoComplete="email"
                                    className="h-11 w-full rounded-md border border-neutral-200 bg-white pr-3 pl-9 text-sm text-black outline-none placeholder:text-neutral-500 focus:border-sky-500 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white dark:placeholder:text-neutral-400 dark:focus:border-sky-400"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="subject"
                            className="mb-1 block text-sm font-medium text-black dark:text-white"
                        >
                            {t.contact.form.subject.label}
                        </label>
                        <div className="relative">
                            <ChatTextIcon
                                size={16}
                                className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500 dark:text-neutral-400"
                            />
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                placeholder={t.contact.form.subject.placeholder}
                                className="h-11 w-full rounded-md border border-neutral-200 bg-white pr-3 pl-9 text-sm text-black outline-none placeholder:text-neutral-500 focus:border-sky-500 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white dark:placeholder:text-neutral-400 dark:focus:border-sky-400"
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            className="mb-1 block text-sm font-medium text-black dark:text-white"
                        >
                            {t.contact.form.message.label}
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={7}
                            placeholder={t.contact.form.message.placeholder}
                            className="w-full resize-none rounded-md border border-neutral-200 bg-white p-3 text-sm text-black outline-none placeholder:text-neutral-500 focus:border-sky-500 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white dark:placeholder:text-neutral-400 dark:focus:border-sky-400"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSending}
                        className="flex h-13 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-linear-to-r from-sky-400 to-sky-500 text-lg font-medium text-white transition-colors hover:from-sky-500 hover:to-sky-600 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        <PaperPlaneTiltIcon size={18} />
                        {isSending ? t.contact.form.sending : t.contact.form.submit}
                    </button>
                </form>
            </div>
        </SectionContainer>
    );
}
