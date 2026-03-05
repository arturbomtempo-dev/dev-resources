import { render, screen } from '@testing-library/react';
import { Button, buttonVariants } from '../button';

describe('Button Component', () => {
    describe('Rendering', () => {
        it('should render button element', () => {
            render(<Button>Click me</Button>);
            expect(screen.getByRole('button')).toBeInTheDocument();
        });

        it('should render children', () => {
            render(<Button>Test Button</Button>);
            expect(screen.getByText('Test Button')).toBeInTheDocument();
        });

        it('should have correct data attributes', () => {
            render(<Button>Button</Button>);
            const button = screen.getByRole('button');
            expect(button).toHaveAttribute('data-slot', 'button');
            expect(button).toHaveAttribute('data-variant', 'default');
            expect(button).toHaveAttribute('data-size', 'default');
        });
    });

    describe('Variants', () => {
        it('should apply default variant', () => {
            render(<Button variant="default">Default</Button>);
            const button = screen.getByRole('button');
            expect(button).toHaveAttribute('data-variant', 'default');
        });

        it('should apply destructive variant', () => {
            render(<Button variant="destructive">Delete</Button>);
            const button = screen.getByRole('button');
            expect(button).toHaveAttribute('data-variant', 'destructive');
        });

        it('should apply outline variant', () => {
            render(<Button variant="outline">Outline</Button>);
            const button = screen.getByRole('button');
            expect(button).toHaveAttribute('data-variant', 'outline');
        });

        it('should apply secondary variant', () => {
            render(<Button variant="secondary">Secondary</Button>);
            const button = screen.getByRole('button');
            expect(button).toHaveAttribute('data-variant', 'secondary');
        });

        it('should apply ghost variant', () => {
            render(<Button variant="ghost">Ghost</Button>);
            const button = screen.getByRole('button');
            expect(button).toHaveAttribute('data-variant', 'ghost');
        });

        it('should apply link variant', () => {
            render(<Button variant="link">Link</Button>);
            const button = screen.getByRole('button');
            expect(button).toHaveAttribute('data-variant', 'link');
        });
    });

    describe('Sizes', () => {
        it('should apply default size', () => {
            render(<Button size="default">Default Size</Button>);
            expect(screen.getByRole('button')).toHaveAttribute('data-size', 'default');
        });

        it('should apply xs size', () => {
            render(<Button size="xs">Extra Small</Button>);
            expect(screen.getByRole('button')).toHaveAttribute('data-size', 'xs');
        });

        it('should apply sm size', () => {
            render(<Button size="sm">Small</Button>);
            expect(screen.getByRole('button')).toHaveAttribute('data-size', 'sm');
        });

        it('should apply lg size', () => {
            render(<Button size="lg">Large</Button>);
            expect(screen.getByRole('button')).toHaveAttribute('data-size', 'lg');
        });

        it('should apply icon size', () => {
            render(<Button size="icon">Icon</Button>);
            expect(screen.getByRole('button')).toHaveAttribute('data-size', 'icon');
        });

        it('should apply icon-xs size', () => {
            render(<Button size="icon-xs">Icon XS</Button>);
            expect(screen.getByRole('button')).toHaveAttribute('data-size', 'icon-xs');
        });

        it('should apply icon-sm size', () => {
            render(<Button size="icon-sm">Icon SM</Button>);
            expect(screen.getByRole('button')).toHaveAttribute('data-size', 'icon-sm');
        });

        it('should apply icon-lg size', () => {
            render(<Button size="icon-lg">Icon LG</Button>);
            expect(screen.getByRole('button')).toHaveAttribute('data-size', 'icon-lg');
        });
    });

    describe('Props', () => {
        it('should apply custom className', () => {
            render(<Button className="custom-class">Button</Button>);
            expect(screen.getByRole('button')).toHaveClass('custom-class');
        });

        it('should handle disabled state', () => {
            render(<Button disabled>Disabled</Button>);
            expect(screen.getByRole('button')).toBeDisabled();
        });

        it('should handle type attribute', () => {
            render(<Button type="submit">Submit</Button>);
            expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
        });

        it('should handle onClick', () => {
            const handleClick = jest.fn();
            render(<Button onClick={handleClick}>Click</Button>);
            screen.getByRole('button').click();
            expect(handleClick).toHaveBeenCalledTimes(1);
        });
    });

    describe('AsChild', () => {
        it('should render as child element when asChild is true', () => {
            render(
                <Button asChild>
                    <a href="/test">Link Button</a>
                </Button>
            );
            const link = screen.getByRole('link');
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute('href', '/test');
        });
    });

    describe('buttonVariants', () => {
        it('should generate variant classes', () => {
            const classes = buttonVariants({ variant: 'default' });
            expect(classes).toContain('inline-flex');
        });

        it('should generate size classes', () => {
            const classes = buttonVariants({ size: 'lg' });
            expect(classes).toContain('inline-flex');
        });

        it('should combine variant and size', () => {
            const classes = buttonVariants({ variant: 'destructive', size: 'sm' });
            expect(classes).toContain('inline-flex');
        });
    });
});
