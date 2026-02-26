import type { Project } from '../types';

export const projects: Project[] = [
    {
        id: 1,
        title: 'DevResources',
        description: 'Plataforma web colaborativa de curadoria digital e portfólio de projetos.',
        imageUrl: '/projects/devresources-placeholder.svg',
        imageAlt: 'Screenshot do projeto DevResources',
        repositoryUrl: 'https://github.com/username/devresources',
        demoUrl: 'https://devresources.com',
        tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
        featured: true,
    },
    {
        id: 2,
        title: 'Studio Ghibli API',
        description:
            'Site desenvolvido para o workshop de React para ensinar o uso de API com o framework',
        imageUrl: '/projects/studioghibli-placeholder.svg',
        imageAlt: 'Screenshot do projeto Studio Ghibli API',
        repositoryUrl: 'https://github.com/username/studio-ghibli',
        demoUrl: 'https://studioghibli.com',
        tags: ['React', 'API', 'CSS'],
        featured: false,
    },
    {
        id: 3,
        title: 'Craft API',
        description:
            'Site desenvolvido para aplicar os conhecimentos sobre API e design usando a API do Minecraft',
        imageUrl: '/projects/craft-placeholder.svg',
        imageAlt: 'Screenshot do projeto Craft API',
        repositoryUrl: 'https://github.com/username/craft-api',
        demoUrl: 'https://craftapi.com',
        tags: ['React', 'API', 'Minecraft'],
        featured: false,
    },
];

export const getAllProjects = (): Project[] => projects;

export const getFeaturedProjects = (): Project[] => projects.filter((project) => project.featured);

export const getProjectById = (id: number): Project | undefined =>
    projects.find((project) => project.id === id);
