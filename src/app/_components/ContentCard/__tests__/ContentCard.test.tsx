import { render, screen } from '@testing-library/react';
import { ContentCard } from '../index';

const MockIcon = (() => <div>Icon</div>) as any;

describe('ContentCard Component', () => {
    it('should render the card', () => {
        const { container } = render(
            <ContentCard icon={MockIcon} title="Test Title" description="Test Description" />
        );
        expect(container.querySelector('.rounded-lg')).toBeInTheDocument();
    });

    it('should render the title', () => {
        render(<ContentCard icon={MockIcon} title="Test Title" description="Test Description" />);
        expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('should render the description', () => {
        render(<ContentCard icon={MockIcon} title="Test Title" description="Test Description" />);
        expect(screen.getByText('Test Description')).toBeInTheDocument();
    });

    it('should have correct structure', () => {
        const { container } = render(
            <ContentCard icon={MockIcon} title="Test Title" description="Test Description" />
        );
        const card = container.firstChild as HTMLElement;
        expect(card).toHaveClass('flex', 'flex-col');
    });
});
