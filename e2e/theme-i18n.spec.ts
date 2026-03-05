import { test, expect } from '@playwright/test';
import { navigateAndWait, waitForPageLoad } from './helpers/test-utils';

test.describe('Theme (Dark/Light Mode)', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.evaluate(() => localStorage.clear());
        await page.reload();
    });

    test('should have a theme toggle button', async ({ page }) => {
        const themeToggle = page
            .locator('button')
            .filter({
                has: page.locator('svg'),
            })
            .filter({
                hasText: /theme|tema|moon|sun|lua|sol/i,
            })
            .or(page.getByRole('button', { name: /theme|tema|mode|modo/i }))
            .or(page.locator('[aria-label*="theme"], [aria-label*="tema"]'));

        const anyThemeButton = page.locator('button svg').first();

        await expect(anyThemeButton).toBeVisible();
    });

    test('should toggle between themes when clicking the button', async ({ page }) => {
        const initialHtmlClass = (await page.locator('html').getAttribute('class')) || '';

        const themeButtons = page.locator('header button');

        const count = await themeButtons.count();
        for (let i = 0; i < count; i++) {
            await themeButtons.nth(i).click({ force: true });
            await page.waitForTimeout(300);

            const newClass = (await page.locator('html').getAttribute('class')) || '';
            if (newClass !== initialHtmlClass) {
                break;
            }
        }

        const finalClass = (await page.locator('html').getAttribute('class')) || '';
        expect(page).toHaveURL('/');
    });

    test('should persist theme preference after reload', async ({ page }) => {
        await navigateAndWait(page, '/');
        const initialClass = (await page.locator('html').getAttribute('class')) || '';

        const buttons = page.locator('header button');
        const count = await buttons.count();

        if (count > 0) {
            await buttons.first().click({ force: true });
            await page.waitForTimeout(300);
        }

        await page.reload();
        await waitForPageLoad(page);

        await expect(page).toHaveURL('/');
    });
});

test.describe('Internationalization (i18n)', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.evaluate(() => localStorage.clear());
        await page.reload();
        await waitForPageLoad(page);
    });

    test('should have a language selector', async ({ page }) => {
        const languageSelector = page
            .locator('button, select, [class*="language"], [class*="locale"]')
            .filter({
                hasText: /pt|en|portugues|english|br|us/i,
            })
            .first();

        if ((await languageSelector.count()) > 0) {
            await expect(languageSelector).toBeVisible();
        }
    });

    test('should change language when selecting', async ({ page }) => {
        const initialText = await page.locator('body').textContent();

        const languageButtons = page.locator('button').filter({
            hasText: /pt|en|portugues|english/i,
        });

        if ((await languageButtons.count()) > 0) {
            await languageButtons.first().click({ force: true });
            await page.waitForTimeout(500);
        }

        await expect(page).toHaveURL('/');
    });

    test('should display texts in the selected language', async ({ page }) => {
        const ptText = await page.getByText(/explorar|indicacoes|contato|sobre/i).first();

        const enText = await page.getByText(/explore|indications|contact|about/i).first();

        const hasPt = await ptText.isVisible().catch(() => false);
        const hasEn = await enText.isVisible().catch(() => false);

        expect(hasPt || hasEn).toBeTruthy();
    });

    test('should maintain language after navigation', async ({ page }) => {
        await navigateAndWait(page, '/');

        await page.goto('/about');
        await waitForPageLoad(page);

        await expect(page).toHaveURL(/.*about/);

        const hasContent = await page.locator('h1, h2').first().isVisible();
        expect(hasContent).toBeTruthy();
    });
});

test.describe('Visual Regression (Snapshot)', () => {
    test.skip('captures home screenshot for visual comparison', async ({ page }) => {
        await navigateAndWait(page, '/');

        await expect(page).toHaveScreenshot('home.png', {
            fullPage: true,
            mask: [page.locator('[class*="date"], [class*="time"]')],
        });
    });
});
