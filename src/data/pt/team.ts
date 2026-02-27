import type { AboutMember, AboutMemberKey, TeamMember } from '../types';

export const team: TeamMember[] = [
    {
        id: 1,
        name: 'Artur',
        role: 'Desenvolvedor Full Stack',
        bio: 'Apaixonado por tecnologia e desenvolvimento web. Especializado em React, Next.js e TypeScript.',
        socialLinks: {
            github: 'https://github.com/artur',
            linkedin: 'https://linkedin.com/in/artur',
        },
    },
    {
        id: 2,
        name: 'Eduarda',
        role: 'Desenvolvedora Full Stack',
        bio: 'Entusiasta de UI/UX e desenvolvimento frontend. Focada em criar experiências incríveis.',
        socialLinks: {
            github: 'https://github.com/eduarda',
            linkedin: 'https://linkedin.com/in/eduarda',
        },
    },
];

export const getAllTeamMembers = (): TeamMember[] => team;

export const getTeamMemberById = (id: number): TeamMember | undefined =>
    team.find((member) => member.id === id);

export const aboutMembers: AboutMember[] = [
    {
        key: 'eduarda',
        name: 'Eduarda Vieira',
        role: 'Estudante de Engenharia de Software',
        institution: 'PUC Minas',
        image: '/Eduarda.png',
        bio: 'Desenvolvedora frontend apaixonada por design, UX e tecnologias web modernas. Acredita que a tecnologia deve ser acessível e bonita.',
        interests: ['Frontend', 'UI/UX Design', 'APIs', 'Banco de dados'],
        technologies: ['React', 'Next.js', 'Tailwind CSS', 'Figma', 'Typescript', 'Node.js'],
        accent: 'pink',
        socialLinks: {
            github: 'https://github.com/eduardavieira-dev',
            linkedin: 'https://www.linkedin.com/in/eduarda-vieira-gon%C3%A7alves-01a584297/',
            instagram: 'https://www.instagram.com/eduardavieira.dev/',
            website: 'https://portifolio-eduardavieira.vercel.app/',
        },
    },
    {
        key: 'artur',
        name: 'Artur Bomtempo',
        role: 'Estudante de Engenharia de Software',
        institution: 'PUC Minas',
        image: '/Artur.png',
        bio: 'Desenvolvedor fullstack focado em soluções escaláveis e experiências digitais impactantes. Entusiasta de backend, APIs e arquitetura de software.',
        interests: ['Backend', 'Cloud', 'IA', 'APIs', 'Banco de dados'],
        technologies: ['Node.js', 'Spring Boot', 'PostgreSQL', 'Docker', 'Typescript', 'React'],
        accent: 'green',
        socialLinks: {
            github: 'https://github.com/arturbomtempo-dev',
            linkedin: 'https://www.linkedin.com/in/artur-bomtempo/',
            instagram: 'https://www.instagram.com/arturbomtempo.dev/',
            website: 'https://arturbomtempo.dev',
            youtube: 'https://www.youtube.com/@ArturBomtempoDev',
        },
    },
];

export const getAllAboutMembers = (): AboutMember[] => aboutMembers;

export const getAboutMemberByKey = (key: AboutMemberKey): AboutMember | undefined =>
    aboutMembers.find((member) => member.key === key);
