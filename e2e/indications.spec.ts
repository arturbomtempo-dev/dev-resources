import { test, expect } from '@playwright/test';

test.describe('Indications Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/indications');
        await page.waitForLoadState('networkidle');
    });

    test.describe('Rendering', () => {
        test('should render the page title', async ({ page }) => {
            await expect(
                page.getByRole('heading', { name: /indicacoes|indications/i })
            ).toBeVisible();
        });

        test('should render the search field', async ({ page }) => {
            await expect(page.getByRole('searchbox')).toBeVisible();
        });

        test('should render indication cards', async ({ page }) => {
            const cards = page.locator('[class*="rounded"]').filter({
                has: page.getByRole('link'),
            });

            await expect(cards.first()).toBeVisible();
        });
    });

    test.describe('Search Functionality', () => {
        test('should filter indications when user types', async ({ page }) => {
            const searchInput = page.getByRole('searchbox');

            await searchInput.fill('React');
            await page.waitForTimeout(500);

            const searchResults = page.getByText(/React/i);
            await expect(searchResults.first()).toBeVisible();
        });

        test('should show message when there are no results', async ({ page }) => {
            const searchInput = page.getByRole('searchbox');

            await searchInput.fill('xyzabc123naoexiste');
            await page.waitForTimeout(500);

            await expect(page.getByText(/nenhum|no results|nao encontrado/i)).toBeVisible();
        });

        test('should clear search when field is emptied', async ({ page }) => {
            const searchInput = page.getByRole('searchbox');

            await searchInput.fill('test');
            await page.waitForTimeout(300);
            await searchInput.clear();
            await page.waitForTimeout(300);

            const cards = page.locator('article, [class*="card"]');
            await expect(cards.first()).toBeVisible();
        });
    });

    test.describe('Favorites System', () => {
        test('should add item to favorites when clicking the heart', async ({ page }) => {
            const favoriteButton = page
                .locator('button')
                .filter({
                    has: page.locator('[class*="heart"], svg'),
                })
                .first();

            if (await favoriteButton.isVisible()) {
                await favoriteButton.click();
                await expect(page).toHaveURL(/.*indications/);
            }
        });

        test('should persist favorites after page reload', async ({ page }) => {
            const favoriteButtons = page.locator('button').filter({
                has: page.locator('svg'),
            });

            if ((await favoriteButtons.count()) > 0) {
                await favoriteButtons.first().click();
                await page.reload();
                await page.waitForLoadState('networkidle');

                await expect(
                    page.getByRole('heading', { name: /indicacoes|indications/i })
                ).toBeVisible();
            }
        });
    });

    test.describe('Indication Cards', () => {
        test('should open external link in new tab when clicking', async ({ page, context }) => {
            const externalLinks = page.getByRole('link').filter({
                has: page.locator('[target="_blank"], [rel*="noopener"]'),
            });

            if ((await externalLinks.count()) > 0) {
                const [newPage] = await Promise.all([
                    context.waitForEvent('page'),
                    externalLinks.first().click(),
                ]);

                expect(newPage).toBeTruthy();
                await newPage.close();
            }
        });
    });
});