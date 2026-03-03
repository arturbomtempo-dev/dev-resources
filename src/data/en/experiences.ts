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
            title: 'Software Developer',
            organization: 'dti digital',
            period: 'Sep 2025 - Present',
            category: 'Profissional',
            iconName: 'Briefcase',
        },
        {
            title: 'Bachelor in Software Engineering',
            organization: 'PUC Minas',
            period: 'Feb 2025 - Jul 2028',
            category: 'Acadêmico',
            iconName: 'GraduationCap',
        },
        {
            title: 'Chapter Lead & Full Stack Developer',
            organization: 'WebTech Network',
            period: 'Jun 2024 - Present',
            category: 'Projeto',
            iconName: 'Code',
        },
        {
            title: 'Docker Workshop at DevFest',
            organization: 'GDG BH',
            period: 'Oct 2025',
            category: 'Evento',
            iconName: 'CalendarBlank',
        },
        {
            title: 'Academic Monitor',
            organization: 'PUC Minas',
            period: 'Aug 2024 - Sep 2025',
            category: 'Acadêmico',
            iconName: 'GraduationCap',
        },
        {
            title: 'Lecture on Design Patterns & React.js',
            organization: 'PUC Minas',
            period: 'Jul 2025',
            category: 'Evento',
            iconName: 'CalendarBlank',
        },
        {
            title: 'Introduction to Front-end Development for ASSPROM collaborators',
            organization: 'WebTech Network & Elas++',
            period: 'Mar 2025 - May 2025',
            category: 'Projeto',
            iconName: 'Code',
        },
        {
            title: 'Full Stack Developer',
            organization: 'PUCTec',
            period: 'Aug 2024 - Dec 2024',
            category: 'Projeto',
            iconName: 'Code',
        },
        {
            title: 'Bachelor in Computer Science',
            organization: 'PUC Minas',
            period: 'Feb 2024 - Dec 2024',
            category: 'Acadêmico',
            iconName: 'GraduationCap',
        },
        {
            title: 'CXO & Full Stack Developer',
            organization: 'QuickFood Technologies',
            period: 'Aug 2023 - Oct 2024',
            category: 'Profissional',
            iconName: 'Briefcase',
        },
        {
            title: 'React.js and Next.js Workshop at DevFest',
            organization: 'GDH BH',
            period: 'Sep 2024',
            category: 'Evento',
            iconName: 'CalendarBlank',
        },
        {
            title: 'Lecture on Algorithms and Data Structures I',
            organization: 'PUC Minas',
            period: 'Jul 2024',
            category: 'Evento',
            iconName: 'CalendarBlank',
        },
        {
            title: 'Chatbot Developer',
            organization: 'White Wall',
            period: 'Apr 2023 - Feb 2024',
            category: 'Profissional',
            iconName: 'Briefcase',
        },
        {
            title: 'Technical Course in Computer Science',
            organization: 'Colégio Cotemig',
            period: 'Feb 2021 - Nov 2023',
            category: 'Acadêmico',
            iconName: 'GraduationCap',
        },
        {
            title: 'Lab Monitor',
            organization: 'Code Club',
            period: 'Apr 2023 - Jul 2023',
            category: 'Projeto',
            iconName: 'Code',
        },
        {
            title: 'Web Developer',
            organization: 'Vidas Empreendimentos',
            period: 'Feb 2023 - Apr 2023',
            category: 'Profissional',
            iconName: 'Briefcase',
        },
    ],
    eduarda: [
        {
            title: 'Software developer and lead website developer',
            organization: 'Elas++',
            period: 'Aug 2025 - Present',
            category: 'Projeto',
            iconName: 'Code',
        },
        {
            title: 'Full Stack Developer',
            organization: 'WebTech Network',
            period: 'Mar 2025 - Present',
            category: 'Projeto',
            iconName: 'Code',
        },
        {
            title: 'Web Interface Development Monitor',
            organization: 'PUC Minas',
            period: 'Mar 2025 - Present',
            category: 'Acadêmico',
            iconName: 'GraduationCap',
        },
         {
            title: 'Lecture on Design Patterns',
            organization: 'PUC Minas',
            period: 'Jul 2025',
            category: 'Evento',
            iconName: 'CalendarBlank',
        },
        {
            title: 'Introduction to Front-end Development for ASSPROM collaborators',
            organization: 'WebTech Network & Elas++',
            period: 'Mar 2025 - May 2025',
            category: 'Projeto',
            iconName: 'Code',
        },
        {
            title: 'Software Engineering Degree',
            organization: 'PUC Minas',
            period: 'Aug 2024 - Jul 2028',
            category: 'Acadêmico',
            iconName: 'GraduationCap',
        },
        {
            title: 'Systems Development Technical Course',
            organization: 'SENAI',
            period: 'May 2023 - Aug 2024',
            category: 'Acadêmico',
            iconName: 'GraduationCap',
        },
    ],
};
