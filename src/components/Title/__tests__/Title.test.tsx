import { render, screen } from '@testing-library/react';
import { Title } from '../index';

describe('Title Component', () => {
    it('should render the text passed as prop', () => {
        render(<Title text="My Title" />);
        const heading = screen.getByRole('heading', { name: 'My Title' });
        expect(heading).toBeInTheDocument();
    });

    it('should render as h2 element', () => {
        render(<Title text="Test" />);
        const heading = screen.getByRole('heading', { level: 2 });
        expect(heading).toBeInTheDocument();
    });

    it('should apply the correct CSS classes', () => {
        render(<Title text="Styled Title" />);
        const heading = screen.getByRole('heading');
        expect(heading).toHaveClass('font-bold');
        expect(heading).toHaveClass('mb-4');
    });

    it('should render even with empty text', () => {
        render(<Title text="" />);
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('');
    });

    it('should render special characters correctly', () => {
        const specialText = 'Title with <>&"\'';
        render(<Title text={specialText} />);
        expect(screen.getByText(specialText)).toBeInTheDocument();
    });
});
