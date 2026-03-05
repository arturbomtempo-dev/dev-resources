import { render, screen, waitFor } from '@testing-library/react';
import Template from '../template';

jest.mock('@/components/Loading', () => ({
    __esModule: true,
    default: () => <div data-testid="loading">Loading</div>,
}));

jest.mock('next/navigation', () => ({
    usePathname: () => '/test',
}));

describe('Template Component', () => {
    it('should show loading initially', () => {
        render(
            <Template>
                <div data-testid="content">Content</div>
            </Template>
        );
        expect(screen.getByTestId('loading')).toBeInTheDocument();
    });

    it('should show children after loading', async () => {
        render(
            <Template>
                <div data-testid="content">Content</div>
            </Template>
        );

        await waitFor(
            () => {
                expect(screen.getByTestId('content')).toBeInTheDocument();
            },
            { timeout: 500 }
        );
    });

    it('should render children container', async () => {
        const { container } = render(
            <Template>
                <div data-testid="content">Content</div>
            </Template>
        );

        await waitFor(
            () => {
                expect(screen.getByTestId('content')).toBeInTheDocument();
            },
            { timeout: 500 }
        );

        const divs = container.querySelectorAll('div');
        expect(divs.length).toBeGreaterThan(0);
    });
});
