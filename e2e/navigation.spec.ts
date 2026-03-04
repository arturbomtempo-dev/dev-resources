import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
    test('should load the home page', async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveTitle(/Dev Resources/i);
    });

    test('should display the hero section on home', async ({ page }) => {
        await page.goto('/');
        const heroTitle = page.getByRole('heading', { level: 1 });
        await expect(heroTitle).toBeVisible();
    });

    test('should navigate to indications page', async ({ page }) => {
        await page.goto('/');
        await page.getByRole('link', { name: /indicacoes|indications/i }).click();
        await expect(page).toHaveURL(/.*indications/);
        await expect(page.getByRole('heading', { name: /indicacoes|indications/i })).toBeVisible();
    });

    test('should navigate to projects page', async ({ page }) => {
        await page.goto('/');
        await page.getByRole('link', { name: /projetos|projects/i }).click();
        await expect(page).toHaveURL(/.*projects/);
    });

    test('should navigate to about page', async ({ page }) => {
        await page.goto('/');
        await page.getByRole('link', { name: /sobre|about/i }).click();
        await expect(page).toHaveURL(/.*about/);
    });

    test('should navigate to contact page', async ({ page }) => {
        await page.goto('/');
        await page.getByRole('link', { name: /contato|contact/i }).click();
        await expect(page).toHaveURL(/.*contact/);
    });

    test('should navigate to guestbook', async ({ page }) => {
        await page.goto('/');
        await page.getByRole('link', { name: /guestbook/i }).click();
        await expect(page).toHaveURL(/.*guestbook/);
    });

    test('should navigate to indications via hero button', async ({ page }) => {
        await page.goto('/');
        await page.getByRole('link', { name: /explorar|explore/i }).click();
        await expect(page).toHaveURL(/.*indications/);
    });

    test('should return to home when clicking the logo', async ({ page }) => {
        await page.goto('/about');
        await page
            .getByRole('link', { name: /dev\s*resources|logo/i })
            .first()
            .click();
        await expect(page).toHaveURL('/');
    });
});

test.describe('Responsiveness', () => {
    test('should display mobile menu on small screens', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        await page.goto('/');
        const menuButton = page.getByRole('button', { name: /menu/i });

        if (await menuButton.isVisible()) {
            await menuButton.click();
            await expect(page.getByRole('link', { name: /indicacoes|indications/i })).toBeVisible();
        }
    });

    test('should display desktop menu on large screens', async ({ page }) => {
        await page.setViewportSize({ width: 1280, height: 720 });
        await page.goto('/');
        await expect(page.getByRole('link', { name: /indicacoes|indications/i })).toBeVisible();
    });
});