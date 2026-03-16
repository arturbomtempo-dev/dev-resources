import { render, screen } from '@testing-library/react';
import { Header } from '../index';

jest.mock('@/lib/i18n/I18nProvider', () => ({
    useI18n: () => ({
        t: {
            nav: {
                home: 'Home',
                indications: 'Indications',
                about: 'About',
                projects: 'Projects',
                experiences: 'Experiences',
                guestbook: 'Guestbook',
                contact: 'Contact',
            },
        },
    }),
}));

jest.mock('next/navigation', () => ({
    usePathname: () => '/',
}));

jest.mock('@/components/Logo', () => ({
    Logo: ({ variant }: { variant?: string }) => <div data-testid="logo">Logo {variant}</div>,
}));

jest.mock('@/components/LanguageSwitcher', () => ({
    LanguageSwitcher: ({ isTransparent }: { isTransparent?: boolean }) => (
        <div data-testid="language-switcher">{isTransparent ? 'transparent' : 'default'}</div>
    ),
}));

jest.mock('@/components/ThemeSwitcher', () => ({
    ThemeSwitcher: ({ isTransparent }: { isTransparent?: boolean }) => (
        <div data-testid="theme-switcher">{isTransparent ? 'transparent' : 'default'}</div>
    ),
}));

jest.mock('@phosphor-icons/react', () => ({
    ListIcon: () => <div data-testid="list-icon">List</div>,
    XIcon: () => <div data-testid="x-icon">X</div>,
}));

describe('Header Component', () => {
    it('should render the header element', () => {
        const { container } = render(<Header />);
        expect(container.querySelector('header')).toBeInTheDocument();
    });

    it('should render the logo', () => {
        render(<Header />);
        const logos = screen.getAllByTestId('logo');
        expect(logos.length).toBeGreaterThan(0);
    });

    it('should render all navigation links', () => {
        render(<Header />);
        expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
        expect(screen.getAllByText('Indications').length).toBeGreaterThan(0);
        expect(screen.getAllByText('About').length).toBeGreaterThan(0);
        expect(screen.getAllByText('Projects').length).toBeGreaterThan(0);
        expect(screen.getAllByText('Experiences').length).toBeGreaterThan(0);
        expect(screen.getAllByText('Guestbook').length).toBeGreaterThan(0);
        expect(screen.getAllByText('Contact').length).toBeGreaterThan(0);
    });

    it('should render language switcher', () => {
        render(<Header />);
        expect(screen.getByTestId('language-switcher')).toBeInTheDocument();
    });

    it('should render theme switcher', () => {
        render(<Header />);
        expect(screen.getByTestId('theme-switcher')).toBeInTheDocument();
    });

    it('should be fixed at top of page', () => {
        const { container } = render(<Header />);
        const header = container.querySelector('header');
        expect(header).toHaveClass('fixed', 'top-0');
    });

    it('should have correct z-index', () => {
        const { container } = render(<Header />);
        const header = container.querySelector('header');
        expect(header).toHaveClass('z-50');
    });
});
