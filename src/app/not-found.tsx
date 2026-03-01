'use client';
import { useI18n } from '@/lib/i18n/I18nProvider';

export default function NotFound() {
    const { t } = useI18n();
    return <h1>{t.common.notFoundMessage}</h1>;
}
