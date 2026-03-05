import type { Page, Route } from '@playwright/test';
import { mockEmailJsResponse } from '../fixtures/contact.fixtures';
import { createMockEntry, mockGuestbookEntries } from '../fixtures/guestbook.fixtures';

export async function mockSupabaseGuestbook(page: Page) {
    await page.route('**/*.supabase.co/rest/v1/guestbook**', async (route: Route) => {
        const method = route.request().method();

        if (method === 'GET') {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify(mockGuestbookEntries),
            });
        } else if (method === 'POST') {
            const postData = route.request().postDataJSON();
            const newEntry = createMockEntry(postData);
            await route.fulfill({
                status: 201,
                contentType: 'application/json',
                body: JSON.stringify([newEntry]),
            });
        } else {
            await route.continue();
        }
    });
}

export async function mockEmailJs(page: Page) {
    await page.route('https://api.emailjs.com/**', (route: Route) => {
        route.fulfill({
            status: mockEmailJsResponse.status,
            contentType: 'text/plain',
            body: mockEmailJsResponse.body,
        });
    });
}

export async function mockSupabaseGuestbookEmpty(page: Page) {
    await page.route('**/*.supabase.co/rest/v1/guestbook**', async (route: Route) => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify([]),
        });
    });
}

export async function mockSupabaseGuestbookError(page: Page) {
    await page.route('**/*.supabase.co/rest/v1/guestbook**', async (route: Route) => {
        await route.fulfill({
            status: 500,
            contentType: 'application/json',
            body: JSON.stringify({ error: 'Internal Server Error' }),
        });
    });
}
