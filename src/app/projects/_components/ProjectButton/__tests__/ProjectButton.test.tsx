import { render, screen } from '@testing-library/react';
import { ProjectButton } from '../index';

describe('ProjectButton Component', () => {
    it('should render children', () => {
        render(<ProjectButton>Click Me</ProjectButton>);
        expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

    it('should render as a button when no href is provided', () => {
        render(<ProjectButton>Button</ProjectButton>);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should render as a link when href is provided', () => {
        render(<ProjectButton href="https://example.com">Link</ProjectButton>);
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', 'https://example.com');
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('should apply outline variant by default', () => {
        const { container } = render(<ProjectButton>Button</ProjectButton>);
        const button = container.querySelector('button');
        expect(button).toHaveClass('border', 'border-neutral-200');
    });

    it('should apply gradient variant', () => {
        const { container } = render(<ProjectButton variant="gradient">Button</ProjectButton>);
        const button = container.querySelector('button');
        expect(button).toHaveClass('bg-gradient-to-r');
    });

    it('should render icon when provided', () => {
        render(<ProjectButton icon={<span data-testid="icon">Icon</span>}>Button</ProjectButton>);
        expect(screen.getByTestId('icon')).toBeInTheDocument();
    });
});
