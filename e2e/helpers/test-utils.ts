import { Page } from '@playwright/test';

export async function waitForPageLoad(page: Page, timeout: number = 10000): Promise<void> {
    await page.waitForLoadState('networkidle');

    try {
        await page.waitForSelector('header, main, h1, h2, nav, button, a', {
            timeout,
            state: 'attached',
        });
    } catch {}
}

export async function navigateAndWait(page: Page, url: string): Promise<void> {
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await waitForPageLoad(page);
}

export async function openMobileMenuIfNeeded(page: Page): Promise<void> {
    const isMobile = page.viewportSize()!.width < 1024;

    if (isMobile) {
        await waitForPageLoad(page);
        const menuButton = page.getByRole('button', { name: /toggle menu/i });
        await menuButton.waitFor({ state: 'visible', timeout: 10000 });
        await menuButton.click();
        await page.waitForTimeout(500);
    }
}
