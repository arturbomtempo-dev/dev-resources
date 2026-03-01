'use client';

import { Pills } from '@/app/experiences/_components/Pills';
import { useI18n } from '@/lib/i18n/I18nProvider';
import { cn } from '@/lib/utils';
import { FunnelIcon, StarIcon } from '@phosphor-icons/react';
import { useState } from 'react';

interface FilterBarProps {
    categories: string[];
    authors: string[];
    selectedCategory: string;
    selectedAuthor: string;
    showFavoritesOnly: boolean;
    translateCategory: (category: string) => string;
    onCategoryChange: (category: string) => void;
    onAuthorChange: (author: string) => void;
    onToggleFavorites: () => void;
}

export function FilterBar({
    categories,
    authors,
    selectedCategory,
    selectedAuthor,
    showFavoritesOnly,
    translateCategory,
    onCategoryChange,
    onAuthorChange,
    onToggleFavorites,
}: FilterBarProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const { t } = useI18n();

    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-2">
                <button
                    type="button"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={cn(
                        'flex cursor-pointer items-center gap-2 rounded-full text-sm font-medium transition-all',
                        isExpanded ? 'px-3 py-2' : 'px-4 py-2',
                        isExpanded
                            ? 'bg-linear-to-r from-teal-600 to-teal-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-neutral-700 dark:text-white dark:hover:bg-neutral-600'
                    )}
                >
                    <FunnelIcon size={18} weight={isExpanded ? 'fill' : 'regular'} />
                    {!isExpanded && t.indications.filters.label}
                </button>

                {isExpanded && (
                    <>
                        {categories.map((category) => (
                            <Pills
                                key={category}
                                text={translateCategory(category)}
                                isActive={selectedCategory === category}
                                onClick={() => onCategoryChange(category)}
                            />
                        ))}
                    </>
                )}

                <button
                    type="button"
                    onClick={onToggleFavorites}
                    className={cn(
                        'flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all',
                        showFavoritesOnly
                            ? 'bg-yellow-400 text-yellow-900 dark:bg-yellow-500 dark:text-yellow-950'
                            : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:hover:bg-yellow-900/50'
                    )}
                >
                    <StarIcon size={18} weight={showFavoritesOnly ? 'fill' : 'regular'} />
                    {t.indications.filters.favorites}
                </button>
            </div>

            {isExpanded && (
                <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-medium text-gray-600 dark:text-neutral-400">
                        {t.indications.filters.author}:
                    </span>
                    {authors.map((author) => (
                        <Pills
                            key={author}
                            text={author}
                            isActive={selectedAuthor === author}
                            onClick={() => onAuthorChange(author)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
