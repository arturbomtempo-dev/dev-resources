import { render, screen } from '@testing-library/react';
import { Logo } from '../index';

jest.mock('@phosphor-icons/react', () => ({
    CodeIcon: ({ className }: { className?: string }) => (
        <div data-testid="code-icon" className={className} />
    ),
}));

describe('Logo Component', () => {
    it('should render the logo text', () => {
        render(<Logo />);
        expect(screen.getByText(/Dev/i)).toBeInTheDocument();
        expect(screen.getByText(/Resources/i)).toBeInTheDocument();
    });

    it('should render the code icon', () => {
        render(<Logo />);
        expect(screen.getByTestId('code-icon')).toBeInTheDocument();
    });

    it('should use large size by default', () => {
        const { container } = render(<Logo />);
        const wrapper = container.firstChild as HTMLElement;
        expect(wrapper).toHaveClass('text-2xl');
    });

    it('should apply small size when specified', () => {
        const { container } = render(<Logo size="small" />);
        const wrapper = container.firstChild as HTMLElement;
        expect(wrapper).toHaveClass('text-base');
    });

    it('should apply large size when specified', () => {
        const { container } = render(<Logo size="large" />);
        const wrapper = container.firstChild as HTMLElement;
        expect(wrapper).toHaveClass('text-2xl');
    });

    it('should use default variant by default', () => {
        const { container } = render(<Logo />);
        const wrapper = container.firstChild as HTMLElement;
        expect(wrapper).toHaveClass('text-black');
    });

    it('should apply light variant when specified', () => {
        const { container } = render(<Logo variant="light" />);
        const wrapper = container.firstChild as HTMLElement;
        expect(wrapper).toHaveClass('text-white');
    });

    it('should render heading element', () => {
        render(<Logo />);
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
    });
});
