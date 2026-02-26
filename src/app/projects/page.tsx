import { Subtitle } from '@/components/Subtitle';
import { Title } from '@/components/Title';
import { ProjectCard } from './_components/ProjectCard';
import { SectionContainer } from '@/components/SectionContainer';

// TODO: Substituir placeholders por imagens reais dos projetos
const projects = [
    {
        id: 1,
        title: 'DevResources',
        description: 'Plataforma web colaborativa de curadoria digital e portfólio de projetos.',
        imageUrl: '/projects/devresources-placeholder.svg',
        repositoryUrl: 'https://github.com',
        demoUrl: 'https://devresources.com',
    },
    {
        id: 2,
        title: 'Studio Ghibli API',
        description:
            'Site desenvolvido para o workshop de React para ensinar o uso de API com o framework',
        imageUrl: '/projects/studioghibli-placeholder.svg',
        repositoryUrl: 'https://github.com',
        demoUrl: 'https://studioghibli.com',
    },
    {
        id: 3,
        title: 'Craft API',
        description:
            'Site desenvolvido para aplicar os conhecimentos sobre API e design usando a API do Minecraft',
        imageUrl: '/projects/craft-placeholder.svg',
        repositoryUrl: 'https://github.com',
        demoUrl: 'https://caftapi.com',
    },
];

export default function Projects() {
    return (
        <SectionContainer>
            <div className="text-center">
                <Title text="Projetos" />
                <Subtitle text="Conheça outros de nossos projetos desenvolvidos." />
            </div>
            <div className="mx-auto mt-8 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        repositoryUrl={project.repositoryUrl}
                        demoUrl={project.demoUrl}
                    />
                ))}
            </div>
        </SectionContainer>
    );
}
