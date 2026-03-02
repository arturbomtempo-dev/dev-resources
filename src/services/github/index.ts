import { githubApi } from '@/lib/axios';
import type { GitHubUser, GitHubUserData } from './types';

export async function fetchGitHubUser(username: string): Promise<GitHubUserData> {
    const response = await githubApi.get<GitHubUser>(`/users/${username}`);
    return transformGitHubUser(response.data);
}

function transformGitHubUser(user: GitHubUser): GitHubUserData {
    return {
        name: user.name || user.login,
        publicRepos: user.public_repos,
        followers: user.followers,
        following: user.following,
    };
}

export async function fetchMultipleGitHubUsers(
    usernames: string[]
): Promise<Map<string, GitHubUserData>> {
    const results = await Promise.allSettled(
        usernames.map((username) => fetchGitHubUser(username))
    );

    const usersMap = new Map<string, GitHubUserData>();

    results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            usersMap.set(usernames[index], result.value);
        }
    });

    return usersMap;
}
