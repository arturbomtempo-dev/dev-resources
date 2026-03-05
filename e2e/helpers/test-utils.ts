import { Page } from '@playwright/test';

/**
 * Waits for the page loading overlay to disappear
 * @param page - Playwright page object
 * @param timeout - Maximum time to wait in milliseconds (default: 5000)
 */
export async function waitForPageLoad(page: Page, timeout: number = 5000): Promise<void> {
    await page.waitForLoadState('networkidle');

    // Wait for the loading overlay to be hidden
    const loadingOverlay = page.getByTestId('page-loading');

    try {
        // If loading overlay exists, wait for it to disappear
        await loadingOverlay.waitFor({ state: 'hidden', timeout });
    } catch {
        // Loading overlay might have already disappeared
    }

    // Additional wait to ensure DOM is fully ready and interactive
    await page.waitForTimeout(200);
}

/**
 * Navigates to a page and waits for it to be fully loaded
 * @param page - Playwright page object
 * @param url - URL to navigate to
 */
export async function navigateAndWait(page: Page, url: string): Promise<void> {
    await page.goto(url);
    await waitForPageLoad(page);
}

/**
 * Clicks on a mobile menu toggle button if viewport is mobile size
 * @param page - Playwright page object
 */
export async function openMobileMenuIfNeeded(page: Page): Promise<void> {
    const isMobile = page.viewportSize()!.width < 1024;

    if (isMobile) {
        await waitForPageLoad(page);
        const menuButton = page.getByRole('button', { name: /toggle menu/i });
        await menuButton.waitFor({ state: 'visible', timeout: 5000 });
        await menuButton.click();
        await page.waitForTimeout(500);
    }
}
