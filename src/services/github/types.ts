export interface GitHubUser {
    login: string;
    name: string | null;
    public_repos: number;
    followers: number;
    following: number;
}

export interface GitHubUserData {
    name: string;
    publicRepos: number;
    followers: number;
    following: number;
}

export interface GitHubUserState {
    data: GitHubUserData | null;
    isLoading: boolean;
    error: Error | null;
}
