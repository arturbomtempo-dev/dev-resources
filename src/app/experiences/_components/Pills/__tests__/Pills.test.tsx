import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Pills } from '../index';

describe('Pills Component (Experiences)', () => {
    it('should render the text', () => {
        render(<Pills text="Test Pill" />);
        expect(screen.getByText('Test Pill')).toBeInTheDocument();
    });

    it('should render as span when no onClick is provided', () => {
        const { container } = render(<Pills text="Test" />);
        expect(container.querySelector('span')).toBeInTheDocument();
    });

    it('should render as button when onClick is provided', () => {
        const handleClick = jest.fn();
        render(<Pills text="Test" onClick={handleClick} />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should call onClick when clicked', async () => {
        const user = userEvent.setup({ delay: null });
        const handleClick = jest.fn();
        render(<Pills text="Test" onClick={handleClick} />);
        await user.click(screen.getByRole('button'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should apply active styling when isActive is true', () => {
        const { container } = render(<Pills text="Test" isActive />);
        const element = container.firstChild as HTMLElement;
        expect(element).toHaveClass('from-teal-600');
    });

    it('should apply inactive styling when isActive is false', () => {
        const { container } = render(<Pills text="Test" isActive={false} />);
        const element = container.firstChild as HTMLElement;
        expect(element).toHaveClass('bg-gray-200');
    });

    it('should apply custom className', () => {
        const { container } = render(<Pills text="Test" className="custom-class" />);
        const element = container.firstChild as HTMLElement;
        expect(element).toHaveClass('custom-class');
    });

    it('should have aria-pressed attribute when it is a button', () => {
        const handleClick = jest.fn();
        render(<Pills text="Test" onClick={handleClick} isActive />);
        const button = screen.getByRole('button');
        expect(button).toHaveAttribute('aria-pressed', 'true');
    });
});
