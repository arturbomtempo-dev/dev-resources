export const indicationsUI = {
    title: 'Resources',
    subtitle: 'Selected resources recommended by us throughout our dev journey.',
    search: {
        placeholder: 'Search resources...',
    },
    filters: {
        label: 'Filters',
        category: 'Category',
        author: 'Author',
        all: 'All',
        favorites: 'Favorites',
    },
    empty: {
        noResults: 'No resources found',
        noResultsDescription:
            "Try adjusting the filters or search terms to find what you're looking for.",
        noFavorites: 'No favorited resources',
        noFavoritesDescription: 'Start adding your favorite resources by clicking the star icon.',
    },
    categories: {
        Estudos: 'Study Resources',
        Ferramentas: 'Tools',
        'Sites úteis': 'Useful Sites',
        Desenvolvimento: 'Development',
        'Design UI/UX': 'UI/UX Design',
        'Conteúdos educacionais': 'Educational Content',
    },
    pagination: {
        previous: 'Previous',
        next: 'Next',
    },
    card: {
        addFavorite: 'Add to favorites',
        removeFavorite: 'Remove from favorites',
        indicatedBy: 'by',
        access: 'Access',
    },
};

export type IndicationsUITranslations = typeof indicationsUI;
