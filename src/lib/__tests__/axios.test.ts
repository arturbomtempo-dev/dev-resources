describe('GitHub API Axios Instance', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        console.error = jest.fn();
    });

    it('should export githubApi instance', () => {
        const { githubApi } = require('../axios');
        expect(githubApi).toBeDefined();
    });

    it('should have interceptors', () => {
        const { githubApi } = require('../axios');
        expect(githubApi.interceptors).toBeDefined();
    });

    it('should have request and response interceptors', () => {
        const { githubApi } = require('../axios');
        expect(githubApi.interceptors.request).toBeDefined();
        expect(githubApi.interceptors.response).toBeDefined();
    });

    it('should have default methods', () => {
        const { githubApi } = require('../axios');
        expect(githubApi.get).toBeDefined();
        expect(githubApi.post).toBeDefined();
        expect(githubApi.put).toBeDefined();
        expect(githubApi.delete).toBeDefined();
    });
});
