import { render, screen, fireEvent } from '@testing-library/react';
import { FilterBar } from '../index';

const mockTranslateCategory = (category: string) => {
    const translations: Record<string, string> = {
        tech: 'Technology',
        design: 'Design',
        business: 'Business',
    };
    return translations[category] || category;
};

const mockTranslateAuthor = (author: string) => {
    const translations: Record<string, string> = {
        all: 'All',
    };
    return translations[author] || author;
};

jest.mock('@/lib/i18n/I18nProvider', () => ({
    useI18n: () => ({
        t: {
            indications: {
                filters: {
                    label: 'Filters',
                    favorites: 'Favorites',
                    author: 'Author',
                },
            },
        },
    }),
}));

jest.mock('@/app/experiences/_components/Pills', () => ({
    Pills: ({ text, isActive, onClick }: any) => (
        <button
            data-testid={`pill-${text}`}
            className={isActive ? 'active' : ''}
            onClick={onClick}
            type="button"
        >
            {text}
        </button>
    ),
}));

jest.mock('@phosphor-icons/react', () => ({
    FunnelIcon: ({ weight }: any) => (
        <div data-testid="funnel-icon" data-weight={weight}>
            Funnel
        </div>
    ),
    StarIcon: ({ weight }: any) => (
        <div data-testid="star-icon" data-weight={weight}>
            Star
        </div>
    ),
}));

describe('FilterBar Component', () => {
    const defaultProps = {
        categories: ['tech', 'design', 'business'],
        authors: ['John Doe', 'Jane Smith', 'Bob Johnson'],
        selectedCategory: '',
        selectedAuthor: '',
        showFavoritesOnly: false,
        translateCategory: mockTranslateCategory,
        translateAuthor: mockTranslateAuthor,
        onCategoryChange: jest.fn(),
        onAuthorChange: jest.fn(),
        onToggleFavorites: jest.fn(),
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('Initial Render', () => {
        it('should render filter button collapsed by default', () => {
            render(<FilterBar {...defaultProps} />);
            expect(screen.getByText('Filters')).toBeInTheDocument();
        });

        it('should render favorites button', () => {
            render(<FilterBar {...defaultProps} />);
            expect(screen.getByText('Favorites')).toBeInTheDocument();
        });

        it('should not show categories when collapsed', () => {
            render(<FilterBar {...defaultProps} />);
            expect(screen.queryByTestId('pill-Technology')).not.toBeInTheDocument();
        });

        it('should not show authors when collapsed', () => {
            render(<FilterBar {...defaultProps} />);
            expect(screen.queryByTestId('pill-John Doe')).not.toBeInTheDocument();
        });
    });

    describe('Expand/Collapse Behavior', () => {
        it('should expand filters when clicking filter button', () => {
            render(<FilterBar {...defaultProps} />);
            const filterButton = screen.getByText('Filters').closest('button')!;
            fireEvent.click(filterButton);
            expect(screen.getByTestId('pill-Technology')).toBeInTheDocument();
        });

        it('should collapse filters when clicking filter button again', () => {
            render(<FilterBar {...defaultProps} />);
            const filterButton = screen.getByText('Filters').closest('button')!;
            fireEvent.click(filterButton);
            fireEvent.click(filterButton);
            expect(screen.queryByTestId('pill-Technology')).not.toBeInTheDocument();
        });

        it('should show all categories when expanded', () => {
            render(<FilterBar {...defaultProps} />);
            const filterButton = screen.getByText('Filters').closest('button')!;
            fireEvent.click(filterButton);
            expect(screen.getByTestId('pill-Technology')).toBeInTheDocument();
            expect(screen.getByTestId('pill-Design')).toBeInTheDocument();
            expect(screen.getByTestId('pill-Business')).toBeInTheDocument();
        });

        it('should show all authors when expanded', () => {
            render(<FilterBar {...defaultProps} />);
            const filterButton = screen.getByText('Filters').closest('button')!;
            fireEvent.click(filterButton);
            expect(screen.getByTestId('pill-John Doe')).toBeInTheDocument();
            expect(screen.getByTestId('pill-Jane Smith')).toBeInTheDocument();
            expect(screen.getByTestId('pill-Bob Johnson')).toBeInTheDocument();
        });

        it('should show author label when expanded', () => {
            render(<FilterBar {...defaultProps} />);
            const filterButton = screen.getByText('Filters').closest('button')!;
            fireEvent.click(filterButton);
            expect(screen.getByText('Author:')).toBeInTheDocument();
        });

        it('should change funnel icon weight when expanded', () => {
            render(<FilterBar {...defaultProps} />);
            const filterButton = screen.getByText('Filters').closest('button')!;

            let funnelIcon = screen.getByTestId('funnel-icon');
            expect(funnelIcon).toHaveAttribute('data-weight', 'regular');

            fireEvent.click(filterButton);

            funnelIcon = screen.getByTestId('funnel-icon');
            expect(funnelIcon).toHaveAttribute('data-weight', 'fill');
        });
    });

    describe('Category Selection', () => {
        it('should call onCategoryChange when category clicked', () => {
            render(<FilterBar {...defaultProps} />);
            const filterButton = screen.getByText('Filters').closest('button')!;
            fireEvent.click(filterButton);

            const techPill = screen.getByTestId('pill-Technology');
            fireEvent.click(techPill);

            expect(defaultProps.onCategoryChange).toHaveBeenCalledWith('tech');
        });

        it('should highlight selected category', () => {
            render(<FilterBar {...defaultProps} selectedCategory="tech" />);
            const filterButton = screen.getByText('Filters').closest('button')!;
            fireEvent.click(filterButton);

            const techPill = screen.getByTestId('pill-Technology');
            expect(techPill).toHaveClass('active');
        });

        it('should not highlight unselected categories', () => {
            render(<FilterBar {...defaultProps} selectedCategory="tech" />);
            const filterButton = screen.getByText('Filters').closest('button')!;
            fireEvent.click(filterButton);

            const designPill = screen.getByTestId('pill-Design');
            expect(designPill).not.toHaveClass('active');
        });
    });

    describe('Author Selection', () => {
        it('should call onAuthorChange when author clicked', () => {
            render(<FilterBar {...defaultProps} />);
            const filterButton = screen.getByText('Filters').closest('button')!;
            fireEvent.click(filterButton);

            const authorPill = screen.getByTestId('pill-John Doe');
            fireEvent.click(authorPill);

            expect(defaultProps.onAuthorChange).toHaveBeenCalledWith('John Doe');
        });

        it('should highlight selected author', () => {
            render(<FilterBar {...defaultProps} selectedAuthor="John Doe" />);
            const filterButton = screen.getByText('Filters').closest('button')!;
            fireEvent.click(filterButton);

            const authorPill = screen.getByTestId('pill-John Doe');
            expect(authorPill).toHaveClass('active');
        });

        it('should not highlight unselected authors', () => {
            render(<FilterBar {...defaultProps} selectedAuthor="John Doe" />);
            const filterButton = screen.getByText('Filters').closest('button')!;
            fireEvent.click(filterButton);

            const otherAuthor = screen.getByTestId('pill-Jane Smith');
            expect(otherAuthor).not.toHaveClass('active');
        });
    });

    describe('Favorites Toggle', () => {
        it('should call onToggleFavorites when favorites button clicked', () => {
            render(<FilterBar {...defaultProps} />);
            const favoritesButton = screen.getByText('Favorites').closest('button')!;
            fireEvent.click(favoritesButton);
            expect(defaultProps.onToggleFavorites).toHaveBeenCalledTimes(1);
        });

        it('should change star icon weight when favorites active', () => {
            const { rerender } = render(<FilterBar {...defaultProps} showFavoritesOnly={false} />);
            let starIcon = screen.getByTestId('star-icon');
            expect(starIcon).toHaveAttribute('data-weight', 'regular');

            rerender(<FilterBar {...defaultProps} showFavoritesOnly={true} />);
            starIcon = screen.getByTestId('star-icon');
            expect(starIcon).toHaveAttribute('data-weight', 'fill');
        });
    });

    describe('Translation', () => {
        it('should translate category names', () => {
            render(<FilterBar {...defaultProps} />);
            const filterButton = screen.getByText('Filters').closest('button')!;
            fireEvent.click(filterButton);

            expect(screen.getByTestId('pill-Technology')).toBeInTheDocument();
            expect(screen.getByTestId('pill-Design')).toBeInTheDocument();
            expect(screen.getByTestId('pill-Business')).toBeInTheDocument();
        });

        it('should handle empty category list', () => {
            render(<FilterBar {...defaultProps} categories={[]} />);
            const filterButton = screen.getByText('Filters').closest('button')!;
            fireEvent.click(filterButton);

            expect(screen.queryByTestId(/pill-Technology/)).not.toBeInTheDocument();
        });

        it('should handle empty author list', () => {
            render(<FilterBar {...defaultProps} authors={[]} />);
            const filterButton = screen.getByText('Filters').closest('button')!;
            fireEvent.click(filterButton);

            expect(screen.queryByTestId(/pill-John/)).not.toBeInTheDocument();
        });
    });
});
