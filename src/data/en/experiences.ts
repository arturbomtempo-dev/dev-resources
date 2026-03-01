import type { ExperienceCategory } from '../types';

export interface ExperienceItem {
    title: string;
    organization: string;
    period: string;
    category: ExperienceCategory;
    iconName: string;
}

export interface ExperiencesData {
    artur: ExperienceItem[];
    eduarda: ExperienceItem[];
}

export const experiences: ExperiencesData = {
    artur: [
        {
            title: 'Software Development Internship',
            organization: 'DTI digital',
            period: 'Sep 2024 - Present',
            category: 'Profissional',
            iconName: 'Briefcase',
        },
        {
            title: 'Speaker about Docker at GDG BH',
            organization: 'WebTech Network & GDG',
            period: 'Oct 2025',
            category: 'Evento',
            iconName: 'CalendarBlank',
        },
        {
            title: 'Chapter Lead & Full Stack Developer',
            organization: 'WebTech Network',
            period: 'Mar 2024 - Present',
            category: 'Projetos',
            iconName: 'Code',
        },
        {
            title: 'Software Engineering Degree',
            organization: 'PUC Minas',
            period: 'Aug 2024 - Jul 2028',
            category: 'Acadêmica',
            iconName: 'GraduationCap',
        },
        {
            title: 'Computer Science Technical Course',
            organization: 'Cotemig',
            period: 'Feb 2021 - Dec 2023',
            category: 'Acadêmica',
            iconName: 'GraduationCap',
        },
        {
            title: 'Full Stack Developer',
            organization: 'PUCTec',
            period: '2023 - 2024',
            category: 'Profissional',
            iconName: 'Briefcase',
        },
        {
            title: 'CXO & Full Stack Developer',
            organization: 'QuickFood Technologies',
            period: '2023 - 2024',
            category: 'Profissional',
            iconName: 'Briefcase',
        },
        {
            title: 'Chatbot Development Internship',
            organization: 'Write Wall',
            period: '2023 - 2024',
            category: 'Profissional',
            iconName: 'Briefcase',
        },
        {
            title: 'Web Developer',
            organization: 'Vida Empreendimentos',
            period: '2023',
            category: 'Profissional',
            iconName: 'Briefcase',
        },
    ],
    eduarda: [
        {
            title: 'Extension student and lead website developer',
            organization: 'Elas++',
            period: 'Aug 2025 - Present',
            category: 'Projetos',
            iconName: 'Code',
        },
        {
            title: 'Extension student and software developer',
            organization: 'WebTech Network',
            period: 'Mar 2025 - Present',
            category: 'Projetos',
            iconName: 'Code',
        },
        {
            title: 'Web Interface Development Monitor',
            organization: 'PUC Minas',
            period: 'Mar 2025 - Present',
            category: 'Acadêmica',
            iconName: 'GraduationCap',
        },
        {
            title: 'Software Engineering Degree',
            organization: 'PUC Minas',
            period: 'Aug 2024 - Jul 2028',
            category: 'Acadêmica',
            iconName: 'GraduationCap',
        },
        {
            title: 'Systems Development Technical Course',
            organization: 'SENAI',
            period: 'May 2023 - Aug 2024',
            category: 'Acadêmica',
            iconName: 'GraduationCap',
        },
    ],
};
