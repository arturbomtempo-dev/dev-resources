'use client';

import { fetchGitHubUser } from '@/services/github';
import type { GitHubUserData, GitHubUserState } from '@/services/github/types';
import { useCallback, useEffect, useState } from 'react';

const cache = new Map<string, GitHubUserData>();

export function useGitHubUser(username: string | undefined): GitHubUserState {
    const [state, setState] = useState<GitHubUserState>({
        data: null,
        isLoading: true,
        error: null,
    });

    const fetchData = useCallback(async () => {
        if (!username) {
            setState({ data: null, isLoading: false, error: null });
            return;
        }

        const cachedData = cache.get(username);
        if (cachedData) {
            setState({ data: cachedData, isLoading: false, error: null });
            return;
        }

        setState((prev) => ({ ...prev, isLoading: true, error: null }));

        try {
            const userData = await fetchGitHubUser(username);
            cache.set(username, userData);
            setState({ data: userData, isLoading: false, error: null });
        } catch (err) {
            setState({
                data: null,
                isLoading: false,
                error: err instanceof Error ? err : new Error('Failed to fetch GitHub user'),
            });
        }
    }, [username]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return state;
}

export function clearGitHubUserCache(): void {
    cache.clear();
}
