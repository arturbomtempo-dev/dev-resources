'use client';

import { SectionContainer } from '@/components/SectionContainer';
import { Subtitle } from '@/components/Subtitle';
import { Title } from '@/components/Title';
import { useI18n } from '@/lib/i18n/I18nProvider';
import {
    BriefcaseIcon,
    CalendarBlankIcon,
    CodeIcon,
    GraduationCapIcon,
    Icon,
} from '@phosphor-icons/react';
import { useMemo, useState } from 'react';
import { ExperienceCard, ExperienceCategory } from './_components/ExperienceCard';
import { Pills } from './_components/Pills';

type ExperienceItem = {
    title: string;
    organization: string;
    period: string;
    category: ExperienceCategory;
    icon: Icon;
};

type FilterKey = 'all' | 'academic' | 'professional' | 'project' | 'event';

const iconMap: Record<string, Icon> = {
    Briefcase: BriefcaseIcon,
    CalendarBlank: CalendarBlankIcon,
    Code: CodeIcon,
    GraduationCap: GraduationCapIcon,
};

export default function Experiences() {
    const { t, data } = useI18n();
    const [selectedFilter, setSelectedFilter] = useState<FilterKey>('all');

    const arturExperiences: ExperienceItem[] = useMemo(
        () =>
            data.experiences.artur.map((exp) => ({
                ...exp,
                icon: iconMap[exp.iconName] || CodeIcon,
            })),
        [data.experiences.artur]
    );

    const eduardaExperiences: ExperienceItem[] = useMemo(
        () =>
            data.experiences.eduarda.map((exp) => ({
                ...exp,
                icon: iconMap[exp.iconName] || CodeIcon,
            })),
        [data.experiences.eduarda]
    );

    function matchFilter(item: ExperienceItem, filter: FilterKey) {
        if (filter === 'all') return true;
        if (filter === 'project') return item.category === 'Projeto';
        const categoryMap: Record<FilterKey, ExperienceCategory> = {
            academic: 'Acadêmico',
            professional: 'Profissional',
            event: 'Evento',
            all: 'Acadêmico', // dummy
            project: 'Projeto', // dummy
        };
        return item.category === categoryMap[filter];
    }

    const filteredArtur = useMemo(
        () => arturExperiences.filter((item) => matchFilter(item, selectedFilter)),
        [arturExperiences, selectedFilter, t.experiences.filters]
    );

    const filteredEduarda = useMemo(
        () => eduardaExperiences.filter((item) => matchFilter(item, selectedFilter)),
        [eduardaExperiences, selectedFilter, t.experiences.filters]
    );

    const filterOptions: { key: FilterKey; label: string }[] = [
        { key: 'all', label: t.experiences.filters.all },
        { key: 'academic', label: t.experiences.filters.academic },
        { key: 'professional', label: t.experiences.filters.professional },
        { key: 'project', label: t.experiences.filters.project },
        { key: 'event', label: t.experiences.filters.event },
    ];

    return (
        <SectionContainer>
            <Title text={t.experiences.title} />
            <Subtitle text={t.experiences.subtitle} />
            <div className="my-4 flex flex-wrap gap-2">
                {filterOptions.map((filter) => (
                    <Pills
                        key={filter.key}
                        text={filter.label}
                        isActive={selectedFilter === filter.key}
                        onClick={() => setSelectedFilter(filter.key)}
                    />
                ))}
            </div>

            <section className="mb-8 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-6">
                <div className="w-full md:border-r md:border-gray-300 md:pr-8 dark:md:border-neutral-600">
                    <h3 className="mb-4 text-center text-2xl font-semibold dark:text-gray-100">
                        {t.experiences.tabs.artur} Bomtempo
                    </h3>
                    <div className="flex flex-col gap-4">
                        {filteredArtur.map((experience, index) => (
                            <ExperienceCard
                                key={`${experience.title}-${experience.period}`}
                                title={experience.title}
                                organization={experience.organization}
                                period={experience.period}
                                category={experience.category}
                                icon={experience.icon}
                                showLine={index < filteredArtur.length - 1}
                            />
                        ))}
                    </div>
                </div>

                <div className="w-full">
                    <div className="w-full">
                        <h3 className="mb-4 text-center text-2xl font-semibold dark:text-gray-100">
                            {t.experiences.tabs.eduarda} Vieira
                        </h3>
                        <div className="flex flex-col gap-4">
                            {filteredEduarda.map((experience, index) => (
                                <ExperienceCard
                                    key={`${experience.title}-${experience.period}`}
                                    title={experience.title}
                                    organization={experience.organization}
                                    period={experience.period}
                                    category={experience.category}
                                    icon={experience.icon}
                                    showLine={index < filteredEduarda.length - 1}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </SectionContainer>
    );
}
