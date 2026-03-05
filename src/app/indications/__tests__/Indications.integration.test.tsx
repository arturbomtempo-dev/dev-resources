import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const mockIndicationsUI = {
    title: 'Indications',
    subtitle: 'Resources selected by the community',
    search: {
        placeholder: 'Search by title, description or tags...',
    },
    filters: {
        all: 'All',
        category: 'Category',
        author: 'Indicated by',
        favorites: 'Favorites',
        label: 'Filters',
    },
    categories: {
        documentation: 'Documentation',
        tools: 'Tools',
        courses: 'Courses',
        all: 'All',
    },
    pagination: {
        previous: 'Previous',
        next: 'Next',
    },
    empty: {
        noResults: 'No results found',
        noResultsDescription: 'Try a different search',
        noFavorites: 'No favorites yet',
        noFavoritesDescription: 'Add favorites by clicking the heart',
    },
    card: {
        addFavorite: 'Add to favorites',
        removeFavorite: 'Remove from favorites',
        visitLink: 'Visit link',
    },
};

const mockIndications = [
    {
        id: 1,
        title: 'React Documentation',
        description: 'Official React documentation',
        url: 'https://react.dev',
        category: 'documentation',
        indicatedBy: 'Artur',
        tags: ['react', 'javascript', 'frontend'],
        iconName: 'Code',
    },
    {
        id: 2,
        title: 'TypeScript Handbook',
        description: 'Complete TypeScript guide',
        url: 'https://typescript.org',
        category: 'documentation',
        indicatedBy: 'Eduarda',
        tags: ['typescript', 'javascript'],
        iconName: 'Code',
    },
    {
        id: 3,
        title: 'VS Code',
        description: 'Powerful code editor',
        url: 'https://code.visualstudio.com',
        category: 'tools',
        indicatedBy: 'Artur',
        tags: ['editor', 'ide', 'tools'],
        iconName: 'Wrench',
    },
    {
        id: 4,
        title: 'Next.js Course',
        description: 'Complete Next.js course',
        url: 'https://nextjs.org/learn',
        category: 'courses',
        indicatedBy: 'Eduarda',
        tags: ['nextjs', 'react', 'course'],
        iconName: 'GraduationCap',
    },
];

jest.mock('@/lib/i18n/I18nProvider', () => ({
    useI18n: () => ({
        locale: 'en',
        t: {
            indications: mockIndicationsUI,
        },
        data: {
            indications: mockIndications,
        },
    }),
}));

import Indications from '../page';

describe('Indications Page - Integration Tests', () => {
    const setup = () => {
        const user = userEvent.setup({ delay: null });
        render(<Indications />);
        return { user };
    };

    beforeEach(() => {
        localStorage.clear();
        jest.clearAllMocks();
    });

    describe('Initial Rendering', () => {
        it('should render the page title and subtitle', async () => {
            setup();

            await waitFor(() => {
                expect(screen.getByRole('heading', { name: /indications/i })).toBeInTheDocument();
            });
        });

        it('should render the search field', async () => {
            setup();

            await waitFor(() => {
                expect(screen.getByRole('searchbox')).toBeInTheDocument();
            });
        });

        it('should render indication cards', async () => {
            setup();

            await waitFor(() => {
                expect(screen.getByText('React Documentation')).toBeInTheDocument();
            });

            expect(screen.getByText('TypeScript Handbook')).toBeInTheDocument();
            expect(screen.getByText('VS Code')).toBeInTheDocument();
            expect(screen.getByText('Next.js Course')).toBeInTheDocument();
        });
    });

    describe('Search', () => {
        it('should filter indications by title', async () => {
            const { user } = setup();

            await waitFor(() => {
                expect(screen.getByText('React Documentation')).toBeInTheDocument();
            });

            const searchInput = screen.getByRole('searchbox');
            await user.type(searchInput, 'React');

            await waitFor(() => {
                expect(screen.getByText('React Documentation')).toBeInTheDocument();
                expect(screen.queryByText('VS Code')).not.toBeInTheDocument();
            });
        });

        it('should filter indications by description', async () => {
            const { user } = setup();

            await waitFor(() => {
                expect(screen.getByText('VS Code')).toBeInTheDocument();
            });

            const searchInput = screen.getByRole('searchbox');
            await user.type(searchInput, 'editor');

            await waitFor(() => {
                expect(screen.getByText('VS Code')).toBeInTheDocument();
                expect(screen.queryByText('React Documentation')).not.toBeInTheDocument();
            });
        });

        it('should filter indications by tags', async () => {
            const { user } = setup();

            await waitFor(() => {
                expect(screen.getByText('TypeScript Handbook')).toBeInTheDocument();
            });

            const searchInput = screen.getByRole('searchbox');
            await user.type(searchInput, 'typescript');

            await waitFor(() => {
                expect(screen.getByText('TypeScript Handbook')).toBeInTheDocument();
                expect(screen.queryByText('VS Code')).not.toBeInTheDocument();
            });
        });

        it('should show message when there are no results', async () => {
            const { user } = setup();

            await waitFor(() => {
                expect(screen.getByText('React Documentation')).toBeInTheDocument();
            });

            const searchInput = screen.getByRole('searchbox');
            await user.type(searchInput, 'xyz-does-not-exist-abc');

            await waitFor(() => {
                expect(screen.getByText(/no results found/i)).toBeInTheDocument();
            });
        });
    });
});