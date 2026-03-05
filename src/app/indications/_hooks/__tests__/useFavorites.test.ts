import { renderHook, act, waitFor } from '@testing-library/react';
import { useFavorites } from '../useFavorites';

const FAVORITES_KEY = 'devresources:favorites';

describe('useFavorites Hook', () => {
    beforeEach(() => {
        localStorage.clear();
        jest.clearAllMocks();
    });

    it('should start with empty favorites set', async () => {
        const { result } = renderHook(() => useFavorites());

        await waitFor(() => {
            expect(result.current.isLoaded).toBe(true);
        });

        expect(result.current.favorites.size).toBe(0);
    });

    it('should load existing favorites from localStorage', async () => {
        const existingFavorites = [1, 2, 3];
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(existingFavorites));

        const { result } = renderHook(() => useFavorites());

        await waitFor(() => {
            expect(result.current.isLoaded).toBe(true);
        });

        expect(result.current.favorites.size).toBe(3);
        expect(result.current.favorites.has(1)).toBe(true);
        expect(result.current.favorites.has(2)).toBe(true);
        expect(result.current.favorites.has(3)).toBe(true);
    });

    it('should add a favorite when it does not exist', async () => {
        const { result } = renderHook(() => useFavorites());

        await waitFor(() => {
            expect(result.current.isLoaded).toBe(true);
        });

        act(() => {
            result.current.toggleFavorite(42);
        });

        expect(result.current.favorites.has(42)).toBe(true);
        expect(result.current.isFavorite(42)).toBe(true);

        const stored = JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]');
        expect(stored).toContain(42);
    });

    it('should remove a favorite when it already exists', async () => {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify([42]));
        const { result } = renderHook(() => useFavorites());

        await waitFor(() => {
            expect(result.current.isLoaded).toBe(true);
        });

        expect(result.current.isFavorite(42)).toBe(true);

        act(() => {
            result.current.toggleFavorite(42);
        });

        expect(result.current.favorites.has(42)).toBe(false);
        expect(result.current.isFavorite(42)).toBe(false);

        const stored = JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]');
        expect(stored).not.toContain(42);
    });

    it('should return true for favorites and false for non-favorites', async () => {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify([1, 2]));
        const { result } = renderHook(() => useFavorites());

        await waitFor(() => {
            expect(result.current.isLoaded).toBe(true);
        });

        expect(result.current.isFavorite(1)).toBe(true);
        expect(result.current.isFavorite(2)).toBe(true);
        expect(result.current.isFavorite(3)).toBe(false);
        expect(result.current.isFavorite(999)).toBe(false);
    });

    it('should handle multiple toggles correctly', async () => {
        const { result } = renderHook(() => useFavorites());

        await waitFor(() => {
            expect(result.current.isLoaded).toBe(true);
        });

        act(() => {
            result.current.toggleFavorite(1);
        });

        expect(result.current.isFavorite(1)).toBe(true);

        act(() => {
            result.current.toggleFavorite(1);
        });

        expect(result.current.isFavorite(1)).toBe(false);

        act(() => {
            result.current.toggleFavorite(1);
        });

        expect(result.current.isFavorite(1)).toBe(true);
    });

    it('should handle invalid localStorage data gracefully', async () => {
        localStorage.setItem(FAVORITES_KEY, 'invalid-json');
        const { result } = renderHook(() => useFavorites());

        await waitFor(() => {
            expect(result.current.isLoaded).toBe(true);
        });

        expect(result.current.favorites.size).toBe(0);
    });
});