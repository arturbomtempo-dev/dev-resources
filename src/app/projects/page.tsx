'use client';

import { SectionContainer } from '@/components/SectionContainer';
import { Subtitle } from '@/components/Subtitle';
import { Title } from '@/components/Title';
import { useI18n } from '@/lib/i18n/I18nProvider';
import { ProjectCard } from './_components/ProjectCard';

export default function Projects() {
    const { t, data } = useI18n();
    const projects = data.projects;

    return (
        <SectionContainer>
            <div className="text-left">
                <Title text={t.projects.title} />
                <Subtitle text={t.projects.subtitle} />
            </div>
            <div className="mx-auto mt-8 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </SectionContainer>
    );
}
