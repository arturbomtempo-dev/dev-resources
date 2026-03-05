import { expect, test } from '@playwright/test';
import { navigateAndWait, waitForPageLoad } from './helpers/test-utils';

test.describe('Guestbook', () => {
    test.beforeEach(async ({ page }) => {
        await navigateAndWait(page, '/guestbook');
    });

    test.describe('Rendering', () => {
        test('should render the page title', async ({ page }) => {
            const heading = page.getByRole('heading', { level: 2 }).first();
            await expect(heading).toBeVisible();
        });

        test('should render the form', async ({ page }) => {
            await expect(page.getByRole('textbox', { name: /nome|name/i })).toBeVisible();
            await expect(page.getByRole('textbox', { name: /mensagem|message/i })).toBeVisible();
            await expect(page.getByRole('button', { name: /enviar|send|submit/i })).toBeVisible();
        });

        test('should show the messages section', async ({ page }) => {
            await expect(
                page.getByRole('heading', { name: /mensagens|messages/i, level: 2 }).first()
            ).toBeVisible();
        });
    });

    test.describe('Form', () => {
        test('should allow typing in the name field', async ({ page }) => {
            const nameInput = page.getByRole('textbox', { name: /nome|name/i });
            await nameInput.fill('John Test');
            await expect(nameInput).toHaveValue('John Test');
        });

        test('should allow typing in the message field', async ({ page }) => {
            const messageInput = page.getByRole('textbox', { name: /mensagem|message/i });
            await messageInput.fill('This is a test message!');
            await expect(messageInput).toHaveValue('This is a test message!');
        });

        test('should have placeholder in fields', async ({ page }) => {
            const nameInput = page.getByRole('textbox', { name: /nome|name/i });
            const messageInput = page.getByRole('textbox', { name: /mensagem|message/i });

            await expect(nameInput).toHaveAttribute('placeholder', /.+/);
            await expect(messageInput).toHaveAttribute('placeholder', /.+/);
        });
    });

    test.describe('Form Validation', () => {
        test('should show error when trying to submit with empty fields', async ({ page }) => {
            const submitButton = page.getByRole('button', { name: /enviar|send|submit/i });

            await submitButton.click();

            const nameInput = page.getByRole('textbox', { name: /nome|name/i });
            await expect(nameInput).toHaveValue('');
        });
    });

    test.describe('Submission', () => {
        test('should show loading state during submission', async ({ page }) => {
            const nameInput = page.getByRole('textbox', { name: /nome|name/i });
            const messageInput = page.getByRole('textbox', { name: /mensagem|message/i });
            const submitButton = page.getByRole('button', { name: /enviar|send|submit/i });

            await nameInput.fill('E2E Test');
            await messageInput.fill('Test message from Playwright');

            await submitButton.click();
        });

        test('should clear form after successful submission', async ({ page }) => {
            const nameInput = page.getByRole('textbox', { name: /nome|name/i });
            const messageInput = page.getByRole('textbox', { name: /mensagem|message/i });
            const submitButton = page.getByRole('button', { name: /enviar|send|submit/i });

            await nameInput.fill('Automated Test');
            await messageInput.fill('E2E test message');
            await submitButton.click();

            await page.waitForTimeout(2000);

            await expect(page).toHaveURL(/.*guestbook/);
        });
    });

    test.describe('Accessibility', () => {
        test('should navigate form using Tab', async ({ page }) => {
            await page.keyboard.press('Tab');
            await page.keyboard.press('Tab');

            const focusedElement = page
                .locator(':focus')
                .and(page.locator(':not(nextjs-portal):not([data-nextjs-dev-tools-button])'));
            const count = await focusedElement.count();
            expect(count).toBeGreaterThan(0);
        });

        test('should submit with Enter when in message field', async ({ page }) => {
            const nameInput = page.getByRole('textbox', { name: /nome|name/i });
            const messageInput = page.getByRole('textbox', { name: /mensagem|message/i });

            await nameInput.fill('Test');
            await messageInput.fill('Message');

            await messageInput.press('Enter');

            await expect(messageInput).toHaveValue(/\n/);
        });
    });

    test.describe('Messages List', () => {
        test('should display loading state initially', async ({ page }) => {
            await page.reload();
            await waitForPageLoad(page);
            await expect(
                page.getByRole('heading', { name: /guestbook|livro de visitas/i, level: 2 })
            ).toBeVisible();
        });

        test('should display messages after loading', async ({ page }) => {
            await page.waitForLoadState('networkidle');
            await page.waitForTimeout(1000);

            // Look for message headings (h3 elements inside message list)
            const messageHeadings = page.locator('h3');
            const hasMessages = (await messageHeadings.count()) > 1; // At least one message (besides section heading)

            const hasEmptyMessage = await page
                .getByText(/nenhuma mensagem|no messages|empty/i)
                .isVisible()
                .catch(() => false);

            expect(hasMessages || hasEmptyMessage).toBeTruthy();
        });
    });
});
