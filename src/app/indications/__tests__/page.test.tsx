import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Indications from '../page';

jest.mock('@/lib/i18n/I18nProvider', () => ({
    useI18n: () => ({
        locale: 'en',
        t: {
            indications: {
                title: 'Indications',
                subtitle: 'Discover our recommendations',
                search: {
                    placeholder: 'Search',
                },
                filters: {
                    all: 'All',
                    search: 'Search',
                    category: 'Category',
                    author: 'Author',
                    favorites: 'Favorites',
                },
                categories: {
                    book: 'Book',
                    course: 'Course',
                    video: 'Video',
                },
                pagination: {
                    previous: 'Previous',
                    next: 'Next',
                },
            },
        },
        data: {
            indications: [
                {
                    id: 1,
                    title: 'Clean Code',
                    description: 'A handbook of agile software craftsmanship',
                    category: 'book',
                    indicatedBy: 'John Doe',
                    tags: ['programming', 'clean-code'],
                    url: 'https://example.com',
                },
                {
                    id: 2,
                    title: 'React Course',
                    description: 'Learn React from scratch',
                    category: 'course',
                    indicatedBy: 'Jane Smith',
                    tags: ['react', 'javascript'],
                    url: 'https://example.com',
                },
            ],
        },
    }),
}));

jest.mock('@/components/Title', () => ({
    Title: ({ text }: { text: string }) => <h1>{text}</h1>,
}));

jest.mock('@/components/Subtitle', () => ({
    Subtitle: ({ text }: { text: string }) => <h2>{text}</h2>,
}));

jest.mock('@/components/SectionContainer', () => ({
    SectionContainer: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

jest.mock('../_components/FilterBar', () => ({
    FilterBar: ({
        selectedCategory,
        onSelectCategory,
        categories,
    }: {
        selectedCategory: string;
        onSelectCategory: (category: string) => void;
        categories: string[];
    }) => (
        <div data-testid="filter-bar">
            {categories.map((category) => (
                <button key={category} onClick={() => onSelectCategory(category)}>
                    {category}
                </button>
            ))}
        </div>
    ),
}));

jest.mock('../_components/IndicationCard', () => ({
    IndicationCard: ({
        indication,
        isFavorited,
        onToggleFavorite,
    }: {
        indication: { id: number; title: string };
        isFavorited: boolean;
        onToggleFavorite: () => void;
    }) => (
        <div data-testid={`indication-card-${indication.id}`}>
            <h3>{indication.title}</h3>
            <button onClick={onToggleFavorite}>Favorite</button>
        </div>
    ),
}));

jest.mock('../_hooks/useFavorites', () => ({
    useFavorites: () => ({
        favorites: new Set(),
        toggleFavorite: jest.fn(),
        isFavorite: jest.fn(() => false),
        isLoaded: true,
    }),
}));

describe('Indications Page', () => {
    it('should render title and subtitle', () => {
        render(<Indications />);
        expect(screen.getByText('Indications')).toBeInTheDocument();
        expect(screen.getByText('Discover our recommendations')).toBeInTheDocument();
    });

    it('should render search input', () => {
        render(<Indications />);
        const searchInput = screen.getByPlaceholderText('Search');
        expect(searchInput).toBeInTheDocument();
    });

    it('should render filter bar', () => {
        render(<Indications />);
        expect(screen.getByTestId('filter-bar')).toBeInTheDocument();
    });

    it('should render indication cards', () => {
        render(<Indications />);
        expect(screen.getByTestId('indication-card-1')).toBeInTheDocument();
        expect(screen.getByTestId('indication-card-2')).toBeInTheDocument();
    });

    it('should filter indications by search query', async () => {
        const user = userEvent.setup();
        render(<Indications />);

        const searchInput = screen.getByPlaceholderText('Search');
        await user.type(searchInput, 'Clean Code');

        expect(screen.getByText('Clean Code')).toBeInTheDocument();
    });

    it('should display indication cards', () => {
        render(<Indications />);
        expect(screen.getByTestId('indication-card-1')).toBeInTheDocument();
        expect(screen.getByTestId('indication-card-2')).toBeInTheDocument();
    });
});
