import { render, screen } from '@testing-library/react';
import Home from '../page';

jest.mock('@/lib/i18n/I18nProvider', () => ({
    useI18n: () => ({
        t: {
            home: {
                hero: {
                    title: 'Welcome to',
                    titleAccent: 'DevResources',
                    titleEnd: '!',
                    description: 'Your platform for developer resources',
                    exploreButton: 'Explore',
                    learnMoreButton: 'Learn More',
                },
                sections: {
                    title: 'What We Offer',
                    subtitle: 'Discover our features',
                    curatedLinks: {
                        title: 'Curated Links',
                        description: 'Quality resources',
                    },
                    projects: {
                        title: 'Projects',
                        description: 'Our work',
                    },
                    about: {
                        title: 'About',
                        description: 'Meet the team',
                    },
                    contact: {
                        title: 'Contact',
                        description: 'Get in touch',
                    },
                    experiences: {
                        title: 'Experiences',
                        description: 'Our journey',
                    },
                    guestbook: {
                        title: 'Guestbook',
                        description: 'Leave a message',
                    },
                },
            },
        },
    }),
}));

jest.mock('@/components/Title', () => ({
    Title: ({ text }: { text: string }) => <h1 data-testid="title">{text}</h1>,
}));

jest.mock('@/components/ui/button', () => ({
    Button: ({ children, asChild, ...props }: any) => (
        <div data-testid="button" {...props}>
            {children}
        </div>
    ),
}));

jest.mock('../_components/ContentCard', () => ({
    ContentCard: ({ title }: { title: string }) => <div data-testid="content-card">{title}</div>,
}));

jest.mock('../_components/Grainient', () => ({
    Grainient: () => <div data-testid="grainient">Grainient</div>,
}));

jest.mock('@phosphor-icons/react', () => ({
    ArrowRightIcon: () => <div>Arrow</div>,
    ChatIcon: () => <div>Chat</div>,
    FolderOpenIcon: () => <div>Folder</div>,
    LinkSimpleHorizontalIcon: () => <div>Link</div>,
    UsersIcon: () => <div>Users</div>,
}));

describe('Home Page', () => {
    it('should render the grainient background', () => {
        render(<Home />);
        expect(screen.getByTestId('grainient')).toBeInTheDocument();
    });

    it('should render hero title', () => {
        render(<Home />);
        expect(screen.getByText(/Welcome to/i)).toBeInTheDocument();
        expect(screen.getByText(/DevResources/i)).toBeInTheDocument();
    });

    it('should render hero description', () => {
        render(<Home />);
        expect(screen.getByText(/Your platform for developer resources/i)).toBeInTheDocument();
    });

    it('should render explore button', () => {
        render(<Home />);
        expect(screen.getByText('Explore')).toBeInTheDocument();
    });

    it('should render learn more button', () => {
        render(<Home />);
        expect(screen.getByText('Learn More')).toBeInTheDocument();
    });

    it('should render sections title', () => {
        render(<Home />);
        expect(screen.getByTestId('title')).toHaveTextContent('What We Offer');
    });

    it('should render content cards', () => {
        render(<Home />);
        const cards = screen.getAllByTestId('content-card');
        expect(cards.length).toBeGreaterThan(0);
    });
});
