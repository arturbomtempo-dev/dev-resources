'use client';
import { SectionContainer } from '@/components/SectionContainer';
import { Subtitle } from '@/components/Subtitle';
import { Title } from '@/components/Title';
import { useI18n } from '@/lib/i18n/I18nProvider';
import { ArrowLeft } from '@phosphor-icons/react';
import Link from 'next/link';

export default function NotFound() {
    const { t } = useI18n();

    return (
        <SectionContainer>
            <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
                <Title text={t.projects.notFound.title} />
                <Subtitle text={t.projects.notFound.description} />
                <Link
                    href="/projects"
                    className="from-blue-accent to-blue-accent-dark hover:from-blue-accent-dark hover:to-blue-accent mt-8 inline-flex items-center gap-2 rounded-lg bg-linear-to-r px-6 py-3 font-medium text-white transition-all hover:shadow-lg"
                >
                    <ArrowLeft size={20} weight="bold" />
                    {t.projects.backToProjects}
                </Link>
            </div>
        </SectionContainer>
    );
}
