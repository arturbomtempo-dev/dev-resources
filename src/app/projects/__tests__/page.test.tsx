import { render, screen } from '@testing-library/react';
import Projects from '../page';

jest.mock('@/lib/i18n/I18nProvider', () => ({
    useI18n: () => ({
        t: {
            projects: {
                title: 'Projects',
                subtitle: 'Check out our work',
            },
        },
        data: {
            projects: [
                {
                    id: '1',
                    name: 'Project 1',
                    description: 'Description 1',
                    image: '/image1.jpg',
                    tags: ['React'],
                },
                {
                    id: '2',
                    name: 'Project 2',
                    description: 'Description 2',
                    image: '/image2.jpg',
                    tags: ['TypeScript'],
                },
            ],
        },
    }),
}));

jest.mock('@/components/SectionContainer', () => ({
    SectionContainer: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="section-container">{children}</div>
    ),
}));

jest.mock('@/components/Title', () => ({
    Title: ({ text }: { text: string }) => <h1 data-testid="title">{text}</h1>,
}));

jest.mock('@/components/Subtitle', () => ({
    Subtitle: ({ text }: { text: string }) => <p data-testid="subtitle">{text}</p>,
}));

jest.mock('../_components/ProjectCard', () => ({
    ProjectCard: ({ project }: { project: any }) => (
        <div data-testid="project-card">{project.name}</div>
    ),
}));

describe('Projects Page', () => {
    it('should render the section container', () => {
        render(<Projects />);
        expect(screen.getByTestId('section-container')).toBeInTheDocument();
    });

    it('should render the title', () => {
        render(<Projects />);
        expect(screen.getByTestId('title')).toHaveTextContent('Projects');
    });

    it('should render the subtitle', () => {
        render(<Projects />);
        expect(screen.getByTestId('subtitle')).toHaveTextContent('Check out our work');
    });

    it('should render all projects', () => {
        render(<Projects />);
        const cards = screen.getAllByTestId('project-card');
        expect(cards).toHaveLength(2);
        expect(screen.getByText('Project 1')).toBeInTheDocument();
        expect(screen.getByText('Project 2')).toBeInTheDocument();
    });
});
