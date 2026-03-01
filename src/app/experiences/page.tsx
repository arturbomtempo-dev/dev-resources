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
import { useEffect, useMemo, useState } from 'react';
import { ExperienceCard, ExperienceCategory } from './_components/ExperienceCard';
import { Pills } from './_components/Pills';

type ExperienceItem = {
    title: string;
    organization: string;
    period: string;
    category: ExperienceCategory;
    icon: Icon;
};

const iconMap: Record<string, Icon> = {
    Briefcase: BriefcaseIcon,
    CalendarBlank: CalendarBlankIcon,
    Code: CodeIcon,
    GraduationCap: GraduationCapIcon,
};

export default function Experiences() {
    const { t, data, locale } = useI18n();
    const [selectedFilter, setSelectedFilter] = useState<string>(t.experiences.filters.all);

    useEffect(() => {
        setSelectedFilter(t.experiences.filters.all);
    }, [locale, t.experiences.filters.all]);

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

    function matchFilter(item: ExperienceItem, filter: string) {
        if (filter === t.experiences.filters.all) {
            return true;
        }

        if (filter === t.experiences.filters.project) {
            return item.category === 'Projetos';
        }

        const categoryMap: Record<string, ExperienceCategory> = {
            [t.experiences.filters.academic]: 'Acadêmica',
            [t.experiences.filters.professional]: 'Profissional',
            [t.experiences.filters.event]: 'Evento',
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

    const filterOptions = [
        t.experiences.filters.all,
        t.experiences.filters.academic,
        t.experiences.filters.professional,
        t.experiences.filters.project,
        t.experiences.filters.event,
    ];

    return (
        <SectionContainer>
            <Title text={t.experiences.title} />
            <Subtitle text={t.experiences.subtitle} />
            <div className="my-4 flex flex-wrap gap-2">
                {filterOptions.map((filter) => (
                    <Pills
                        key={filter}
                        text={filter}
                        isActive={selectedFilter === filter}
                        onClick={() => setSelectedFilter(filter)}
                    />
                ))}
            </div>

            <section className="mb-8 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-6">
                <div className="w-full md:border-r md:border-gray-300 md:pr-8 dark:md:border-neutral-600">
                    <h3 className="mb-4 text-center text-2xl font-semibold dark:text-white">
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
                        <h3 className="mb-4 text-center text-2xl font-semibold dark:text-white">
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
