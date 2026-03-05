import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../index';
import { GithubLogoIcon } from '@phosphor-icons/react';

describe('Button Component', () => {
    describe('Rendering', () => {
        it('should render button with text', () => {
            render(<Button text="Click Me" />);
            expect(screen.getByText('Click Me')).toBeInTheDocument();
        });

        it('should render as button element when no href', () => {
            render(<Button text="Submit" />);
            const button = screen.getByRole('button');
            expect(button.tagName).toBe('BUTTON');
        });

        it('should render as anchor element when href provided', () => {
            render(<Button text="Link" href="https://example.com" />);
            const link = screen.getByRole('link');
            expect(link.tagName).toBe('A');
        });

        it('should render with icon', () => {
            const { container } = render(<Button text="GitHub" icon={GithubLogoIcon} />);
            expect(container.querySelector('svg')).toBeInTheDocument();
        });

        it('should render without icon when not provided', () => {
            const { container } = render(<Button text="No Icon" />);
            expect(container.querySelector('svg')).not.toBeInTheDocument();
        });
    });

    describe('Button Behavior', () => {
        it('should call onClick when clicked', () => {
            const handleClick = jest.fn();
            render(<Button text="Click" onClick={handleClick} />);
            fireEvent.click(screen.getByRole('button'));
            expect(handleClick).toHaveBeenCalledTimes(1);
        });

        it('should have type="button" when rendered as button', () => {
            render(<Button text="Submit" />);
            expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
        });

        it('should not have type attribute when rendered as link', () => {
            render(<Button text="Link" href="https://example.com" />);
            expect(screen.getByRole('link')).not.toHaveAttribute('type');
        });
    });

    describe('Link Behavior', () => {
        it('should have correct href', () => {
            render(<Button text="Link" href="https://example.com" />);
            expect(screen.getByRole('link')).toHaveAttribute('href', 'https://example.com');
        });

        it('should have target attribute when provided', () => {
            render(<Button text="Link" href="https://example.com" target="_blank" />);
            expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
        });

        it('should have rel attribute when provided', () => {
            render(<Button text="Link" href="https://example.com" rel="noopener noreferrer" />);
            expect(screen.getByRole('link')).toHaveAttribute('rel', 'noopener noreferrer');
        });

        it('should not have target when not provided', () => {
            render(<Button text="Link" href="https://example.com" />);
            expect(screen.getByRole('link')).not.toHaveAttribute('target');
        });
    });

    describe('Styling', () => {
        it('should apply default classes', () => {
            render(<Button text="Button" />);
            const button = screen.getByRole('button');
            expect(button).toHaveClass('inline-flex', 'items-center', 'gap-2');
        });

        it('should apply custom className', () => {
            render(<Button text="Button" className="custom-class" />);
            expect(screen.getByRole('button')).toHaveClass('custom-class');
        });

        it('should merge custom className with default classes', () => {
            render(<Button text="Button" className="custom-class" />);
            const button = screen.getByRole('button');
            expect(button).toHaveClass('custom-class', 'inline-flex', 'items-center');
        });
    });

    describe('Accessibility', () => {
        it('should be keyboard accessible as button', () => {
            const handleClick = jest.fn();
            render(<Button text="Click" onClick={handleClick} />);
            const button = screen.getByRole('button');
            button.focus();
            expect(button).toHaveFocus();
        });

        it('should be keyboard accessible as link', () => {
            render(<Button text="Link" href="https://example.com" />);
            const link = screen.getByRole('link');
            link.focus();
            expect(link).toHaveFocus();
        });
    });
});
