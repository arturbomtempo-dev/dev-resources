import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
    test('should load the home page', async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
        await expect(page).toHaveTitle(/DevResources/i);
    });

    test('should display the hero section on home', async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
        const heroTitle = page.getByRole('heading', { level: 1 }).first();
        await expect(heroTitle).toBeVisible();
    });

    test('should navigate to indications page', async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
        
        const isMobile = page.viewportSize()!.width < 1024;
        if (isMobile) {
            await page.getByRole('button', { name: /toggle menu/i }).click();
            await page.waitForTimeout(500);
        }
        
        await page.getByRole('link', { name: /indicacoes|indications/i }).first().click();
        await page.waitForLoadState('networkidle');
        await expect(page).toHaveURL(/.*indications/);
        // Wait for content to load
        await page.waitForSelector('h2', { timeout: 5000 });
        await expect(page.getByRole('heading', { level: 2 }).first()).toBeVisible();
    });

    test('should navigate to projects page', async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
        
        const isMobile = page.viewportSize()!.width < 1024;
        if (isMobile) {
            await page.getByRole('button', { name: /toggle menu/i }).click();
            await page.waitForTimeout(500);
        }
        
        await page.getByRole('link', { name: /projetos|projects/i }).first().click();
        await page.waitForLoadState('networkidle');
        await expect(page).toHaveURL(/.*projects/);
    });

    test('should navigate to about page', async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
        
        const isMobile = page.viewportSize()!.width < 1024;
        if (isMobile) {
            await page.getByRole('button', { name: /toggle menu/i }).click();
            await page.waitForTimeout(500);
        }
        
        await page.getByRole('link', { name: /sobre|about/i }).first().click();
        await page.waitForLoadState('networkidle');
        await expect(page).toHaveURL(/.*about/);
    });

    test('should navigate to contact page', async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
        
        const isMobile = page.viewportSize()!.width < 1024;
        if (isMobile) {
            await page.getByRole('button', { name: /toggle menu/i }).click();
            await page.waitForTimeout(500);
        }
        
        await page.getByRole('link', { name: /contato|contact/i }).first().click();
        await page.waitForLoadState('networkidle');
        await expect(page).toHaveURL(/.*contact/);
    });

    test('should navigate to guestbook', async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
        
        const isMobile = page.viewportSize()!.width < 1024;
        if (isMobile) {
            await page.getByRole('button', { name: /toggle menu/i }).click();
            await page.waitForTimeout(500);
        }
        
        await page.getByRole('link', { name: /guestbook/i }).first().click();
        await page.waitForLoadState('networkidle');
        await expect(page).toHaveURL(/.*guestbook/);
    });

    test('should navigate to indications via hero button', async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
        await page.getByRole('link', { name: /explorar|explore/i }).click();
        await page.waitForLoadState('networkidle');
        await expect(page).toHaveURL(/.*indications/);
    });

    test('should return to home when clicking the logo', async ({ page }) => {
        await page.goto('/about');
        await page.waitForLoadState('networkidle');
        await page
            .getByRole('link', { name: /dev\s*resources|logo/i })
            .first()
            .click();
        await page.waitForLoadState('networkidle');
        await expect(page).toHaveURL('/');
    });
});

test.describe('Responsiveness', () => {
    test('should display mobile menu on small screens', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        await page.goto('/');
        await page.waitForLoadState('networkidle');
        const menuButton = page.getByRole('button', { name: /toggle menu/i });

        await expect(menuButton).toBeVisible();
        await menuButton.click();
        await page.waitForTimeout(500);
        await expect(
            page.getByRole('link', { name: /indicacoes|indications/i }).first()
        ).toBeVisible();
    });

    test('should display desktop menu on large screens', async ({ page }) => {
        await page.setViewportSize({ width: 1280, height: 720 });
        await page.goto('/');
        await page.waitForLoadState('networkidle');
        await expect(
            page.getByRole('navigation', { name: /main navigation/i }).getByRole('link', { name: /indicacoes|indications/i })
        ).toBeVisible();
    });
});
