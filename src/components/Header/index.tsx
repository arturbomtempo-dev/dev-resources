'use client';

import { useI18n } from '@/lib/i18n/I18nProvider';
import { ListIcon, XIcon } from '@phosphor-icons/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { Logo } from '../Logo';
import { ThemeSwitcher } from '../ThemeSwitcher';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const { t } = useI18n();

    const navLinks = [
        { href: '/', label: t.nav.home },
        { href: '/indications', label: t.nav.indications },
        { href: '/about', label: t.nav.about },
        { href: '/projects', label: t.nav.projects },
        { href: '/experiences', label: t.nav.experiences },
        { href: '/guestbook', label: t.nav.guestbook },
        { href: '/contact', label: t.nav.contact },
    ];

    const isHomePage = pathname === '/';
    const isProjectDetailPage = pathname.startsWith('/projects/') && pathname !== '/projects';
    const isTransparent = (isHomePage || isProjectDetailPage) && !isScrolled;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    return (
        <header
            className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white shadow-sm dark:bg-neutral-900 dark:shadow-neutral-700/20'
                    : isTransparent
                      ? 'bg-transparent'
                      : 'bg-white dark:bg-neutral-900'
            }`}
        >
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                <Link href="/">
                    <span className="lg:hidden">
                        <Logo size="small" variant={isTransparent ? 'light' : 'default'} />
                    </span>
                    <span className="hidden lg:block">
                        <Logo variant={isTransparent ? 'light' : 'default'} />
                    </span>
                </Link>
                <nav className="hidden gap-8 lg:flex" aria-label="Main navigation">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`group inline-flex flex-col items-center font-medium transition-colors duration-300 ${
                                    isTransparent
                                        ? isActive
                                            ? 'text-white'
                                            : 'text-white/80 hover:text-white'
                                        : isActive
                                          ? 'text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300'
                                          : 'text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-gray-100'
                                }`}
                            >
                                <span>{link.label}</span>
                                <span
                                    className={`mt-1 h-0.5 transition-all duration-300 ${
                                        isTransparent
                                            ? 'bg-white'
                                            : 'bg-teal-primary dark:bg-teal-400'
                                    } ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                                />
                            </Link>
                        );
                    })}
                </nav>
                <div className="flex items-center gap-1 sm:gap-3">
                    <ThemeSwitcher isTransparent={isTransparent} />
                    <LanguageSwitcher isTransparent={isTransparent} />
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`flex h-10 w-10 cursor-pointer items-center justify-center transition-colors duration-300 lg:hidden ${
                            isTransparent
                                ? 'text-white hover:text-white/80'
                                : 'hover:text-blue-primary text-neutral-500 dark:text-neutral-400 dark:hover:text-teal-400'
                        }`}
                        aria-label="Toggle menu"
                    >
                        <div className="relative h-6 w-6">
                            <ListIcon
                                size={24}
                                weight="bold"
                                className={`absolute inset-0 transition-all duration-300 ${
                                    isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                                }`}
                            />
                            <XIcon
                                size={24}
                                weight="bold"
                                className={`absolute inset-0 transition-all duration-300 ${
                                    isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                                }`}
                            />
                        </div>
                    </button>
                </div>
            </div>
            <nav
                className={`overflow-hidden transition-all duration-300 lg:hidden ${
                    isMenuOpen
                        ? 'max-h-96 border-t border-neutral-200 dark:border-neutral-700'
                        : 'max-h-0'
                }`}
                aria-label="Mobile navigation"
            >
                <div
                    className={`flex flex-col gap-1 bg-white/95 px-6 py-4 backdrop-blur-sm transition-opacity duration-300 dark:bg-neutral-900/95 ${
                        isMenuOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`rounded-lg px-4 py-3 font-medium transition-colors ${
                                    isActive
                                        ? 'text-teal-primary dark:text-teal-400'
                                        : 'text-neutral-500 hover:bg-neutral-50 hover:text-black dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-gray-100'
                                }`}
                            >
                                <span className="inline-flex flex-col">
                                    <span>{link.label}</span>
                                    {isActive && <span className="bg-teal-primary mt-1 h-0.5" />}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </header>
    );
}
