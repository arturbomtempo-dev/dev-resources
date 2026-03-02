'use client';

import { Locale, localeNames } from '@/config/i18n';
import { useI18n } from '@/lib/i18n/I18nProvider';
import { TranslateIcon } from '@phosphor-icons/react';

interface LanguageSwitcherProps {
    isTransparent?: boolean;
}

export function LanguageSwitcher({ isTransparent = false }: LanguageSwitcherProps) {
    const { locale, setLocale } = useI18n();

    const toggleLocale = () => {
        const newLocale: Locale = locale === 'pt' ? 'en' : 'pt';
        setLocale(newLocale);
    };

    return (
        <button
            onClick={toggleLocale}
            className={`group flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-all ${
                isTransparent
                    ? 'border-[#ffffff]/30 bg-[#ffffff]/10 text-[#ffffff] backdrop-blur-sm hover:border-[#ffffff]/50 hover:bg-[#ffffff]/20'
                    : 'border-neutral-200 bg-white text-neutral-700 hover:border-teal-500 hover:bg-teal-50 hover:text-teal-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:border-teal-400 dark:hover:bg-teal-950 dark:hover:text-teal-400'
            }`}
            aria-label={`Switch language to ${locale === 'pt' ? 'English' : 'Português'}`}
            title={`Switch to ${localeNames[locale === 'pt' ? 'en' : 'pt']}`}
        >
            <TranslateIcon
                size={18}
                weight="bold"
                className="transition-transform group-hover:scale-110"
            />
            <span className="uppercase">{locale}</span>
        </button>
    );
}
