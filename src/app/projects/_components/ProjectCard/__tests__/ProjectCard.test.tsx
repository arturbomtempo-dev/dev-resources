import { render, screen } from '@testing-library/react';
import { ProjectCard } from '../index';

const mockProject = {
    id: 1,
    title: 'Test Project',
    description: 'Test Description',
    longDescription: 'Test Long Description',
    imageUrl: '/test.jpg',
    imageAlt: 'Test Alt',
    repositoryUrl: 'https://github.com/test',
    demoUrl: 'https://demo.test.com',
};

jest.mock('@/app/projects/_components/ProjectButton', () => ({
    ProjectButton: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="project-button">{children}</div>
    ),
}));

jest.mock('@phosphor-icons/react', () => ({
    ArrowSquareOutIcon: () => <div>Arrow</div>,
    GithubLogoIcon: () => <div>GitHub</div>,
}));

describe('ProjectCard Component', () => {
    it('should render the project title', () => {
        render(<ProjectCard project={mockProject} />);
        expect(screen.getByText('Test Project')).toBeInTheDocument();
    });

    it('should render the project description', () => {
        render(<ProjectCard project={mockProject} />);
        expect(screen.getByText('Test Description')).toBeInTheDocument();
    });

    it('should render repository button when repositoryUrl exists', () => {
        render(<ProjectCard project={mockProject} />);
        expect(screen.getByText('Repositório')).toBeInTheDocument();
    });

    it('should render demo button when demoUrl exists', () => {
        render(<ProjectCard project={mockProject} />);
        expect(screen.getByText('Demo')).toBeInTheDocument();
    });

    it('should render link to project detail page', () => {
        render(<ProjectCard project={mockProject} />);
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', '/projects/1');
    });

    it('should not render repository button when repositoryUrl is missing', () => {
        const projectWithoutRepo = { ...mockProject, repositoryUrl: undefined };
        render(<ProjectCard project={projectWithoutRepo} />);
        expect(screen.queryByText('Repositório')).not.toBeInTheDocument();
    });

    it('should not render demo button when demoUrl is missing', () => {
        const projectWithoutDemo = { ...mockProject, demoUrl: undefined };
        render(<ProjectCard project={projectWithoutDemo} />);
        expect(screen.queryByText('Demo')).not.toBeInTheDocument();
    });
});
