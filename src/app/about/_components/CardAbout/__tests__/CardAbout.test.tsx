import type { AboutMemberKey } from '@/data/types';
import { render, screen } from '@testing-library/react';
import { CardAbout } from '../index';

const mockMember = {
    key: 'artur' as AboutMemberKey,
    name: 'Artur',
    role: 'Developer',
    bio: 'Test bio',
    image: '/avatar.jpg',
    githubUsername: 'artur',
    accent: 'green' as const,
    institution: 'Test Institution',
    interests: ['coding', 'testing'],
    technologies: ['React', 'TypeScript'],
    links: [{ icon: 'github', url: 'https://github.com' }],
    socialLinks: {
        github: 'https://github.com/artur',
        linkedin: 'https://linkedin.com/in/artur',
    },
};

jest.mock('@/hooks/useGitHubUser', () => ({
    useGitHubUser: () => ({
        data: { public_repos: 10, followers: 100 },
        isLoading: false,
    }),
}));

jest.mock('@/lib/i18n/I18nProvider', () => ({
    useI18n: () => ({
        t: {
            about: {
                bio: 'Biography',
                stats: { repositories: 'Repositories', followers: 'Followers' },
                interests: 'Interests',
                contact: 'Contact',
                github: {
                    repositories: 'Repositories',
                    followers: 'Followers',
                },
            },
        },
    }),
}));

jest.mock('@/lib/theme/ThemeProvider', () => ({
    useTheme: () => ({
        theme: 'light',
    }),
}));

jest.mock('react-github-calendar', () => ({
    GitHubCalendar: () => <div data-testid="github-calendar">Calendar</div>,
}));

jest.mock('@/components/IconBox', () => ({
    IconBox: () => <div data-testid="icon-box">Icon</div>,
}));

jest.mock('@/app/about/_components/Pills', () => ({
    Pills: ({ text }: { text: string }) => <div data-testid="pill">{text}</div>,
}));

jest.mock('@phosphor-icons/react', () => ({
    GithubLogoIcon: () => <div>GitHub</div>,
    GlobeIcon: () => <div>Globe</div>,
    InstagramLogoIcon: () => <div>Instagram</div>,
    LinkedinLogoIcon: () => <div>LinkedIn</div>,
    YoutubeLogoIcon: () => <div>YouTube</div>,
}));

describe('CardAbout Component', () => {
    it('should render the member name', () => {
        render(<CardAbout member={mockMember} />);
        expect(screen.getByText('Artur')).toBeInTheDocument();
    });

    it('should render the member role', () => {
        render(<CardAbout member={mockMember} />);
        expect(screen.getByText('Developer')).toBeInTheDocument();
    });

    it('should render the bio', () => {
        render(<CardAbout member={mockMember} />);
        expect(screen.getByText('Test bio')).toBeInTheDocument();
    });

    it('should render github calendar', () => {
        render(<CardAbout member={mockMember} />);
        expect(screen.getByTestId('github-calendar')).toBeInTheDocument();
    });

    it('should render interests as pills', () => {
        render(<CardAbout member={mockMember} />);
        const pills = screen.getAllByTestId('pill');
        expect(pills.length).toBeGreaterThan(0);
        expect(screen.getByText('coding')).toBeInTheDocument();
        expect(screen.getByText('testing')).toBeInTheDocument();
    });
});
