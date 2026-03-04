import { render, screen } from '@testing-library/react';
import { Footer } from '../index';

jest.mock('@/lib/i18n/I18nProvider', () => ({
    useI18n: () => ({
        t: {
            footer: {
                description: 'A platform for developer resources',
                navigation: {
                    title: 'Navigation',
                    home: 'Home',
                    indications: 'Indications',
                    about: 'About',
                    projects: 'Projects',
                    experiences: 'Experiences',
                    guestbook: 'Guestbook',
                    contact: 'Contact',
                },
                social: {
                    title: 'Social Media',
                    artur: 'Artur Social',
                    eduarda: 'Eduarda Social',
                },
                copyright: '© 2024 DevResources',
            },
        },
    }),
}));

jest.mock('@/components/Logo', () => ({
    Logo: ({ size }: { size?: string }) => <div data-testid="logo">Logo {size}</div>,
}));

jest.mock('@/components/IconBox', () => ({
    IconBox: ({ href }: { href?: string }) => (
        <a data-testid="icon-box" href={href}>
            Icon
        </a>
    ),
}));

jest.mock('@phosphor-icons/react/dist/icons/GithubLogo', () => ({
    GithubLogoIcon: () => <div>GitHub</div>,
}));

jest.mock('@phosphor-icons/react/dist/icons/Globe', () => ({
    GlobeIcon: () => <div>Globe</div>,
}));

jest.mock('@phosphor-icons/react/dist/icons/InstagramLogo', () => ({
    InstagramLogoIcon: () => <div>Instagram</div>,
}));

jest.mock('@phosphor-icons/react/dist/icons/LinkedinLogo', () => ({
    LinkedinLogoIcon: () => <div>LinkedIn</div>,
}));

jest.mock('@phosphor-icons/react/dist/icons/YoutubeLogo', () => ({
    YoutubeLogoIcon: () => <div>YouTube</div>,
}));

describe('Footer Component', () => {
    it('should render the footer element', () => {
        const { container } = render(<Footer />);
        expect(container.querySelector('footer')).toBeInTheDocument();
    });

    it('should render the logo', () => {
        render(<Footer />);
        expect(screen.getByTestId('logo')).toBeInTheDocument();
    });

    it('should render footer description', () => {
        render(<Footer />);
        expect(screen.getByText('A platform for developer resources')).toBeInTheDocument();
    });

    it('should render navigation section title', () => {
        render(<Footer />);
        expect(screen.getByText('Navigation')).toBeInTheDocument();
    });

    it('should render all navigation links', () => {
        render(<Footer />);
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Indications')).toBeInTheDocument();
        expect(screen.getByText('About')).toBeInTheDocument();
        expect(screen.getByText('Projects')).toBeInTheDocument();
        expect(screen.getByText('Experiences')).toBeInTheDocument();
        expect(screen.getByText('Guestbook')).toBeInTheDocument();
        expect(screen.getByText('Contact')).toBeInTheDocument();
    });

    it('should have border styling', () => {
        const { container } = render(<Footer />);
        const footer = container.querySelector('footer');
        expect(footer).toHaveClass('border-t');
    });
});
