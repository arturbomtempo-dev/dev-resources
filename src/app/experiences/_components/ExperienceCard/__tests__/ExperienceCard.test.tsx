import { render, screen } from '@testing-library/react';
import { ExperienceCard } from '../index';

const MockIcon = (() => <div>Icon</div>) as any;

jest.mock('@/lib/i18n/I18nProvider', () => ({
    useI18n: () => ({
        t: {
            experiences: {
                filters: {
                    academic: 'Academic',
                    professional: 'Professional',
                    project: 'Project',
                    event: 'Event',
                },
            },
        },
    }),
}));

jest.mock('@/app/experiences/_components/Pills', () => ({
    Pills: ({ text, className }: { text: string; className?: string }) => (
        <div data-testid="pill" className={className}>
            {text}
        </div>
    ),
}));

describe('ExperienceCard Component', () => {
    it('should render the title', () => {
        render(
            <ExperienceCard
                title="Software Engineer"
                organization="Company"
                period="2020-2021"
                category="Profissional"
                icon={MockIcon}
            />
        );
        expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    });

    it('should render the organization', () => {
        render(
            <ExperienceCard
                title="Role"
                organization="Test Company"
                period="2020-2021"
                category="Profissional"
                icon={MockIcon}
            />
        );
        expect(screen.getByText('Test Company')).toBeInTheDocument();
    });

    it('should render the period', () => {
        render(
            <ExperienceCard
                title="Role"
                organization="Company"
                period="2020-2021"
                category="Profissional"
                icon={MockIcon}
            />
        );
        expect(screen.getByText('2020-2021')).toBeInTheDocument();
    });

    it('should render category pill', () => {
        render(
            <ExperienceCard
                title="Role"
                organization="Company"
                period="2020-2021"
                category="Profissional"
                icon={MockIcon}
            />
        );
        expect(screen.getByTestId('pill')).toHaveTextContent('Professional');
    });

    it('should render academic category', () => {
        render(
            <ExperienceCard
                title="Degree"
                organization="University"
                period="2015-2019"
                category="Acadêmico"
                icon={MockIcon}
            />
        );
        expect(screen.getByTestId('pill')).toHaveTextContent('Academic');
    });

    it('should render project category', () => {
        render(
            <ExperienceCard
                title="Project"
                organization="Self"
                period="2021"
                category="Projeto"
                icon={MockIcon}
            />
        );
        expect(screen.getByTestId('pill')).toHaveTextContent('Project');
    });

    it('should render event category', () => {
        render(
            <ExperienceCard
                title="Conference"
                organization="Event Org"
                period="2022"
                category="Evento"
                icon={MockIcon}
            />
        );
        expect(screen.getByTestId('pill')).toHaveTextContent('Event');
    });
});
