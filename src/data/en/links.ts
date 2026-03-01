import type { Link } from '../types';

export const links: Link[] = [
    {
        id: 1,
        title: 'Next.js Documentation',
        description: 'Official Next.js documentation with comprehensive guides and references.',
        url: 'https://nextjs.org/docs',
        category: 'documentation',
        tags: ['Next.js', 'React', 'Framework'],
    },
    {
        id: 2,
        title: 'Tailwind CSS',
        description: 'Utility-first CSS framework for rapid interface development.',
        url: 'https://tailwindcss.com',
        category: 'tool',
        tags: ['CSS', 'Styling', 'Framework'],
    },
];

export const getAllLinks = (): Link[] => links;

export const getLinksByCategory = (category: Link['category']): Link[] =>
    links.filter((link) => link.category === category);

export const getLinkById = (id: number): Link | undefined => links.find((link) => link.id === id);
