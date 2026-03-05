import { render, screen } from '@testing-library/react';
import NotFound from '../not-found';

jest.mock('@/lib/i18n/I18nProvider', () => ({
    useI18n: () => ({
        t: {
            common: {
                notFound: {
                    code: '404',
                    text: 'Page not found',
                    button: 'Back to home',
                },
            },
        },
    }),
}));

describe('Not Found Page', () => {
    it('should render 404 code', () => {
        render(<NotFound />);
        expect(screen.getByText('404')).toBeInTheDocument();
    });

    it('should render error message', () => {
        render(<NotFound />);
        expect(screen.getByText('Page not found')).toBeInTheDocument();
    });

    it('should render back to home link', () => {
        render(<NotFound />);
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', '/');
        expect(link).toHaveTextContent('Back to home');
    });

    it('should render as main element', () => {
        const { container } = render(<NotFound />);
        expect(container.querySelector('main')).toBeInTheDocument();
    });
});
