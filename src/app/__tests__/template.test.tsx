import { render, screen } from '@testing-library/react';
import Template from '../template';

jest.mock('next/navigation', () => ({
    usePathname: () => '/test',
}));

describe('Template Component', () => {
    it('should render children immediately', () => {
        render(
            <Template>
                <div data-testid="content">Content</div>
            </Template>
        );
        expect(screen.getByTestId('content')).toBeInTheDocument();
    });

    it('should apply fade-in animation class', () => {
        const { container } = render(
            <Template>
                <div data-testid="content">Content</div>
            </Template>
        );

        const wrapper = container.querySelector('.animate-fade-in');
        expect(wrapper).toBeInTheDocument();
    });

    it('should render children container', () => {
        const { container } = render(
            <Template>
                <div data-testid="content">Content</div>
            </Template>
        );

        const divs = container.querySelectorAll('div');
        expect(divs.length).toBeGreaterThan(0);
        expect(screen.getByTestId('content')).toBeInTheDocument();
    });
});
