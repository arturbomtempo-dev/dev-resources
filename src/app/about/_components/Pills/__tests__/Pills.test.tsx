import { render, screen } from '@testing-library/react';
import { Pills } from '../index';

describe('Pills Component (About)', () => {
    it('should render the text', () => {
        render(<Pills text="Test Pill" />);
        expect(screen.getByText('Test Pill')).toBeInTheDocument();
    });

    it('should have default variant', () => {
        const { container } = render(<Pills text="Test" />);
        const pill = container.firstChild as HTMLElement;
        expect(pill).toHaveClass('bg-pink-100');
    });

    it('should apply interest variant', () => {
        const { container } = render(<Pills text="Test" variant="interest" />);
        const pill = container.firstChild as HTMLElement;
        expect(pill).toHaveClass('text-pink-500');
    });

    it('should apply interestEduarda variant', () => {
        const { container } = render(<Pills text="Test" variant="interestEduarda" />);
        const pill = container.firstChild as HTMLElement;
        expect(pill).toHaveClass('bg-pink-100');
    });

    it('should apply interestArtur variant', () => {
        const { container } = render(<Pills text="Test" variant="interestArtur" />);
        const pill = container.firstChild as HTMLElement;
        expect(pill).toHaveClass('bg-green-bg');
    });

    it('should apply technology variant', () => {
        const { container } = render(<Pills text="Test" variant="technology" />);
        const pill = container.firstChild as HTMLElement;
        expect(pill).toHaveClass('border', 'border-gray-200');
    });

    it('should apply custom className', () => {
        const { container } = render(<Pills text="Test" className="custom-class" />);
        const pill = container.firstChild as HTMLElement;
        expect(pill).toHaveClass('custom-class');
    });
});
