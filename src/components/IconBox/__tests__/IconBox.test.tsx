import { render, screen } from '@testing-library/react';
import { IconBox } from '../index';
import type { Icon } from '@phosphor-icons/react';

const MockIcon = (({ size, className }: { size?: number; className?: string }) => (
    <svg data-testid="mock-icon" data-size={size} className={className} />
)) as unknown as Icon;

describe('IconBox Component', () => {
    it('should render the icon', () => {
        render(<IconBox icon={MockIcon} />);
        expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
    });

    it('should apply default background and icon colors', () => {
        const { container } = render(<IconBox icon={MockIcon} />);
        const box = container.firstChild as HTMLElement;
        expect(box).toHaveClass('bg-gray-200');
        expect(screen.getByTestId('mock-icon')).toHaveClass('text-blue-500');
    });

    it('should apply custom background color', () => {
        const { container } = render(<IconBox icon={MockIcon} bgColor="bg-red-500" />);
        const box = container.firstChild as HTMLElement;
        expect(box).toHaveClass('bg-red-500');
    });

    it('should apply custom icon color', () => {
        render(<IconBox icon={MockIcon} iconColor="text-green-500" />);
        expect(screen.getByTestId('mock-icon')).toHaveClass('text-green-500');
    });

    it('should use default size of 20', () => {
        render(<IconBox icon={MockIcon} />);
        expect(screen.getByTestId('mock-icon')).toHaveAttribute('data-size', '20');
    });

    it('should apply custom size', () => {
        render(<IconBox icon={MockIcon} size={32} />);
        expect(screen.getByTestId('mock-icon')).toHaveAttribute('data-size', '32');
    });

    it('should render as a link when href is provided', () => {
        render(<IconBox icon={MockIcon} href="https://example.com" />);
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', 'https://example.com');
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('should render as a div when no href is provided', () => {
        const { container } = render(<IconBox icon={MockIcon} />);
        expect(container.querySelector('a')).not.toBeInTheDocument();
        expect(container.querySelector('div')).toBeInTheDocument();
    });

    it('should apply additional className', () => {
        const { container } = render(<IconBox icon={MockIcon} className="custom-class" />);
        const box = container.querySelector('.custom-class');
        expect(box).toBeInTheDocument();
    });
});
