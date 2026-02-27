'use client';

import { useEffect, useState } from 'react';

const FAVORITES_KEY = 'devresources:favorites';

export function useFavorites() {
    const [favorites, setFavorites] = useState<Set<number>>(new Set());
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem(FAVORITES_KEY);
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                setFavorites(new Set(parsed));
            } catch (error) {
                console.error('Error loading favorites:', error);
            }
        }
        setIsLoaded(true);
    }, []);

    const toggleFavorite = (id: number) => {
        setFavorites((prev) => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            localStorage.setItem(FAVORITES_KEY, JSON.stringify(Array.from(next)));
            return next;
        });
    };

    const isFavorite = (id: number) => favorites.has(id);

    return { favorites, toggleFavorite, isFavorite, isLoaded };
}
