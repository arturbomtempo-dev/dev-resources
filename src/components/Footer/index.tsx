'use client';
import { GithubLogoIcon } from '@phosphor-icons/react/dist/icons/GithubLogo';
import { GlobeIcon } from '@phosphor-icons/react/dist/icons/Globe';
import { InstagramLogoIcon } from '@phosphor-icons/react/dist/icons/InstagramLogo';
import { LinkedinLogoIcon } from '@phosphor-icons/react/dist/icons/LinkedinLogo';
import { YoutubeLogoIcon } from '@phosphor-icons/react/dist/icons/YoutubeLogo';
import { Logo } from '../Logo';

export function Footer() {
    return (
        <footer className="border-t border-neutral-200 bg-gray-100">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 border-b border-neutral-200 p-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="max-w-sm">
                    <Logo size="small" />
                    <p className="mt-2 text-sm text-neutral-500">
                        Hub colaborativo de curadoria digital, projetos e experiências em
                        tecnologia.
                    </p>
                </div>

                <div>
                    <h3 className="mb-2 font-semibold text-neutral-500">Navegação</h3>
                    <ul className="space-y-1">
                        <li>
                            <a href="#" className="text-neutral-500 hover:text-blue-500">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-neutral-500 hover:text-blue-500">
                                Indicações
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-neutral-500 hover:text-blue-500">
                                Projetos
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-neutral-500 hover:text-blue-500">
                                Contato
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-2 font-semibold text-neutral-500">Sociais - Artur</h3>
                    <ul className="flex flex-wrap gap-2">
                        <li className="rounded-md bg-gray-200 p-2 transition-colors duration-300 ease-in-out hover:bg-blue-500/20">
                            <a
                                href="https://github.com/arturbomtempo-dev"
                                target="blank"
                                className="text-blue-500 transition-colors duration-300 ease-in-out"
                            >
                                <GithubLogoIcon size={20} />
                            </a>
                        </li>
                        <li className="rounded-md bg-gray-200 p-2 transition-colors duration-300 ease-in-out hover:bg-blue-500/20">
                            <a
                                href="https://www.linkedin.com/in/artur-bomtempo/"
                                target="blank"
                                className="text-blue-500 transition-colors duration-300 ease-in-out"
                            >
                                <LinkedinLogoIcon size={20} />
                            </a>
                        </li>
                        <li className="rounded-md bg-gray-200 p-2 transition-colors duration-300 ease-in-out hover:bg-blue-500/20">
                            <a
                                href="https://www.instagram.com/arturbomtempo.dev/"
                                target="blank"
                                className="text-blue-500 transition-colors duration-300 ease-in-out"
                            >
                                <InstagramLogoIcon size={20} />
                            </a>
                        </li>
                        <li className="rounded-md bg-gray-200 p-2 transition-colors duration-300 ease-in-out hover:bg-blue-500/20">
                            <a
                                href="https://www.youtube.com/@ArturBomtempoDev"
                                target="blank"
                                className="text-blue-500 transition-colors duration-300 ease-in-out"
                            >
                                <YoutubeLogoIcon size={20} />
                            </a>
                        </li>
                        <li className="rounded-md bg-gray-200 p-2 transition-colors duration-300 ease-in-out hover:bg-blue-500/20">
                            <a
                                href="https://arturbomtempo.dev"
                                target="blank"
                                className="text-blue-500 transition-colors duration-300 ease-in-out"
                            >
                                <GlobeIcon size={20} />
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-2 font-semibold text-neutral-500">Sociais - Eduarda</h3>
                    <ul className="flex flex-wrap gap-2">
                        <li className="rounded-md bg-gray-200 p-2 transition-colors duration-300 ease-in-out hover:bg-teal-500/20">
                            <a
                                href="https://github.com/eduardavieira-dev"
                                target="blank"
                                className="text-teal-600 transition-colors duration-300 ease-in-out"
                            >
                                <GithubLogoIcon size={20} />
                            </a>
                        </li>
                        <li className="rounded-md bg-gray-200 p-2 transition-colors duration-300 ease-in-out hover:bg-teal-500/20">
                            <a
                                href="https://www.linkedin.com/in/eduarda-vieira-gon%C3%A7alves-01a584297/"
                                target="blank"
                                className="text-teal-600 transition-colors duration-300 ease-in-out"
                            >
                                <LinkedinLogoIcon size={20} />
                            </a>
                        </li>
                        <li className="rounded-md bg-gray-200 p-2 transition-colors duration-300 ease-in-out hover:bg-teal-500/20">
                            <a
                                href="https://www.instagram.com/eduardavieira.dev/"
                                target="blank"
                                className="text-teal-600 transition-colors duration-300 ease-in-out"
                            >
                                <InstagramLogoIcon size={20} />
                            </a>
                        </li>
                        <li className="rounded-md bg-gray-200 p-2 transition-colors duration-300 ease-in-out hover:bg-teal-500/20">
                            <a
                                href="https://portifolio-eduardavieira.vercel.app/"
                                target="blank"
                                className="text-teal-600 transition-colors duration-300 ease-in-out"
                            >
                                <GlobeIcon size={20} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mx-auto my-3 flex max-w-7xl flex-col gap-4 sm:flex-row sm:justify-between sm:gap-0">
                <div className="p-4 text-sm text-gray-600">
                    &copy; {new Date().getFullYear()} DevResources. Todos os direitos reservados.
                </div>
                <div className="p-4 text-sm text-gray-600">Feito por Artur e Eduarda.</div>
            </div>
        </footer>
    );
}
