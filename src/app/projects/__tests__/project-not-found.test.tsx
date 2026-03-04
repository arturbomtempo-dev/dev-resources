import { render, screen } from '@testing-library/react';
import NotFound from '../[id]/not-found';

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

jest.mock('@phosphor-icons/react', () => ({
    ArrowLeft: () => <span data-testid="arrow-icon">Arrow</span>,
}));

jest.mock('@/lib/i18n/I18nProvider', () => ({
    useI18n: () => ({
        t: {
            projects: {
                notFound: {
                    title: 'Project Not Found',
                    description: 'The project you are looking for does not exist',
                },
                backToProjects: 'Back to Projects',
            },
        },
    }),
}));

describe('Project Not Found Page', () => {
    it('should render the section container', () => {
        render(<NotFound />);
        expect(screen.getByTestId('section-container')).toBeInTheDocument();
    });

    it('should render the title', () => {
        render(<NotFound />);
        expect(screen.getByTestId('title')).toHaveTextContent('Project Not Found');
    });

    it('should render the description', () => {
        render(<NotFound />);
        expect(screen.getByTestId('subtitle')).toHaveTextContent(
            'The project you are looking for does not exist'
        );
    });

    it('should render a link back to projects', () => {
        render(<NotFound />);
        const link = screen.getByRole('link', { name: /back to projects/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/projects');
    });

    it('should render the arrow icon', () => {
        render(<NotFound />);
        expect(screen.getByTestId('arrow-icon')).toBeInTheDocument();
    });
});
