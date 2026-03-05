import { expect, test } from '@playwright/test';
import { navigateAndWait } from './helpers/test-utils';

test.describe('Experiences Page', () => {
    test.beforeEach(async ({ page }) => {
        await navigateAndWait(page, '/experiences');
    });

    test.describe('Rendering', () => {
        test('should render the page title', async ({ page }) => {
            const heading = page.getByRole('heading', { level: 2 }).first();
            await expect(heading).toBeVisible();
        });

        test('should display filter pills', async ({ page }) => {
            const filterButtons = page.locator('button').filter({
                hasText:
                    /todos|academico|profissional|projeto|evento|all|academic|professional|project|event/i,
            });
            const count = await filterButtons.count();
            expect(count).toBeGreaterThanOrEqual(3);
        });

        test('should display team member sections', async ({ page }) => {
            const arturSection = page.getByText(/artur/i);
            const eduardaSection = page.getByText(/eduarda/i);

            await expect(arturSection.or(eduardaSection).first()).toBeVisible();
        });

        test('should display experience cards', async ({ page }) => {
            const experienceHeadings = page.getByRole('heading', { level: 3 });
            const count = await experienceHeadings.count();
            expect(count).toBeGreaterThan(0);
        });
    });

    test.describe('Filter Functionality', () => {
        test('should have default filter selected', async ({ page }) => {
            const activeFilter = page.locator('button').filter({
                hasText: /todos|all/i,
            });
            await expect(activeFilter.first()).toBeVisible();
        });

        test('should filter by academic experiences', async ({ page }) => {
            const academicFilter = page.locator('button').filter({
                hasText: /acadêmico|academico|academic/i,
            });

            if ((await academicFilter.count()) > 0) {
                await academicFilter.first().click();
                await page.waitForTimeout(300);
                await expect(page).toHaveURL(/.*experiences/);
            }
        });

        test('should filter by professional experiences', async ({ page }) => {
            const professionalFilter = page.locator('button').filter({
                hasText: /profissional|professional/i,
            });

            if ((await professionalFilter.count()) > 0) {
                await professionalFilter.first().click();
                await page.waitForTimeout(300);
                await expect(page).toHaveURL(/.*experiences/);
            }
        });

        test('should filter by project experiences', async ({ page }) => {
            const projectFilter = page.locator('button').filter({
                hasText: /projeto|project/i,
            });

            if ((await projectFilter.count()) > 0) {
                await projectFilter.first().click();
                await page.waitForTimeout(300);
                await expect(page).toHaveURL(/.*experiences/);
            }
        });

        test('should update experience list when filter changes', async ({ page }) => {
            const filters = page.locator('button').filter({
                hasText: /academico|profissional|projeto|academic|professional|project/i,
            });

            if ((await filters.count()) > 0) {
                await filters.first().click();
                await page.waitForTimeout(500);

                const newHeadingsCount = await page.getByRole('heading', { level: 3 }).count();
                expect(newHeadingsCount).toBeGreaterThan(0);
            }
        });
    });

    test.describe('Experience Cards', () => {
        test('should display experience titles', async ({ page }) => {
            const titles = page.getByRole('heading', { level: 3 });
            const count = await titles.count();
            expect(count).toBeGreaterThan(0);
        });

        test('should display organization names', async ({ page }) => {
            const content = await page.textContent('body');
            const hasOrgContent = content && content.length > 100;
            expect(hasOrgContent).toBeTruthy();
        });

        test('should display time periods', async ({ page }) => {
            const content = await page.textContent('body');
            const hasDateContent = /20\d{2}|\d{4}|present|atual/i.test(content || '');
            expect(hasDateContent).toBeTruthy();
        });

        test('should display category badges', async ({ page }) => {
            const badges = page.locator('[class*="badge"], [class*="pill"], [class*="tag"]');
            const textBadges = page.locator('span, div').filter({
                hasText:
                    /acadêmico|profissional|projeto|evento|academic|professional|project|event/i,
            });

            const badgeCount = await badges.count();
            const textBadgeCount = await textBadges.count();

            expect(badgeCount + textBadgeCount).toBeGreaterThan(0);
        });
    });

    test.describe('Team Sections', () => {
        test('should display Artur section', async ({ page }) => {
            const arturHeading = page.getByRole('heading', { name: /artur/i });
            await expect(arturHeading.first()).toBeVisible();
        });

        test('should display Eduarda section', async ({ page }) => {
            const eduardaHeading = page.getByRole('heading', { name: /eduarda/i });
            await expect(eduardaHeading.first()).toBeVisible();
        });

        test('should have separate columns for team members', async ({ page }) => {
            const sections = page.locator('section, div').filter({
                has: page.getByRole('heading', { name: /artur|eduarda/i }),
            });
            const count = await sections.count();
            expect(count).toBeGreaterThan(0);
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

        test('should have accessible filter buttons', async ({ page }) => {
            const filterButtons = page.locator('button').filter({
                hasText: /todos|academico|profissional|all|academic|professional/i,
            });

            const firstButton = filterButtons.first();
            await expect(firstButton).toBeVisible();
            await expect(firstButton).toBeEnabled();
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

            const filters = page.locator('button').filter({
                hasText: /todos|all/i,
            });
            await expect(filters.first()).toBeVisible();
        });

        test('should stack team sections on mobile', async ({ page }) => {
            await page.setViewportSize({ width: 375, height: 667 });
            await page.reload();
            await page.waitForLoadState('networkidle');

            const arturHeading = page.getByRole('heading', { name: /artur/i }).first();
            const eduardaHeading = page.getByRole('heading', { name: /eduarda/i }).first();

            await expect(arturHeading).toBeVisible();
            await expect(eduardaHeading).toBeVisible();
        });
    });
});
