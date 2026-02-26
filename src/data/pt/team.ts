import type { TeamMember } from '../types';

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
