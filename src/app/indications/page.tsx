'use client';

import { SectionContainer } from '@/components/SectionContainer';
import { Subtitle } from '@/components/Subtitle';
import { Title } from '@/components/Title';
import { indications } from '@/data';
import { CaretLeftIcon, CaretRightIcon, MagnifyingGlassIcon } from '@phosphor-icons/react';
import { useMemo, useState } from 'react';
import { FilterBar } from './_components/FilterBar';
import { IndicationCard } from './_components/IndicationCard';
import { useFavorites } from './_hooks/useFavorites';

const ITEMS_PER_PAGE = 12;

export default function Indications() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Todos');
    const [selectedAuthor, setSelectedAuthor] = useState('Todos');
    const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const { favorites, toggleFavorite, isFavorite, isLoaded } = useFavorites();

    const categories = useMemo(() => {
        const cats = new Set(indications.map((i) => i.category));
        return ['Todos', ...Array.from(cats).sort()];
    }, []);

    const authors = useMemo(() => {
        const auths = new Set(indications.map((i) => i.indicatedBy));
        return ['Todos', ...Array.from(auths).sort()];
    }, []);

    const filteredIndications = useMemo(() => {
        return indications.filter((indication) => {
            const matchesSearch =
                searchQuery === '' ||
                indication.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                indication.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                indication.tags.some((tag) =>
                    tag.toLowerCase().includes(searchQuery.toLowerCase())
                );

            const matchesCategory =
                selectedCategory === 'Todos' || indication.category === selectedCategory;

            const matchesAuthor =
                selectedAuthor === 'Todos' || indication.indicatedBy === selectedAuthor;

            const matchesFavorites = !showFavoritesOnly || favorites.has(indication.id);

            return matchesSearch && matchesCategory && matchesAuthor && matchesFavorites;
        });
    }, [searchQuery, selectedCategory, selectedAuthor, showFavoritesOnly, favorites]);

    const totalPages = Math.ceil(filteredIndications.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedIndications = filteredIndications.slice(startIndex, endIndex);

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const handleAuthorChange = (author: string) => {
        setSelectedAuthor(author);
        setCurrentPage(1);
    };

    const handleToggleFavorites = () => {
        setShowFavoritesOnly(!showFavoritesOnly);
        setCurrentPage(1);
    };

    const handleSearchChange = (query: string) => {
        setSearchQuery(query);
        setCurrentPage(1);
    };

    return (
        <SectionContainer>
            <div className="text-left">
                <Title text="Indicações" />
                <Subtitle text="Recursos selecionados e recomendados por nós durante nossa trajetória dev." />
            </div>

            <div className="mt-6 mb-8 flex flex-col gap-4">
                <div className="relative">
                    <MagnifyingGlassIcon
                        size={20}
                        className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"
                    />
                    <input
                        type="search"
                        value={searchQuery}
                        onChange={(e) => handleSearchChange(e.target.value)}
                        placeholder="Buscar recursos..."
                        className="w-full rounded-full border border-gray-200 bg-white py-3 pr-4 pl-12 text-sm transition-all outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                    />
                </div>

                <FilterBar
                    categories={categories}
                    authors={authors}
                    selectedCategory={selectedCategory}
                    selectedAuthor={selectedAuthor}
                    showFavoritesOnly={showFavoritesOnly}
                    onCategoryChange={handleCategoryChange}
                    onAuthorChange={handleAuthorChange}
                    onToggleFavorites={handleToggleFavorites}
                />
            </div>

            {!isLoaded ? (
                <div className="flex items-center justify-center py-12">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-teal-200/30 border-t-teal-600"></div>
                </div>
            ) : filteredIndications.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <p className="text-lg font-medium text-gray-700">
                        {showFavoritesOnly
                            ? 'Nenhum favorito encontrado'
                            : 'Nenhum resultado encontrado'}
                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                        {showFavoritesOnly
                            ? 'Adicione recursos aos favoritos clicando na estrela'
                            : 'Tente ajustar seus filtros ou busca'}
                    </p>
                </div>
            ) : (
                <>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {paginatedIndications.map((indication) => (
                            <IndicationCard
                                key={indication.id}
                                indication={indication}
                                isFavorite={isFavorite(indication.id)}
                                onToggleFavorite={toggleFavorite}
                            />
                        ))}
                    </div>

                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                        <p className="text-sm text-gray-500">
                            Exibindo {Math.min(endIndex, filteredIndications.length)} de{' '}
                            {filteredIndications.length} recursos
                        </p>

                        {totalPages > 1 && (
                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                    className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    <CaretLeftIcon size={16} />
                                    Anterior
                                </button>

                                <div className="flex items-center gap-1">
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                                        (page) => (
                                            <button
                                                key={page}
                                                type="button"
                                                onClick={() => setCurrentPage(page)}
                                                className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium transition-all ${
                                                    currentPage === page
                                                        ? 'bg-teal-600 text-white'
                                                        : 'text-gray-700 hover:bg-gray-100'
                                                }`}
                                            >
                                                {page}
                                            </button>
                                        )
                                    )}
                                </div>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                                    }
                                    disabled={currentPage === totalPages}
                                    className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    Próximo
                                    <CaretRightIcon size={16} />
                                </button>
                            </div>
                        )}
                    </div>
                </>
            )}
        </SectionContainer>
    );
}
