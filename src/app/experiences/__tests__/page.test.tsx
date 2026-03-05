import { render, screen } from '@testing-library/react';
import Experiences from '../page';

jest.mock('@/lib/i18n/I18nProvider', () => ({
    useI18n: () => ({
        t: {
            experiences: {
                title: 'Experiences',
                subtitle: 'Our journey',
                filters: {
                    all: 'All',
                    academic: 'Academic',
                    professional: 'Professional',
                    project: 'Projects',
                    event: 'Events',
                },
                tabs: {
                    artur: 'Artur',
                    eduarda: 'Eduarda',
                },
            },
        },
        data: {
            experiences: {
                artur: [
                    {
                        title: 'Experience 1',
                        organization: 'Company 1',
                        period: '2020-2021',
                        category: 'Profissional',
                        iconName: 'Briefcase',
                    },
                ],
                eduarda: [
                    {
                        title: 'Experience 2',
                        organization: 'Company 2',
                        period: '2021-2022',
                        category: 'Acadêmico',
                        iconName: 'GraduationCap',
                    },
                ],
            },
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

jest.mock('../_components/ExperienceCard', () => ({
    ExperienceCard: ({ title }: { title: string }) => (
        <div data-testid="experience-card">{title}</div>
    ),
}));

jest.mock('../_components/Pills', () => ({
    Pills: () => <div data-testid="pills">Pills</div>,
}));

jest.mock('@phosphor-icons/react', () => ({
    BriefcaseIcon: () => <div>Briefcase</div>,
    CalendarBlankIcon: () => <div>Calendar</div>,
    CodeIcon: () => <div>Code</div>,
    GraduationCapIcon: () => <div>Graduation</div>,
}));

describe('Experiences Page', () => {
    it('should render the section container', () => {
        render(<Experiences />);
        expect(screen.getByTestId('section-container')).toBeInTheDocument();
    });

    it('should render the title', () => {
        render(<Experiences />);
        expect(screen.getByTestId('title')).toHaveTextContent('Experiences');
    });

    it('should render the subtitle', () => {
        render(<Experiences />);
        expect(screen.getByTestId('subtitle')).toHaveTextContent('Our journey');
    });

    it('should render filter pills', () => {
        render(<Experiences />);
        const pills = screen.getAllByTestId('pills');
        expect(pills.length).toBeGreaterThan(0);
    });

    it('should render experience cards', () => {
        render(<Experiences />);
        const cards = screen.getAllByTestId('experience-card');
        expect(cards.length).toBeGreaterThan(0);
    });
});
