'use client';
import emailjs from '@emailjs/browser';
import { SectionContainer } from '@/components/SectionContainer';
import { Subtitle } from '@/components/Subtitle';
import { Title } from '@/components/Title';
import { Button } from '@/components/ui/button';
import { getEmailJsConfig } from '@/config/emailJsConfig';
import {
    EnvelopeIcon,
    GithubLogoIcon,
    LinkedinLogoIcon,
    PaperPlaneTiltIcon,
    PencilSimpleLineIcon,
    UserIcon,
} from '@phosphor-icons/react';
import { FormEvent, useState } from 'react';
import { toast } from 'sonner';

export default function Contact() {
    const [isSending, setIsSending] = useState(false);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const name = String(formData.get('name') ?? '').trim();
        const email = String(formData.get('email') ?? '').trim();
        const subject = String(formData.get('subject') ?? '').trim();
        const message = String(formData.get('message') ?? '').trim();

        if (!name || !email || !subject || !message) {
            toast.error('Preencha todos os campos antes de enviar.');
            return;
        }

        const isValidEmail = /\S+@\S+\.\S+/.test(email);

        if (!isValidEmail) {
            toast.error('Digite um email válido.');
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
                toast.success('Mensagem enviada com sucesso! Em breve entraremos em contato.');
            } else {
                toast.success('Mensagem enviada com sucesso!');
                toast.warning('Não conseguimos disparar o e-mail de confirmação para você agora.');
            }

            form.reset();
        } catch (error) {
            console.error('Falha ao enviar e-mail principal:', error);
            toast.error('Não foi possível enviar sua mensagem. Tente novamente em instantes.');
        } finally {
            setIsSending(false);
        }
    }

    return (
        <SectionContainer>
            <div className="mx-auto max-w-3xl">
                <Title text="Contato" />
                <Subtitle text="Entre em contato conosco caso tenha interesse em fazer projetos ou dar sugestões" />

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <Button
                        asChild
                        variant="ghost"
                        className="h-11 rounded-md border border-sky-500 bg-sky-500/10 text-sm font-semibold text-sky-500  hover:text-sky-600  transition-colors hover:bg-sky-500/20"
                    >
                        <a
                            href="https://www.linkedin.com/in/eduarda-vieira-gon%C3%A7alves-01a584297/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <LinkedinLogoIcon size={16} />
                            LinkedIn
                        </a>
                    </Button>

                    <Button
                        asChild
                        variant="ghost"
                        className="border-teal-primary text-teal-primary hover:text-teal-600 h-11 rounded-md border bg-teal-50 text-sm font-semibold transition-colors hover:bg-teal-500/20"
                    >
                        <a href="mailto:eduarda.vieira.goncalves7@gmail.com">
                            <EnvelopeIcon size={16} />
                            Email
                        </a>
                    </Button>

                    <Button
                        asChild
                        variant="ghost"
                        className="h-11 rounded-md border border-black bg-white text-sm font-semibold text-black transition-colors hover:bg-gray-100"
                    >
                        <a
                            href="https://github.com/eduardavieira-dev"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <GithubLogoIcon size={16} />
                            GitHub
                        </a>
                    </Button>
                </div>

                <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-1 block text-sm font-medium text-black"
                            >
                                Nome
                            </label>
                            <div className="relative">
                                <UserIcon
                                    size={16}
                                    className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500"
                                />
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Digite seu nome..."
                                    autoComplete="name"
                                    className="h-11 w-full rounded-md border border-neutral-200 bg-white pr-3 pl-9 text-sm text-black outline-none placeholder:text-neutral-500 focus:border-sky-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="mb-1 block text-sm font-medium text-black"
                            >
                                Email
                            </label>
                            <div className="relative">
                                <EnvelopeIcon
                                    size={16}
                                    className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500"
                                />
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="seu@email.com"
                                    autoComplete="email"
                                    className="h-11 w-full rounded-md border border-neutral-200 bg-white pr-3 pl-9 text-sm text-black outline-none placeholder:text-neutral-500 focus:border-sky-500"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="subject"
                            className="mb-1 block text-sm font-medium text-black"
                        >
                            Assunto
                        </label>
                        <div className="relative">
                            <PencilSimpleLineIcon
                                size={16}
                                className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500"
                            />
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                placeholder="Informe o assunto.."
                                className="h-11 w-full rounded-md border border-neutral-200 bg-white pr-3 pl-9 text-sm text-black outline-none placeholder:text-neutral-500 focus:border-sky-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            className="mb-1 block text-sm font-medium text-black"
                        >
                            Mensagem
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={7}
                            placeholder="Escreva uma mensagem..."
                            className="w-full resize-none rounded-md border border-neutral-200 bg-white p-3 text-sm text-black outline-none placeholder:text-neutral-500 focus:border-sky-500"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSending}
                        className="flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-linear-to-r from-sky-400 to-sky-500 text-base font-medium text-white transition-colors hover:from-sky-500 hover:to-sky-600 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        <PaperPlaneTiltIcon size={16} />
                        {isSending ? 'Enviando...' : 'Enviar'}
                    </button>
                </form>
            </div>
        </SectionContainer>
    );
}
