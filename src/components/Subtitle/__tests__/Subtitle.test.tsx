import { render, screen } from '@testing-library/react';
import { Subtitle } from '../index';

describe('Subtitle Component', () => {
    it('should render the text', () => {
        render(<Subtitle text="Test subtitle" />);
        expect(screen.getByText('Test subtitle')).toBeInTheDocument();
    });

    it('should render as a paragraph element', () => {
        render(<Subtitle text="Test" />);
        const element = screen.getByText('Test');
        expect(element.tagName).toBe('P');
    });

    it('should apply the correct CSS classes', () => {
        render(<Subtitle text="Test" />);
        const element = screen.getByText('Test');
        expect(element).toHaveClass('text-subheading');
    });

    it('should render with empty text', () => {
        render(<Subtitle text="" />);
        const paragraph = document.querySelector('p');
        expect(paragraph).toBeInTheDocument();
    });

    it('should render special characters correctly', () => {
        render(<Subtitle text="Test & special chars!" />);
        expect(screen.getByText('Test & special chars!')).toBeInTheDocument();
    });
});
