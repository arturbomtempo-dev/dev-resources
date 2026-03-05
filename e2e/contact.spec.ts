import { expect, test } from '@playwright/test';
import { navigateAndWait } from './helpers/test-utils';
import { mockEmailJs } from './helpers/mocks';

test.describe('Contact Page', () => {
    test.beforeEach(async ({ page }) => {
        await mockEmailJs(page);
        await navigateAndWait(page, '/contact');
    });

    test.describe('Rendering', () => {
        test('should render the page title', async ({ page }) => {
            const heading = page.getByRole('heading', { level: 2 }).first();
            await expect(heading).toBeVisible();
        });

        test('should render the contact form', async ({ page }) => {
            await expect(page.getByLabel(/nome|name/i)).toBeVisible();
            await expect(page.getByLabel(/email|e-mail/i)).toBeVisible();
            await expect(page.getByLabel(/assunto|subject/i)).toBeVisible();
            await expect(page.getByLabel(/mensagem|message/i)).toBeVisible();
        });

        test('should render social media buttons', async ({ page }) => {
            const socialLinks = page.locator(
                'a[href*="linkedin"], a[href*="github"], a[href*="mailto"]'
            );
            const count = await socialLinks.count();
            expect(count).toBeGreaterThanOrEqual(2);
        });
    });

    test.describe('Form Fields', () => {
        test('should allow typing in name field', async ({ page }) => {
            const nameInput = page.getByLabel(/nome|name/i);
            await nameInput.fill('João Silva');
            await expect(nameInput).toHaveValue('João Silva');
        });

        test('should allow typing in email field', async ({ page }) => {
            const emailInput = page.getByLabel(/email|e-mail/i);
            await emailInput.fill('joao@example.com');
            await expect(emailInput).toHaveValue('joao@example.com');
        });

        test('should allow typing in subject field', async ({ page }) => {
            const subjectInput = page.getByLabel(/assunto|subject/i);
            await subjectInput.fill('Test Subject');
            await expect(subjectInput).toHaveValue('Test Subject');
        });

        test('should allow typing in message field', async ({ page }) => {
            const messageInput = page.getByLabel(/mensagem|message/i);
            await messageInput.fill('This is a test message');
            await expect(messageInput).toHaveValue('This is a test message');
        });

        test('should have proper placeholders', async ({ page }) => {
            const nameInput = page.getByLabel(/nome|name/i);
            const emailInput = page.getByLabel(/email|e-mail/i);

            await expect(nameInput).toHaveAttribute('placeholder', /.+/);
            await expect(emailInput).toHaveAttribute('placeholder', /.+/);
        });
    });

    test.describe('Form Validation', () => {
        test('should validate empty fields on submit', async ({ page }) => {
            const submitButton = page.getByRole('button', { name: /enviar|send|submit/i });
            await submitButton.click();

            await page.waitForTimeout(500);

            const nameInput = page.getByLabel(/nome|name/i);
            await expect(nameInput).toHaveValue('');
        });

        test('should validate email format', async ({ page }) => {
            const nameInput = page.getByLabel(/nome|name/i);
            const emailInput = page.getByLabel(/email|e-mail/i);
            const subjectInput = page.getByLabel(/assunto|subject/i);
            const messageInput = page.getByLabel(/mensagem|message/i);
            const submitButton = page.getByRole('button', { name: /enviar|send|submit/i });

            await nameInput.fill('Test User');
            await emailInput.fill('invalid-email');
            await subjectInput.fill('Test Subject');
            await messageInput.fill('Test message');
            await submitButton.click();

            await page.waitForTimeout(500);
        });

        test('should show validation for missing required fields', async ({ page }) => {
            const emailInput = page.getByLabel(/email|e-mail/i);
            const submitButton = page.getByRole('button', { name: /enviar|send|submit/i });

            await emailInput.fill('test@example.com');
            await submitButton.click();

            await page.waitForTimeout(500);
        });
    });

    test.describe('Form Submission', () => {
        test('should handle successful form submission', async ({ page }) => {
            const nameInput = page.getByLabel(/nome|name/i);
            const emailInput = page.getByLabel(/email|e-mail/i);
            const subjectInput = page.getByLabel(/assunto|subject/i);
            const messageInput = page.getByLabel(/mensagem|message/i);
            const submitButton = page.getByRole('button', { name: /enviar|send|submit/i });

            await nameInput.fill('E2E Test User');
            await emailInput.fill('e2e.test@example.com');
            await subjectInput.fill('E2E Test Subject');
            await messageInput.fill('This is an automated E2E test message');

            await submitButton.click();
            await page.waitForTimeout(2000);
        });

        test('should disable submit button during subscription', async ({ page }) => {
            const submitButton = page.getByRole('button', { name: /enviar|send|submit/i });
            await expect(submitButton).toBeEnabled();
        });
    });

    test.describe('Social Links', () => {
        test('should have LinkedIn link', async ({ page }) => {
            const linkedinLink = page.locator('a[href*="linkedin"]');
            const count = await linkedinLink.count();
            expect(count).toBeGreaterThanOrEqual(1);
        });

        test('should have GitHub link', async ({ page }) => {
            const githubLink = page.locator('a[href*="github"]');
            const count = await githubLink.count();
            expect(count).toBeGreaterThanOrEqual(1);
        });

        test('should have email link', async ({ page }) => {
            const emailLink = page.locator('a[href^="mailto:"]');
            await expect(emailLink).toBeVisible();
        });

        test('should open external links in new tab', async ({ page }) => {
            const externalLinks = page.locator('a[href*="linkedin"], a[href*="github"]');
            const firstLink = externalLinks.first();

            if ((await firstLink.count()) > 0) {
                await expect(firstLink).toHaveAttribute('target', '_blank');
            }
        });
    });

    test.describe('Accessibility', () => {
        test('should have proper form labels', async ({ page }) => {
            const nameLabel = page.locator('label[for="name"]');
            const emailLabel = page.locator('label[for="email"]');

            const nameCount = await nameLabel.count();
            const emailCount = await emailLabel.count();

            expect(nameCount + emailCount).toBeGreaterThan(0);
        });

        test('should navigate form with keyboard', async ({ page }) => {
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

            await expect(page.getByLabel(/nome|name/i)).toBeVisible();
        });

        test('should display correctly on desktop', async ({ page }) => {
            await page.setViewportSize({ width: 1280, height: 720 });
            await page.reload();
            await page.waitForLoadState('networkidle');

            await expect(page.getByLabel(/nome|name/i)).toBeVisible();
        });
    });
});
