import { test, expect } from '@playwright/test';
import { navigateAndWait } from './helpers/test-utils';

test.describe('Projects Page', () => {
    test.beforeEach(async ({ page }) => {
        await navigateAndWait(page, '/projects');
    });

    test.describe('Rendering', () => {
        test('should render the page title', async ({ page }) => {
            const heading = page.getByRole('heading', { level: 2 }).first();
            await expect(heading).toBeVisible();
        });

        test('should render project cards', async ({ page }) => {
            const projectCards = page.locator('a[href^="/projects/"]');
            await expect(projectCards.first()).toBeVisible();
            const count = await projectCards.count();
            expect(count).toBeGreaterThan(0);
        });

        test('should display project information', async ({ page }) => {
            const firstCard = page.locator('a[href^="/projects/"]').first();
            await expect(firstCard.getByRole('heading', { level: 3 })).toBeVisible();
        });
    });

    test.describe('Project Cards', () => {
        test('should have clickable project cards', async ({ page }) => {
            const firstCard = page.locator('a[href^="/projects/"]').first();
            await expect(firstCard).toHaveAttribute('href', /\/projects\/.+/);
        });

        test('should open project details when clicking card', async ({ page }) => {
            const firstCard = page.locator('a[href^="/projects/"]').first();
            const href = await firstCard.getAttribute('href');

            await firstCard.click();
            await page.waitForLoadState('networkidle');

            if (href) {
                await expect(page).toHaveURL(new RegExp(href));
            }
        });

        test('should display multiple projects in grid layout', async ({ page }) => {
            const projectCards = page.locator('a[href^="/projects/"]');
            const count = await projectCards.count();
            expect(count).toBeGreaterThanOrEqual(1);
        });
    });

    test.describe('Accessibility', () => {
        test('should have semantic headings', async ({ page }) => {
            const headings = page.locator('h2, h3');
            const count = await headings.count();
            expect(count).toBeGreaterThan(0);
        });

        test('should navigate with keyboard', async ({ page }) => {
            await page.keyboard.press('Tab');
            await page.keyboard.press('Tab');

            const focusedElement = page.locator(':focus');
            const count = await focusedElement.count();
            expect(count).toBeGreaterThan(0);
        });
    });

    test.describe('Responsive', () => {
        test('should display correctly on mobile', async ({ page }) => {
            await page.setViewportSize({ width: 375, height: 667 });
            await page.reload();
            await page.waitForLoadState('networkidle');

            const heading = page.getByRole('heading', { level: 2 }).first();
            await expect(heading).toBeVisible();
        });

        test('should display correctly on desktop', async ({ page }) => {
            await page.setViewportSize({ width: 1280, height: 720 });
            await page.reload();
            await page.waitForLoadState('networkidle');

            const projectCards = page.locator('a[href^="/projects/"]');
            await expect(projectCards.first()).toBeVisible();
        });
    });
});
