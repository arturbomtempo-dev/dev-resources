export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    imageAlt?: string;
    repositoryUrl?: string;
    demoUrl?: string;
    tags?: string[];
    featured?: boolean;
}

export interface Experience {
    id: number;
    title: string;
    company: string;
    period: string;
    description: string;
    technologies?: string[];
}

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
