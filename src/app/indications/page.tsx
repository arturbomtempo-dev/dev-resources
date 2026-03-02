'use client';

import { SectionContainer } from '@/components/SectionContainer';
import { Subtitle } from '@/components/Subtitle';
import { Title } from '@/components/Title';
import { useI18n } from '@/lib/i18n/I18nProvider';
import { CaretLeftIcon, CaretRightIcon, MagnifyingGlassIcon } from '@phosphor-icons/react';
import { useMemo, useRef, useState } from 'react';
import { FilterBar } from './_components/FilterBar';
import { IndicationCard } from './_components/IndicationCard';
import { useFavorites } from './_hooks/useFavorites';

const ITEMS_PER_PAGE = 12;

export default function Indications() {
    const { t, data, locale } = useI18n();
    const searchInputRef = useRef<HTMLInputElement>(null);
    const indications = data.indications;
    const [searchQuery, setSearchQuery] = useState('');
    const ALL = 'all';
    const [selectedCategory, setSelectedCategory] = useState<string>(ALL);
    const [selectedAuthor, setSelectedAuthor] = useState<string>(ALL);
    const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const { favorites, toggleFavorite, isFavorite, isLoaded } = useFavorites();

    const categories = useMemo(() => {
        const cats = new Set(indications.map((i) => i.category));
        return [ALL, ...Array.from(cats).sort()];
    }, [indications]);

    const authors = useMemo(() => {
        const auths = new Set(indications.map((i) => i.indicatedBy));
        return [ALL, ...Array.from(auths).sort()];
    }, [indications]);

    const translateCategory = (category: string): string => {
        if (category === ALL) return t.indications.filters.all;
        return (
            t.indications.categories[category as keyof typeof t.indications.categories] || category
        );
    };

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
                selectedCategory === ALL || indication.category === selectedCategory;

            const matchesAuthor =
                selectedAuthor === ALL || indication.indicatedBy === selectedAuthor;

            const matchesFavorites = !showFavoritesOnly || favorites.has(indication.id);

            return matchesSearch && matchesCategory && matchesAuthor && matchesFavorites;
        });
    }, [
        searchQuery,
        selectedCategory,
        selectedAuthor,
        showFavoritesOnly,
        favorites,
        indications,
        t.indications.filters.all,
    ]);

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
                <Title text={t.indications.title} />
                <Subtitle text={t.indications.subtitle} />
            </div>

            <div className="mt-6 mb-8 flex flex-col gap-4">
                <div className="relative">
                    <MagnifyingGlassIcon
                        size={20}
                        className="text-teal-primary absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer"
                        onClick={() => searchInputRef.current?.focus()}
                    />
                    <input
                        ref={searchInputRef}
                        type="search"
                        value={searchQuery}
                        onChange={(e) => handleSearchChange(e.target.value)}
                        placeholder={t.indications.search.placeholder}
                        className="h-11 w-full rounded-md border border-neutral-200 bg-white pr-3 pl-12 text-sm text-black outline-none placeholder:text-neutral-500 focus:border-teal-500 dark:border-neutral-600 dark:bg-neutral-800 dark:text-gray-100 dark:placeholder:text-neutral-400 dark:focus:border-teal-400"
                    />
                </div>

                <FilterBar
                    categories={categories}
                    authors={authors}
                    selectedCategory={selectedCategory}
                    selectedAuthor={selectedAuthor}
                    showFavoritesOnly={showFavoritesOnly}
                    translateCategory={translateCategory}
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
                    <p className="text-lg font-medium text-gray-700 dark:text-neutral-300">
                        {showFavoritesOnly
                            ? t.indications.empty.noFavorites
                            : t.indications.empty.noResults}
                    </p>
                    <p className="mt-2 text-sm text-gray-500 dark:text-neutral-400">
                        {showFavoritesOnly
                            ? t.indications.empty.noFavoritesDescription
                            : t.indications.empty.noResultsDescription}
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

                    {totalPages > 1 && (
                        <div className="mt-8 flex items-center justify-center gap-2">
                            <button
                                type="button"
                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="flex cursor-pointer items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-teal-600 disabled:cursor-not-allowed disabled:opacity-40 dark:text-neutral-400 dark:hover:text-teal-400"
                            >
                                <CaretLeftIcon size={16} />
                                {t.indications.pagination.previous}
                            </button>

                            <div className="flex items-center gap-1">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <button
                                        key={page}
                                        type="button"
                                        onClick={() => setCurrentPage(page)}
                                        className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-sm font-medium transition-all ${
                                            currentPage === page
                                                ? 'bg-teal-600 text-white dark:bg-teal-500'
                                                : 'text-gray-600 hover:bg-teal-50 hover:text-teal-600 dark:text-neutral-400 dark:hover:bg-teal-900/40 dark:hover:text-teal-400'
                                        }`}
                                    >
                                        {page}
                                    </button>
                                ))}
                            </div>

                            <button
                                type="button"
                                onClick={() =>
                                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                                }
                                disabled={currentPage === totalPages}
                                className="flex cursor-pointer items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-teal-600 disabled:cursor-not-allowed disabled:opacity-40 dark:text-neutral-400 dark:hover:text-teal-400"
                            >
                                {t.indications.pagination.next}
                                <CaretRightIcon size={16} />
                            </button>
                        </div>
                    )}
                </>
            )}
        </SectionContainer>
    );
}
