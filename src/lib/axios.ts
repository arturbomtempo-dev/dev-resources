import axios from 'axios';

export const githubApi = axios.create({
    baseURL: 'https://api.github.com',
    timeout: 10000,
    headers: {
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
    },
});

githubApi.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            console.error(`GitHub API Error: ${error.response.status}`, error.response.data);
        } else if (error.request) {
            console.error('GitHub API: No response received', error.request);
        } else {
            console.error('GitHub API Error:', error.message);
        }
        return Promise.reject(error);
    }
);
