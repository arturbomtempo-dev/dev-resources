import { render } from '@testing-library/react';
import RootLayout from '../layout';

jest.mock('@/components/Header', () => ({
    Header: () => <div data-testid="header">Header</div>,
}));

jest.mock('@/components/Footer', () => ({
    Footer: () => <div data-testid="footer">Footer</div>,
}));

jest.mock('@/lib/theme/ThemeProvider', () => ({
    ThemeProvider: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="theme-provider">{children}</div>
    ),
}));

jest.mock('@/lib/i18n/I18nProvider', () => ({
    I18nProvider: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="i18n-provider">{children}</div>
    ),
}));

jest.mock('@/components/ui/sonner', () => ({
    Toaster: () => <div data-testid="toaster">Toaster</div>,
}));

describe('Root Layout', () => {
    it('should render providers', () => {
        const { getByTestId } = render(
            <RootLayout>
                <div>Content</div>
            </RootLayout>
        );

        expect(getByTestId('theme-provider')).toBeInTheDocument();
        expect(getByTestId('i18n-provider')).toBeInTheDocument();
    });

    it('should render header', () => {
        const { getByTestId } = render(
            <RootLayout>
                <div>Content</div>
            </RootLayout>
        );

        expect(getByTestId('header')).toBeInTheDocument();
    });

    it('should render footer', () => {
        const { getByTestId } = render(
            <RootLayout>
                <div>Content</div>
            </RootLayout>
        );

        expect(getByTestId('footer')).toBeInTheDocument();
    });

    it('should render children in main element', () => {
        const { getByText, container } = render(
            <RootLayout>
                <div>Test Content</div>
            </RootLayout>
        );

        expect(getByText('Test Content')).toBeInTheDocument();
        expect(container.querySelector('main')).toBeInTheDocument();
    });

    it('should render toaster', () => {
        const { getByTestId } = render(
            <RootLayout>
                <div>Content</div>
            </RootLayout>
        );

        expect(getByTestId('toaster')).toBeInTheDocument();
    });
});
