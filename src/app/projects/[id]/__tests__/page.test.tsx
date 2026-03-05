import { render, screen } from '@testing-library/react';
import ProjectPage from '../page';

const mockProject = {
    id: 1,
    title: 'Dev Resources',
    description: 'A collection of developer resources',
    longDescription: 'This is a comprehensive collection of resources for developers',
    imageUrl: '/projects/dev-resources.jpg',
    imageAlt: 'Dev Resources Project',
    authorIds: [1, 2],
    githubUrl: 'https://github.com/test/dev-resources',
    liveUrl: 'https://dev-resources.com',
    screenshots: [
        {
            imageUrl: '/screenshots/screenshot1.jpg',
            caption: 'Homepage Screenshot',
        },
    ],
    tags: ['react', 'nextjs'],
};

const mockAuthors = [
    {
        key: 'artur',
        name: 'Artur',
        role: 'Developer',
        githubUser: 'artur',
        socialLinks: {
            github: 'https://github.com/artur',
        },
    },
    {
        key: 'eduarda',
        name: 'Eduarda',
        role: 'Designer',
        githubUser: 'eduarda',
        socialLinks: {
            github: 'https://github.com/eduarda',
        },
    },
];

jest.mock('next/navigation', () => ({
    useParams: () => ({ id: '1' }),
    notFound: jest.fn(),
}));

jest.mock('@/lib/i18n/I18nProvider', () => ({
    useI18n: () => ({
        t: {
            projects: {
                backToProjects: 'Back to Projects',
                about: 'About',
                screenshotsTitle: 'Screenshots',
                technologiesTitle: 'Technologies',
                authorsTitle: 'Authors',
                githubButton: 'View on GitHub',
                liveButton: 'Visit Site',
            },
        },
        data: {
            projects: [mockProject],
            aboutMembers: mockAuthors,
        },
    }),
}));

jest.mock('@/components/SectionContainer', () => ({
    SectionContainer: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

jest.mock('@/app/projects/_components/ProjectButton', () => ({
    ProjectButton: ({ children, href }: { children: React.ReactNode; href: string }) => (
        <a href={href}>{children}</a>
    ),
}));

describe('Project Detail Page', () => {
    it('should render project title', () => {
        render(<ProjectPage />);
        expect(screen.getByText('Dev Resources')).toBeInTheDocument();
    });

    it('should render project description', () => {
        render(<ProjectPage />);
        expect(screen.getByText('A collection of developer resources')).toBeInTheDocument();
    });

    it('should render long description', () => {
        render(<ProjectPage />);
        expect(
            screen.getByText('This is a comprehensive collection of resources for developers')
        ).toBeInTheDocument();
    });

    it('should render back to projects link', () => {
        render(<ProjectPage />);
        const backLink = screen.getByText('Back to Projects');
        expect(backLink).toBeInTheDocument();
        expect(backLink.closest('a')).toHaveAttribute('href', '/projects');
    });

    it('should render screenshots section', () => {
        render(<ProjectPage />);
        expect(screen.getByText('Screenshots')).toBeInTheDocument();
        expect(screen.getByText('Homepage Screenshot')).toBeInTheDocument();
    });

    it('should render GitHub buttons for authors', () => {
        render(<ProjectPage />);
        const githubLinks = screen.getAllByText('GitHub');
        expect(githubLinks.length).toBeGreaterThan(0);
    });

    it('should render project image', () => {
        const { container } = render(<ProjectPage />);
        const images = container.querySelectorAll('img');
        expect(images.length).toBeGreaterThan(0);
    });
});
