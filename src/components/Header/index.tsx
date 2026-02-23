'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Logo } from '../Logo';
import { ListIcon, XIcon } from '@phosphor-icons/react';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/indications', label: 'Indicações' },
    { href: '/about', label: 'Sobre nós' },
    { href: '/projects', label: 'Projetos' },
    { href: '/experiences', label: 'Experiencias' },
    { href: '/contact', label: 'Contato' },
];

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const isHomePage = pathname === '/';
    const isTransparent = isHomePage && !isScrolled;

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
                isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
            }`}
        >
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:justify-around">
                <Link href="/">
                    <Logo variant={isTransparent ? 'light' : 'default'} />
                </Link>
                <nav className="hidden gap-8 lg:flex">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`group inline-flex flex-col items-center font-medium transition-colors duration-300 ${
                                    isTransparent
                                        ? 'text-white/80 hover:text-white'
                                        : 'text-neutral-500 hover:text-black'
                                }`}
                            >
                                <span
                                    className={
                                        isActive
                                            ? isTransparent
                                                ? 'text-white'
                                                : 'text-black'
                                            : ''
                                    }
                                >
                                    {link.label}
                                </span>
                                <span
                                    className={`mt-1 h-0.5 transition-all duration-300 ${
                                        isTransparent ? 'bg-white' : 'bg-teal-primary'
                                    } ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                                />
                            </Link>
                        );
                    })}
                </nav>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`flex h-10 w-10 cursor-pointer items-center justify-center transition-colors duration-300 lg:hidden ${
                        isTransparent
                            ? 'text-white hover:text-white/80'
                            : 'hover:text-blue-primary text-neutral-500'
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
            <nav
                className={`overflow-hidden transition-all duration-300 lg:hidden ${
                    isMenuOpen ? 'max-h-96 border-t border-neutral-200' : 'max-h-0'
                }`}
            >
                <div
                    className={`flex flex-col gap-1 bg-white/95 px-6 py-4 backdrop-blur-sm transition-opacity duration-300 ${
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
                                        ? 'text-teal-primary'
                                        : 'text-neutral-500 hover:bg-neutral-50 hover:text-black'
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
