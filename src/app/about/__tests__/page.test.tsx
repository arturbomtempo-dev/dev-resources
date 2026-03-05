import { render, screen } from '@testing-library/react';
import About from '../page';

jest.mock('@/lib/i18n/I18nProvider', () => ({
    useI18n: () => ({
        t: {
            about: {
                title: 'About Us',
                subtitle: 'Meet our team',
            },
        },
        data: {
            aboutMembers: [
                {
                    key: 'artur',
                    name: 'Artur',
                    role: 'Developer',
                    bio: 'Bio text',
                    avatar: '/avatar1.jpg',
                    links: [],
                },
                {
                    key: 'eduarda',
                    name: 'Eduarda',
                    role: 'Designer',
                    bio: 'Bio text',
                    avatar: '/avatar2.jpg',
                    links: [],
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

jest.mock('../_components/CardAbout', () => ({
    CardAbout: ({ member }: { member: any }) => <div data-testid="card-about">{member.name}</div>,
}));

describe('About Page', () => {
    it('should render the section container', () => {
        render(<About />);
        expect(screen.getByTestId('section-container')).toBeInTheDocument();
    });

    it('should render the title', () => {
        render(<About />);
        expect(screen.getByTestId('title')).toHaveTextContent('About Us');
    });

    it('should render the subtitle', () => {
        render(<About />);
        expect(screen.getByTestId('subtitle')).toHaveTextContent('Meet our team');
    });

    it('should render all team members', () => {
        render(<About />);
        const cards = screen.getAllByTestId('card-about');
        expect(cards).toHaveLength(2);
        expect(screen.getByText('Artur')).toBeInTheDocument();
        expect(screen.getByText('Eduarda')).toBeInTheDocument();
    });
});
