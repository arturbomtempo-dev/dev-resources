import type { Project } from '../types';

export const projects: Project[] = [
    {
        id: 1,
        title: 'DevResources',
        description: 'Collaborative web platform for digital curation and project portfolio.',
        longDescription:
            'DevResources is a comprehensive platform that centralizes development resources, showcases collaborative projects, and offers curated tools and relevant content for developers. The project was developed with a focus on performance, accessibility, and user experience, using the most modern technologies from the React ecosystem.',
        imageUrl: '/projects/devresources-placeholder.svg',
        imageAlt: 'Screenshot of DevResources project',
        repositoryUrl: 'https://github.com/username/devresources',
        demoUrl: 'https://devresources.com',
        tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
        featured: true,
        authorIds: [1, 2],
        screenshots: [
            {
                imageUrl: '/projects/devresources-placeholder.svg',
                caption: 'Home page with curated resources for developers',
            },
            {
                imageUrl: '/projects/devresources-placeholder.svg',
                caption: 'View of team collaborative projects',
            },
            {
                imageUrl: '/projects/devresources-placeholder.svg',
                caption: 'Search interface with advanced filters',
            },
        ],
    },
    {
        id: 2,
        title: 'Studio Ghibli API',
        description: 'Website developed for React workshop to teach API usage with the framework',
        longDescription:
            'Educational project developed for the React workshop, focused on teaching the fundamental concepts of API consumption and state management. The site presents information about Studio Ghibli films in an interactive and visually appealing way, serving as practical material for teaching React beginners.',
        imageUrl: '/projects/studioghibli-placeholder.svg',
        imageAlt: 'Screenshot of Studio Ghibli API project',
        repositoryUrl: 'https://github.com/username/studio-ghibli',
        demoUrl: 'https://studioghibli.com',
        tags: ['React', 'API', 'CSS'],
        featured: false,
        authorIds: [2],
        screenshots: [
            {
                imageUrl: '/projects/studioghibli-placeholder.svg',
                caption: 'Studio Ghibli film catalog with detailed information',
            },
            {
                imageUrl: '/projects/studioghibli-placeholder.svg',
                caption: 'Film details page with synopsis and ratings',
            },
        ],
    },
    {
        id: 3,
        title: 'Craft API',
        description:
            'Website developed to apply knowledge about APIs and design using the Minecraft API',
        longDescription:
            "Application developed to explore the Minecraft API, allowing users to view detailed information about items, blocks, and game mechanics. The project combines advanced search functionalities with a design inspired by Minecraft's pixelated aesthetic, offering a unique and immersive experience.",
        imageUrl: '/projects/craft-placeholder.svg',
        imageAlt: 'Screenshot of Craft API project',
        repositoryUrl: 'https://github.com/username/craft-api',
        demoUrl: 'https://craftapi.com',
        tags: ['React', 'API', 'Minecraft'],
        featured: false,
        authorIds: [1],
        screenshots: [
            {
                imageUrl: '/projects/craft-placeholder.svg',
                caption: 'Search interface for Minecraft items and blocks',
            },
            {
                imageUrl: '/projects/craft-placeholder.svg',
                caption: 'Detailed item view with crafting recipes',
            },
        ],
    },
];

export const getAllProjects = (): Project[] => projects;

export const getFeaturedProjects = (): Project[] => projects.filter((project) => project.featured);

export const getProjectById = (id: number): Project | undefined =>
    projects.find((project) => project.id === id);
