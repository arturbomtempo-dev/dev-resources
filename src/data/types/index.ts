export interface Project {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    imageUrl: string;
    imageAlt?: string;
    repositoryUrl?: string;
    demoUrl?: string;
    tags?: string[];
    featured?: boolean;
    authorIds?: number[];
    screenshots?: {
        imageUrl: string;
        caption: string;
    }[];
}

export interface Experience {
    id: number;
    title: string;
    company: string;
    period: string;
    description: string;
    technologies?: string[];
}

export type ExperienceCategory = 'Acadêmico' | 'Profissional' | 'Projeto' | 'Evento';

export interface Link {
    id: number;
    title: string;
    description: string;
    url: string;
    category: 'tool' | 'article' | 'video' | 'course' | 'documentation' | 'other';
    tags?: string[];
}

export interface TeamMember {
    id: number;
    name: string;
    role: string;
    bio: string;
    avatar?: string;
    socialLinks: {
        github?: string;
        linkedin?: string;
        twitter?: string;
        website?: string;
    };
}

export type AboutMemberKey = 'eduarda' | 'artur';

export type AboutAccent = 'pink' | 'green';

export interface AboutMember {
    key: AboutMemberKey;
    name: string;
    role: string;
    institution: string;
    image: string;
    bio: string;
    interests: string[];
    technologies: string[];
    accent: AboutAccent;
    githubUsername: string;
    socialLinks: {
        github?: string;
        linkedin?: string;
        instagram?: string;
        website?: string;
        youtube?: string;
    };
}

export type IndicationCategory =
    | 'Estudos'
    | 'Ferramentas'
    | 'Sites úteis'
    | 'Desenvolvimento'
    | 'Design UI/UX'
    | 'Conteúdos educacionais';

export type IndicationIconName =
    | 'Monitor'
    | 'PenNib'
    | 'GithubLogo'
    | 'Wrench'
    | 'Code'
    | 'PaintBrush'
    | 'ChatCircle'
    | 'Notebook'
    | 'Video'
    | 'FileText'
    | 'Database'
    | 'Rocket'
    | 'Atom'
    | 'BracketsCurly'
    | 'Layout'
    | 'Sparkle'
    | 'Stack'
    | 'GraduationCap'
    | 'Trophy'
    | 'Browsers';

export interface Indication {
    id: number;
    title: string;
    description: string;
    url: string;
    category: IndicationCategory;
    tags: string[];
    indicatedBy: 'Artur' | 'Eduarda';
    iconName: IndicationIconName;
}
