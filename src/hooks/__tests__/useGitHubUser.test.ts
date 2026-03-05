import { fetchGitHubUser } from '@/services/github';
import { renderHook, waitFor } from '@testing-library/react';
import { clearGitHubUserCache, useGitHubUser } from '../useGitHubUser';

jest.mock('@/services/github', () => ({
    fetchGitHubUser: jest.fn(),
}));

const mockFetchGitHubUser = fetchGitHubUser as jest.MockedFunction<typeof fetchGitHubUser>;

const mockUserData = {
    name: 'Test User',
    publicRepos: 10,
    followers: 100,
    following: 50,
};

describe('useGitHubUser Hook', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        clearGitHubUserCache();
    });

    describe('Loading State', () => {
        it('should start with isLoading true', () => {
            mockFetchGitHubUser.mockImplementation(() => new Promise(() => {}));
            const { result } = renderHook(() => useGitHubUser('testuser'));
            expect(result.current.isLoading).toBe(true);
            expect(result.current.data).toBeNull();
            expect(result.current.error).toBeNull();
        });

        it('should set isLoading false after loading', async () => {
            mockFetchGitHubUser.mockResolvedValue(mockUserData);
            const { result } = renderHook(() => useGitHubUser('testuser'));

            await waitFor(() => {
                expect(result.current.isLoading).toBe(false);
            });
        });
    });

    describe('Data Fetching', () => {
        it('should fetch user data successfully', async () => {
            mockFetchGitHubUser.mockResolvedValue(mockUserData);
            const { result } = renderHook(() => useGitHubUser('testuser'));

            await waitFor(() => {
                expect(result.current.data).toEqual(mockUserData);
            });

            expect(result.current.error).toBeNull();
            expect(mockFetchGitHubUser).toHaveBeenCalledWith('testuser');
        });

        it('should handle fetch error', async () => {
            mockFetchGitHubUser.mockRejectedValue(new Error('User not found'));
            const { result } = renderHook(() => useGitHubUser('invaliduser'));

            await waitFor(() => {
                expect(result.current.error).toBeInstanceOf(Error);
            });

            expect(result.current.data).toBeNull();
            expect(result.current.error?.message).toBe('User not found');
        });

        it('should return null data when username is undefined', async () => {
            const { result } = renderHook(() => useGitHubUser(undefined));

            await waitFor(() => {
                expect(result.current.isLoading).toBe(false);
            });

            expect(result.current.data).toBeNull();
            expect(result.current.error).toBeNull();
            expect(mockFetchGitHubUser).not.toHaveBeenCalled();
        });
    });

    describe('Caching', () => {
        it('should cache user data', async () => {
            mockFetchGitHubUser.mockResolvedValue(mockUserData);

            const { result: result1 } = renderHook(() => useGitHubUser('testuser'));
            await waitFor(() => expect(result1.current.data).toEqual(mockUserData));

            const { result: result2 } = renderHook(() => useGitHubUser('testuser'));
            await waitFor(() => expect(result2.current.data).toEqual(mockUserData));

            expect(mockFetchGitHubUser).toHaveBeenCalledTimes(1);
        });

        it('should fetch different users separately', async () => {
            mockFetchGitHubUser.mockResolvedValue(mockUserData);

            const { result: result1 } = renderHook(() => useGitHubUser('user1'));
            await waitFor(() => expect(result1.current.isLoading).toBe(false));

            const { result: result2 } = renderHook(() => useGitHubUser('user2'));
            await waitFor(() => expect(result2.current.isLoading).toBe(false));

            expect(mockFetchGitHubUser).toHaveBeenCalledTimes(2);
        });
    });
});
