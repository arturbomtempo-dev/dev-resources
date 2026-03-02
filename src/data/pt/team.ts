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
        bio: 'Desenvolvedora front-end apaixonada por design, experiência do usuário (UX) e tecnologias web modernas. Acredita que interfaces bem construídas tornam a tecnologia mais acessível, intuitiva e agradável para as pessoas.',
        interests: ['Front-end', 'UX/UI Design', 'APIs', 'Banco de Dados'],
        technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Figma'],
        accent: 'pink',
        githubUsername: 'eduardavieira-dev',
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
        bio: 'Desenvolvedor full stack e entusiasta de back-end, apaixonado por construir aplicações escaláveis e bem estruturadas. Acredita que bons padrões de projeto e uma arquitetura sólida são essenciais para transformar ideias em soluções eficientes e duradouras.',
        interests: ['Back-end', 'Front-end', 'Inteligência Artificial', 'Chatbot', 'Mobile'],
        technologies: ['Node.js', 'Spring Boot', '.NET', 'Next.js', 'Docker', 'PostgreSQL'],
        accent: 'green',
        githubUsername: 'arturbomtempo-dev',
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
