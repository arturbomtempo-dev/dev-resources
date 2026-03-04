import { renderHook, act, waitFor } from '@testing-library/react';
import { useGuestbook } from '../useGuestbook';
import {
    getGuestbookEntries,
    createGuestbookEntry,
    subscribeToGuestbook,
} from '@/services/guestbook';
import type { GuestbookEntry } from '@/lib/supabase/types';

jest.mock('@/services/guestbook', () => ({
    getGuestbookEntries: jest.fn(),
    createGuestbookEntry: jest.fn(),
    subscribeToGuestbook: jest.fn(),
}));

const mockGetGuestbookEntries = getGuestbookEntries as jest.MockedFunction<typeof getGuestbookEntries>;
const mockCreateGuestbookEntry = createGuestbookEntry as jest.MockedFunction<typeof createGuestbookEntry>;
const mockSubscribeToGuestbook = subscribeToGuestbook as jest.MockedFunction<typeof subscribeToGuestbook>;

const mockEntries = [
    {
        id: '1',
        name: 'John',
        message: 'Great project!',
        created_at: '2024-01-15T10:00:00Z',
    },
    {
        id: '2',
        name: 'Mary',
        message: 'Very useful!',
        created_at: '2024-01-14T09:00:00Z',
    },
];

describe('useGuestbook Hook', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        mockSubscribeToGuestbook.mockResolvedValue(() => {});
    });

    describe('Loading State', () => {
        it('should start with isLoading true while loading data', () => {
            mockGetGuestbookEntries.mockResolvedValue([]);
            const { result } = renderHook(() => useGuestbook());
            expect(result.current.isLoading).toBe(true);
        });

        it('should set isLoading false after loading data', async () => {
            mockGetGuestbookEntries.mockResolvedValue(mockEntries);
            const { result } = renderHook(() => useGuestbook());

            await waitFor(() => {
                expect(result.current.isLoading).toBe(false);
            });
        });
    });

    describe('Loading Entries', () => {
        it('should load entries from service', async () => {
            mockGetGuestbookEntries.mockResolvedValue(mockEntries);
            const { result } = renderHook(() => useGuestbook());

            await waitFor(() => {
                expect(result.current.entries).toEqual(mockEntries);
            });

            expect(mockGetGuestbookEntries).toHaveBeenCalledTimes(1);
        });

        it('should set error when loading fails', async () => {
            mockGetGuestbookEntries.mockRejectedValue(new Error('Network error'));
            const { result } = renderHook(() => useGuestbook());

            await waitFor(() => {
                expect(result.current.error).toBe('Network error');
            });

            expect(result.current.isLoading).toBe(false);
            expect(result.current.entries).toEqual([]);
        });
    });

    describe('addEntry', () => {
        it('should add a new entry successfully', async () => {
            mockGetGuestbookEntries.mockResolvedValue([]);

            const newEntry = {
                name: 'Carlos',
                message: 'Excellent work!',
            };

            const createdEntry = {
                id: '3',
                ...newEntry,
                created_at: '2024-01-16T10:00:00Z',
            };

            mockCreateGuestbookEntry.mockResolvedValue(createdEntry);

            const { result } = renderHook(() => useGuestbook());

            await waitFor(() => {
                expect(result.current.isLoading).toBe(false);
            });

            let success: boolean = false;
            await act(async () => {
                success = await result.current.addEntry(newEntry);
            });

            expect(success).toBe(true);
            expect(mockCreateGuestbookEntry).toHaveBeenCalledWith(newEntry);
        });

        it('should return false when addEntry fails', async () => {
            mockGetGuestbookEntries.mockResolvedValue([]);
            mockCreateGuestbookEntry.mockRejectedValue(new Error('Insert failed'));

            const { result } = renderHook(() => useGuestbook());

            await waitFor(() => {
                expect(result.current.isLoading).toBe(false);
            });

            let success: boolean = true;
            await act(async () => {
                success = await result.current.addEntry({
                    name: 'Test',
                    message: 'Test message',
                });
            });

            expect(success).toBe(false);
            expect(result.current.error).toBe('Insert failed');
        });

        it('should set isSubmitting during submission', async () => {
            mockGetGuestbookEntries.mockResolvedValue([]);

            let resolveCreate: (value: unknown) => void;
            const createPromise = new Promise((resolve) => {
                resolveCreate = resolve;
            });

            mockCreateGuestbookEntry.mockReturnValue(createPromise as Promise<never>);

            const { result } = renderHook(() => useGuestbook());

            await waitFor(() => {
                expect(result.current.isLoading).toBe(false);
            });

            let addPromise: Promise<boolean>;
            act(() => {
                addPromise = result.current.addEntry({
                    name: 'Test',
                    message: 'Message',
                });
            });

            expect(result.current.isSubmitting).toBe(true);

            await act(async () => {
                resolveCreate!({
                    id: '4',
                    name: 'Test',
                    message: 'Message',
                    created_at: new Date().toISOString(),
                });
                await addPromise;
            });

            expect(result.current.isSubmitting).toBe(false);
        });
    });

    describe('Subscription (Real-time)', () => {
        it('should subscribe to real-time updates', async () => {
            mockGetGuestbookEntries.mockResolvedValue([]);
            renderHook(() => useGuestbook());

            await waitFor(() => {
                expect(mockSubscribeToGuestbook).toHaveBeenCalled();
            });
        });
    });
});