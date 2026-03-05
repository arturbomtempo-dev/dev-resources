export const mockGuestbookEntries = [
    {
        id: 1,
        name: 'Mock User 1',
        message: 'This is a mock message 1',
        created_at: new Date('2026-03-01T10:00:00Z').toISOString(),
    },
    {
        id: 2,
        name: 'Mock User 2',
        message: 'This is a mock message 2',
        created_at: new Date('2026-03-02T15:30:00Z').toISOString(),
    },
    {
        id: 3,
        name: 'Mock User 3',
        message: 'This is a mock message 3',
        created_at: new Date('2026-03-03T08:45:00Z').toISOString(),
    },
];

export const createMockEntry = (data: { name: string; message: string }) => ({
    id: Math.floor(Math.random() * 10000),
    ...data,
    created_at: new Date().toISOString(),
});
