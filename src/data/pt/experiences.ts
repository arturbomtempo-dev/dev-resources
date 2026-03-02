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
            title: 'Desenvolvedor de Software',
            organization: 'dti digital',
            period: 'Set 2025 - Atualmente',
            category: 'Profissional',
            iconName: 'Briefcase',
        },
        {
            title: 'Graduação em Engenharia de Software',
            organization: 'PUC Minas',
            period: 'Fev 2025 - Jul 2028',
            category: 'Acadêmico',
            iconName: 'GraduationCap',
        },
        {
            title: 'Chapter Lead & Desenvolvedor Full Stack',
            organization: 'WebTech Network',
            period: 'Jun 2024 - Atualmente',
            category: 'Projeto',
            iconName: 'Code',
        },
        {
            title: 'Workshop de Docker no DevFest',
            organization: 'GDG BH',
            period: 'Out 2025',
            category: 'Evento',
            iconName: 'CalendarBlank',
        },
        {
            title: 'Monitor Acadêmico',
            organization: 'PUC Minas',
            period: 'Ago 2024 - Set 2025',
            category: 'Acadêmico',
            iconName: 'GraduationCap',
        },
        {
            title: 'Palestra sobre Design Patterns & React.js',
            organization: 'PUC Minas',
            period: 'Jul 2025',
            category: 'Evento',
            iconName: 'CalendarBlank',
        },
        {
            title: 'Introdução ao Desenvolvimento Front-end para colaboradores da ASSPROM',
            organization: 'WebTech Network & Elas++',
            period: 'Mar 2025 - Mai 2025',
            category: 'Projeto',
            iconName: 'Code',
        },
        {
            title: 'Desenvolvedor Full Stack',
            organization: 'PUCTec',
            period: 'Ago 2024 - Dez 2024',
            category: 'Projeto',
            iconName: 'Code',
        },
        {
            title: 'Graduação em Ciência da Computação',
            organization: 'PUC Minas',
            period: 'Fev 2024 - Dez 2024',
            category: 'Acadêmico',
            iconName: 'GraduationCap',
        },
        {
            title: 'CXO & Desenvolvedor Full Stack',
            organization: 'QuickFood Technologies',
            period: 'Ago 2023 - Out 2024',
            category: 'Profissional',
            iconName: 'Briefcase',
        },
        {
            title: 'Workshop de React.js e Next.js no DevFest',
            organization: 'GDH BH',
            period: 'Set 2024',
            category: 'Evento',
            iconName: 'CalendarBlank',
        },
        {
            title: 'Palestra sobre Algorítmos e Estrutura de Dados I',
            organization: 'PUC Minas',
            period: 'Jul 2024',
            category: 'Evento',
            iconName: 'CalendarBlank',
        },
        {
            title: 'Desenvolvedor de Chatbot',
            organization: 'White Wall',
            period: 'Abr 2023 - Fev 2024',
            category: 'Profissional',
            iconName: 'Briefcase',
        },
        {
            title: 'Curso Técnico em Informática',
            organization: 'Colégio Cotemig',
            period: 'Fev 2021 - Nov 2023',
            category: 'Acadêmico',
            iconName: 'GraduationCap',
        },
        {
            title: 'Monitor de Laboratório',
            organization: 'Code Club',
            period: 'Abr 2023 - Jul 2023',
            category: 'Projeto',
            iconName: 'Code',
        },
        {
            title: 'Desenvolvedor Web',
            organization: 'Vidas Empreendimentos',
            period: 'Fev 2023 - Abr 2023',
            category: 'Profissional',
            iconName: 'Briefcase',
        },
    ],
    eduarda: [
        {
            title: 'Extensionista e líder no desenvolvimento do site',
            organization: 'Elas++',
            period: 'Ago 2025 - Atualmente',
            category: 'Projeto',
            iconName: 'Code',
        },
        {
            title: 'Extensionista e desenvolvedora de software',
            organization: 'WebTech Network',
            period: 'Mar 2025 - Atualmente',
            category: 'Projeto',
            iconName: 'Code',
        },
        {
            title: 'Monitoria de Desenvolvimento de Interfaces Web',
            organization: 'PUC Minas',
            period: 'Mar 2025 - Atualmente',
            category: 'Acadêmico',
            iconName: 'GraduationCap',
        },
        {
            title: 'Palestra sobre Design Patterns',
            organization: 'PUC Minas',
            period: 'Jul 2025',
            category: 'Evento',
            iconName: 'CalendarBlank',
        },
        {
            title: 'Introdução ao Desenvolvimento Front-end para colaboradores da ASSPROM',
            organization: 'WebTech Network & Elas++',
            period: 'Mar 2025 - Mai 2025',
            category: 'Projeto',
            iconName: 'Code',
        },
        {
            title: 'Graduação em Engenharia de Software',
            organization: 'PUC Minas',
            period: 'Ago 2024 - Jul 2028',
            category: 'Acadêmico',
            iconName: 'GraduationCap',
        },
        {
            title: 'Curso Técnico em Desenvolvimento de Sistemas',
            organization: 'SENAI',
            period: 'Mai 2023 - Ago 2024',
            category: 'Acadêmico',
            iconName: 'GraduationCap',
        },
    ],
};
