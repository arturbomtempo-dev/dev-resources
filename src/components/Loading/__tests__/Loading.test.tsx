import { render, screen } from '@testing-library/react';
import Loading from '../index';

describe('Loading Component', () => {
    it('should render the loading spinner', () => {
        const { container } = render(<Loading />);
        const spinner = container.querySelector('.animate-spin');
        expect(spinner).toBeInTheDocument();
    });

    it('should have correct CSS classes for layout', () => {
        const { container } = render(<Loading />);
        const wrapper = container.querySelector('.fixed');
        expect(wrapper).toHaveClass('fixed', 'inset-0', 'z-50', 'flex');
    });

    it('should have spinner with animation classes', () => {
        const { container } = render(<Loading />);
        const spinner = container.querySelector('.animate-spin');
        expect(spinner).toBeInTheDocument();
        expect(spinner).toHaveClass('rounded-full', 'border-4', 'border-teal-400');
    });

    it('should be centered on screen', () => {
        const { container } = render(<Loading />);
        const wrapper = container.firstChild as HTMLElement;
        expect(wrapper).toHaveClass('items-center', 'justify-center');
    });
});
