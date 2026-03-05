import { test, expect } from '@playwright/test';
import { navigateAndWait } from './helpers/test-utils';

test.describe('About Page', () => {
    test.beforeEach(async ({ page }) => {
        await navigateAndWait(page, '/about');
    });

    test.describe('Rendering', () => {
        test('should render the page title', async ({ page }) => {
            const heading = page.getByRole('heading', { level: 2 }).first();
            await expect(heading).toBeVisible();
        });

        test('should display team member cards', async ({ page }) => {
            const memberHeadings = page.getByRole('heading', { level: 3 });
            const count = await memberHeadings.count();
            expect(count).toBeGreaterThanOrEqual(2);
        });

        test('should display member information', async ({ page }) => {
            const memberCards = page
                .locator('article, [class*="card"]')
                .or(page.locator('div').filter({ has: page.getByRole('heading', { level: 3 }) }));
            await expect(memberCards.first()).toBeVisible();
        });
    });

    test.describe('Team Members', () => {
        test('should display social links', async ({ page }) => {
            const socialLinks = page.getByRole('link').filter({
                has: page.locator('svg'),
            });
            const count = await socialLinks.count();
            expect(count).toBeGreaterThan(0);
        });

        test('should have external social links', async ({ page }) => {
            const externalLinks = page.locator('a[target="_blank"]');
            const count = await externalLinks.count();
            expect(count).toBeGreaterThan(0);
        });

        test('should display both team members', async ({ page }) => {
            const arturHeading = page.getByRole('heading', { name: /artur/i }).first();
            const eduardaHeading = page.getByRole('heading', { name: /eduarda/i }).first();

            await expect(arturHeading).toBeVisible();
            await expect(eduardaHeading).toBeVisible();
        });
    });

    test.describe('Content', () => {
        test('should display member descriptions', async ({ page }) => {
            const paragraphs = page.locator('p');
            const count = await paragraphs.count();
            expect(count).toBeGreaterThan(0);
        });

        test('should show member roles or titles', async ({ page }) => {
            const content = await page.textContent('body');
            const hasTechContent =
                /developer|desenvolvedor|frontend|backend|fullstack|engenheiro|engineer/i.test(
                    content || ''
                );
            expect(hasTechContent).toBeTruthy();
        });
    });

    test.describe('Accessibility', () => {
        test('should have proper heading hierarchy', async ({ page }) => {
            const h2Count = await page.locator('h2').count();
            const h3Count = await page.locator('h3').count();

            expect(h2Count).toBeGreaterThan(0);
            expect(h3Count).toBeGreaterThan(0);
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

            const members = page.getByRole('heading', { level: 3 });
            await expect(members.first()).toBeVisible();
        });
    });
});
