'use client';

import { useTheme } from '@/lib/theme/ThemeProvider';
import { MoonIcon, SunIcon } from '@phosphor-icons/react';

interface ThemeSwitcherProps {
    isTransparent?: boolean;
}

export function ThemeSwitcher({ isTransparent = false }: ThemeSwitcherProps) {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`group flex cursor-pointer items-center justify-center rounded-lg border p-2.5 transition-all ${
                isTransparent
                    ? 'border-white/30 bg-white/10 text-white backdrop-blur-sm hover:border-white/50 hover:bg-white/20'
                    : 'border-neutral-200 bg-white text-neutral-700 hover:border-teal-500 hover:bg-teal-50 hover:text-teal-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:border-teal-400 dark:hover:bg-teal-950 dark:hover:text-teal-400'
            }`}
            aria-label={`Current theme: ${theme === 'light' ? 'light' : 'dark'} mode. Click to switch.`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'light' ? (
                <SunIcon
                    size={20}
                    weight="bold"
                    className="transition-transform group-hover:scale-110"
                />
            ) : (
                <MoonIcon
                    size={20}
                    weight="bold"
                    className="transition-transform group-hover:scale-110"
                />
            )}
        </button>
    );
}
