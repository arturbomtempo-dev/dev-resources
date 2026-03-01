export const indicationsUI = {
    title: 'Indicações',
    subtitle: 'Recursos selecionados e recomendados por nós durante nossa trajetória dev.',
    search: {
        placeholder: 'Buscar recursos...',
    },
    filters: {
        label: 'Filtros',
        category: 'Categoria',
        author: 'Autor',
        all: 'Todos',
        favorites: 'Favoritos',
    },
    empty: {
        noResults: 'Nenhuma indicação encontrada',
        noResultsDescription:
            'Tente ajustar os filtros ou termos de busca para encontrar o que procura.',
        noFavorites: 'Nenhuma indicação favoritada',
        noFavoritesDescription:
            'Comece adicionando suas indicações favoritas clicando no ícone de estrela.',
    },
    categories: {
        Estudos: 'Estudos',
        Ferramentas: 'Ferramentas',
        'Sites úteis': 'Sites úteis',
        Desenvolvimento: 'Desenvolvimento',
        'Design UI/UX': 'Design UI/UX',
        'Conteúdos educacionais': 'Conteúdos educacionais',
    },
    pagination: {
        previous: 'Anterior',
        next: 'Próximo',
    },
    card: {
        addFavorite: 'Adicionar aos favoritos',
        removeFavorite: 'Remover dos favoritos',
        indicatedBy: 'por',
        access: 'Acessar',
    },
};

export type IndicationsUITranslations = typeof indicationsUI;
