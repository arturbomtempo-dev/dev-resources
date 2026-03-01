export type Locale = 'pt' | 'en';

export const locales: Locale[] = ['pt', 'en'];
export const defaultLocale: Locale = 'pt';

export const localeNames: Record<Locale, string> = {
    pt: 'Português',
    en: 'English',
};
