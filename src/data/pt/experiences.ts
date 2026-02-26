import type { Experience } from '../types';

export const experiences: Experience[] = [
    {
        id: 1,
        title: 'Desenvolvedor Full Stack',
        company: 'Exemplo Tech',
        period: '2024 - Presente',
        description:
            'Desenvolvimento de aplicações web modernas utilizando Next.js, React e TypeScript.',
        technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    },
];

export const getAllExperiences = (): Experience[] => experiences;

export const getExperienceById = (id: number): Experience | undefined =>
    experiences.find((exp) => exp.id === id);
