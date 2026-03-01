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
                    ? 'border-white/30 bg-white/10 text-white backdrop-blur-sm hover:border-white/50 hover:bg-white/20'
                    : 'border-neutral-200 bg-white text-neutral-700 hover:border-teal-500 hover:bg-teal-50 hover:text-teal-600'
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
