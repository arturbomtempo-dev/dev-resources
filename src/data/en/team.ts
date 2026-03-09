import type { AboutMember, AboutMemberKey, TeamMember } from '../types';

export const team: TeamMember[] = [
    {
        id: 1,
        name: 'Artur',
        role: 'Full Stack Developer',
        bio: 'Passionate about technology and web development. Specialized in React, Next.js, and TypeScript.',
        socialLinks: {
            github: 'https://github.com/artur',
            linkedin: 'https://linkedin.com/in/artur',
        },
    },
    {
        id: 2,
        name: 'Eduarda',
        role: 'Full Stack Developer',
        bio: 'UI/UX and frontend development enthusiast. Focused on creating amazing experiences.',
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
        role: 'Software Engineering Student',
        institution: 'PUC Minas',
        image: '/developers/eduarda.png',
        bio: 'Front-end developer passionate about design, user experience (UX), and modern web technologies. Believes that well-crafted interfaces make technology more accessible, intuitive, and enjoyable for people.',
        interests: ['Front-end', 'UX/UI Design', 'APIs', 'Databases'],
        technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Figma'],
        accent: 'pink',
        githubUsername: 'eduardavieira-dev',
        socialLinks: {
            github: 'https://github.com/eduardavieira-dev',
            linkedin: 'https://www.linkedin.com/in/eduarda-vieira-gon%C3%A7alves-01a584297/',
            instagram: 'https://www.instagram.com/eduardavieira.dev/',
            website: 'https://portfolio-eduardavieira.vercel.app/',
        },
    },
    {
        key: 'artur',
        name: 'Artur Bomtempo',
        role: 'Software Engineering Student',
        institution: 'PUC Minas',
        image: '/developers/artur.png',
        bio: 'Full stack developer and back-end enthusiast passionate about building scalable and well-structured applications. Believes that strong design patterns and solid architecture are essential to turning ideas into efficient and long-lasting solutions.',
        interests: ['Back-end', 'Front-end', 'Artificial Intelligence', 'Chatbot', 'Mobile'],
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
