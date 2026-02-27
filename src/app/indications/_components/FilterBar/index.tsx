'use client';

import { Pills } from '@/app/experiences/_components/Pills';
import { cn } from '@/lib/utils';
import { FunnelIcon, StarIcon } from '@phosphor-icons/react';
import { useState } from 'react';

interface FilterBarProps {
    categories: string[];
    authors: string[];
    selectedCategory: string;
    selectedAuthor: string;
    showFavoritesOnly: boolean;
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
    onCategoryChange,
    onAuthorChange,
    onToggleFavorites,
}: FilterBarProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-2">
                <button
                    type="button"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={cn(
                        'flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all',
                        isExpanded
                            ? 'bg-linear-to-r from-teal-600 to-teal-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    )}
                >
                    <FunnelIcon size={18} weight={isExpanded ? 'fill' : 'regular'} />
                    Filtros
                </button>

                {isExpanded && (
                    <>
                        {categories.map((category) => (
                            <Pills
                                key={category}
                                text={category}
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
                        'flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all',
                        showFavoritesOnly
                            ? 'bg-yellow-400 text-yellow-900'
                            : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                    )}
                >
                    <StarIcon size={18} weight={showFavoritesOnly ? 'fill' : 'regular'} />
                    Favoritos
                </button>
            </div>

            {isExpanded && (
                <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-medium text-gray-600">Indicado por:</span>
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
