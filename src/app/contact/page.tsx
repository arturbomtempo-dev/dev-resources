'use client';
import { SectionContainer } from '@/components/SectionContainer';
import { Subtitle } from '@/components/Subtitle';
import { Title } from '@/components/Title';
import {
    EnvelopeIcon,
    GithubLogoIcon,
    LinkedinLogoIcon,
    PaperPlaneTiltIcon,
    PencilSimpleLineIcon,
    UserIcon,
} from '@phosphor-icons/react';

export default function Contact() {
    return (
        <SectionContainer>
            <div className="mx-auto max-w-3xl">
                <Title text="Contato" />
                <Subtitle text="Entre em contato conosco caso tenha interesse em fazer projetos ou dar sugestões" />

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <a
                        href="https://www.linkedin.com/in/eduarda-vieira-gon%C3%A7alves-01a584297/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-11 items-center justify-center gap-2 rounded-md border border-sky-500 bg-sky-500/10 text-sm font-semibold text-sky-500 transition-colors hover:bg-sky-500/20"
                    >
                        <LinkedinLogoIcon size={16} />
                        LinkedIn
                    </a>

                    <a
                        href="mailto:eduarda.vieira.goncalves7@gmail.com"
                        className="border-teal-primary text-teal-primary flex h-11 items-center justify-center gap-2 rounded-md border bg-teal-50 text-sm font-semibold transition-colors hover:bg-teal-500/20"
                    >
                        <EnvelopeIcon size={16} />
                        Email
                    </a>

                    <a
                        href="https://github.com/eduardavieira-dev"
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-11 items-center justify-center gap-2 rounded-md border border-black bg-white text-sm font-semibold text-black transition-colors hover:bg-gray-100"
                    >
                        <GithubLogoIcon size={16} />
                        GitHub
                    </a>
                </div>

                <form className="mt-5 space-y-4">
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
                        className="flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-gradient-to-r from-sky-400 to-sky-500 text-base font-medium text-white transition-colors hover:from-sky-500 hover:to-sky-600"
                    >
                        <PaperPlaneTiltIcon size={16} />
                        Enviar
                    </button>
                </form>
            </div>
        </SectionContainer>
    );
}
