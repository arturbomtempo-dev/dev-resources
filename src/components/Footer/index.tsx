'use client';
import { useI18n } from '@/lib/i18n/I18nProvider';
import { GithubLogoIcon } from '@phosphor-icons/react/dist/icons/GithubLogo';
import { GlobeIcon } from '@phosphor-icons/react/dist/icons/Globe';
import { InstagramLogoIcon } from '@phosphor-icons/react/dist/icons/InstagramLogo';
import { LinkedinLogoIcon } from '@phosphor-icons/react/dist/icons/LinkedinLogo';
import { YoutubeLogoIcon } from '@phosphor-icons/react/dist/icons/YoutubeLogo';
import { IconBox } from '../IconBox';
import { Logo } from '../Logo';

export function Footer() {
    const { t } = useI18n();

    return (
        <footer className="border-t border-neutral-200 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-900">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 border-b border-neutral-200 p-6 md:grid-cols-2 lg:grid-cols-4 dark:border-neutral-700">
                <div className="max-w-sm">
                    <Logo size="small" />
                    <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                        {t.footer.description}
                    </p>
                </div>

                <div>
                    <h3 className="mb-2 font-semibold text-neutral-500 dark:text-neutral-300">
                        {t.footer.navigation.title}
                    </h3>
                    <ul className="space-y-1">
                        <li>
                            <a
                                href="/"
                                className="text-neutral-500 hover:text-blue-500 dark:text-neutral-400 dark:hover:text-blue-400"
                            >
                                {t.footer.navigation.home}
                            </a>
                        </li>
                        <li>
                            <a
                                href="/indications"
                                className="text-neutral-500 hover:text-blue-500 dark:text-neutral-400 dark:hover:text-blue-400"
                            >
                                {t.footer.navigation.indications}
                            </a>
                        </li>
                        <li>
                            <a
                                href="/about"
                                className="text-neutral-500 hover:text-blue-500 dark:text-neutral-400 dark:hover:text-blue-400"
                            >
                                {t.footer.navigation.about}
                            </a>
                        </li>
                        <li>
                            <a
                                href="/projects"
                                className="text-neutral-500 hover:text-blue-500 dark:text-neutral-400 dark:hover:text-blue-400"
                            >
                                {t.footer.navigation.projects}
                            </a>
                        </li>
                        <li>
                            <a
                                href="/experiences"
                                className="text-neutral-500 hover:text-blue-500 dark:text-neutral-400 dark:hover:text-blue-400"
                            >
                                {t.footer.navigation.experiences}
                            </a>
                        </li>
                        <li>
                            <a
                                href="/guestbook"
                                className="text-neutral-500 hover:text-blue-500 dark:text-neutral-400 dark:hover:text-blue-400"
                            >
                                {t.footer.navigation.guestbook}
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                className="text-neutral-500 hover:text-blue-500 dark:text-neutral-400 dark:hover:text-blue-400"
                            >
                                {t.footer.navigation.contact}
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-2 font-semibold text-neutral-500 dark:text-neutral-300">
                        {t.footer.social.artur}
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                        <li>
                            <IconBox
                                icon={GithubLogoIcon}
                                bgColor="bg-gray-200 hover:bg-blue-500/20 dark:bg-neutral-800 dark:hover:bg-blue-500/20"
                                iconColor="text-blue-500 dark:text-blue-400"
                                size={20}
                                href="https://github.com/arturbomtempo-dev"
                            />
                        </li>
                        <li>
                            <IconBox
                                icon={LinkedinLogoIcon}
                                bgColor="bg-gray-200 hover:bg-blue-500/20 dark:bg-neutral-800 dark:hover:bg-blue-500/20"
                                iconColor="text-blue-500 dark:text-blue-400"
                                size={20}
                                href="https://www.linkedin.com/in/artur-bomtempo/"
                            />
                        </li>
                        <li>
                            <IconBox
                                icon={InstagramLogoIcon}
                                bgColor="bg-gray-200 hover:bg-blue-500/20 dark:bg-neutral-800 dark:hover:bg-blue-500/20"
                                iconColor="text-blue-500 dark:text-blue-400"
                                size={20}
                                href="https://www.instagram.com/arturbomtempo.dev/"
                            />
                        </li>
                        <li>
                            <IconBox
                                icon={YoutubeLogoIcon}
                                bgColor="bg-gray-200 hover:bg-blue-500/20 dark:bg-neutral-800 dark:hover:bg-blue-500/20"
                                iconColor="text-blue-500 dark:text-blue-400"
                                size={20}
                                href="https://www.youtube.com/@ArturBomtempoDev"
                            />
                        </li>
                        <li>
                            <IconBox
                                icon={GlobeIcon}
                                bgColor="bg-gray-200 hover:bg-blue-500/20 dark:bg-neutral-800 dark:hover:bg-blue-500/20"
                                iconColor="text-blue-500 dark:text-blue-400"
                                size={20}
                                href="https://arturbomtempo.dev"
                            />
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-2 font-semibold text-neutral-500 dark:text-neutral-300">
                        {t.footer.social.eduarda}
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                        <li>
                            <IconBox
                                icon={GithubLogoIcon}
                                bgColor="bg-gray-200 hover:bg-teal-500/20 dark:bg-neutral-800 dark:hover:bg-teal-500/20"
                                iconColor="text-teal-600 dark:text-teal-400"
                                size={20}
                                href="https://github.com/eduardavieira-dev"
                            />
                        </li>
                        <li>
                            <IconBox
                                icon={LinkedinLogoIcon}
                                bgColor="bg-gray-200 hover:bg-teal-500/20 dark:bg-neutral-800 dark:hover:bg-teal-500/20"
                                iconColor="text-teal-600 dark:text-teal-400"
                                size={20}
                                href="https://www.linkedin.com/in/eduarda-vieira-gon%C3%A7alves-01a584297/"
                            />
                        </li>
                        <li>
                            <IconBox
                                icon={InstagramLogoIcon}
                                bgColor="bg-gray-200 hover:bg-teal-500/20 dark:bg-neutral-800 dark:hover:bg-teal-500/20"
                                iconColor="text-teal-600 dark:text-teal-400"
                                size={20}
                                href="https://www.instagram.com/eduardavieira.dev/"
                            />
                        </li>
                        <li>
                            <IconBox
                                icon={GlobeIcon}
                                bgColor="bg-gray-200 hover:bg-teal-500/20 dark:bg-neutral-800 dark:hover:bg-teal-500/20"
                                iconColor="text-teal-600 dark:text-teal-400"
                                size={20}
                                href="https://portifolio-eduardavieira.vercel.app/"
                            />
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mx-auto my-3 flex max-w-7xl flex-col gap-4 sm:flex-row sm:justify-between sm:gap-0">
                <div className="p-4 text-sm text-gray-600 dark:text-neutral-500">
                    &copy; {new Date().getFullYear()} DevResources. {t.footer.rights}
                </div>
                <div className="p-4 text-sm text-gray-600 dark:text-neutral-500">
                    Feito por Artur e Eduarda.
                </div>
            </div>
        </footer>
    );
}
