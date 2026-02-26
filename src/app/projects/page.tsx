import { SectionContainer } from '@/components/SectionContainer';
import { Subtitle } from '@/components/Subtitle';
import { Title } from '@/components/Title';
import { getAllProjects } from '@/data/pt/projects';
import { ProjectCard } from './_components/ProjectCard';

export default function Projects() {
    const projects = getAllProjects();

    return (
        <SectionContainer>
            <div className="text-left">
                <Title text="Projetos" />
                <Subtitle text="Conheça outros de nossos projetos desenvolvidos." />
            </div>
            <div className="mx-auto mt-8 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </SectionContainer>
    );
}
