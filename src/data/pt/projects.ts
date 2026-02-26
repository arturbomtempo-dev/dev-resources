import type { Project } from '../types';

export const projects: Project[] = [
    {
        id: 1,
        title: 'DevResources',
        description: 'Plataforma web colaborativa de curadoria digital e portfólio de projetos.',
        longDescription:
            'DevResources é uma plataforma completa que centraliza recursos de desenvolvimento, apresenta projetos colaborativos e oferece curadoria de ferramentas e conteúdos relevantes para desenvolvedores. O projeto foi desenvolvido com foco em performance, acessibilidade e experiência do usuário, utilizando as tecnologias mais modernas do ecossistema React.',
        imageUrl: '/projects/devresources-placeholder.svg',
        imageAlt: 'Screenshot do projeto DevResources',
        repositoryUrl: 'https://github.com/username/devresources',
        demoUrl: 'https://devresources.com',
        tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
        featured: true,
        authorIds: [1, 2],
        screenshots: [
            {
                imageUrl: '/projects/devresources-placeholder.svg',
                caption: 'Página inicial com curadoria de recursos para desenvolvedores',
            },
            {
                imageUrl: '/projects/devresources-placeholder.svg',
                caption: 'Visualização de projetos colaborativos da equipe',
            },
            {
                imageUrl: '/projects/devresources-placeholder.svg',
                caption: 'Interface de busca e filtros avançados',
            },
        ],
    },
    {
        id: 2,
        title: 'Studio Ghibli API',
        description:
            'Site desenvolvido para o workshop de React para ensinar o uso de API com o framework',
        longDescription:
            'Projeto educacional desenvolvido para o workshop de React, focado em ensinar os conceitos fundamentais de consumo de APIs e gerenciamento de estado. O site apresenta informações sobre os filmes do Studio Ghibli de forma interativa e visualmente atraente, servindo como material prático para aprenderiniciantes em React.',
        imageUrl: '/projects/studioghibli-placeholder.svg',
        imageAlt: 'Screenshot do projeto Studio Ghibli API',
        repositoryUrl: 'https://github.com/username/studio-ghibli',
        demoUrl: 'https://studioghibli.com',
        tags: ['React', 'API', 'CSS'],
        featured: false,
        authorIds: [2],
        screenshots: [
            {
                imageUrl: '/projects/studioghibli-placeholder.svg',
                caption: 'Catálogo de filmes do Studio Ghibli com informações detalhadas',
            },
            {
                imageUrl: '/projects/studioghibli-placeholder.svg',
                caption: 'Página de detalhes de filme com sinopse e avaliações',
            },
        ],
    },
    {
        id: 3,
        title: 'Craft API',
        description:
            'Site desenvolvido para aplicar os conhecimentos sobre API e design usando a API do Minecraft',
        longDescription:
            'Aplicação desenvolvida para explorar a API do Minecraft, permitindo aos usuários visualizar informações detalhadas sobre itens, blocos e mecânicas do jogo. O projeto combina funcionalidades de busca avançada com um design inspirado na estética pixelada do Minecraft, oferecendo uma experiência única e imersiva.',
        imageUrl: '/projects/craft-placeholder.svg',
        imageAlt: 'Screenshot do projeto Craft API',
        repositoryUrl: 'https://github.com/username/craft-api',
        demoUrl: 'https://craftapi.com',
        tags: ['React', 'API', 'Minecraft'],
        featured: false,
        authorIds: [1],
        screenshots: [
            {
                imageUrl: '/projects/craft-placeholder.svg',
                caption: 'Interface de busca de itens e blocos do Minecraft',
            },
            {
                imageUrl: '/projects/craft-placeholder.svg',
                caption: 'Visualização detalhada de itens com receitas de crafting',
            },
        ],
    },
];

export const getAllProjects = (): Project[] => projects;

export const getFeaturedProjects = (): Project[] => projects.filter((project) => project.featured);

export const getProjectById = (id: number): Project | undefined =>
    projects.find((project) => project.id === id);
