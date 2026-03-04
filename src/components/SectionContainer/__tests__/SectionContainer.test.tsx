import { render, screen } from '@testing-library/react';
import { SectionContainer } from '../index';

describe('SectionContainer Component', () => {
    it('should render children', () => {
        render(
            <SectionContainer>
                <div>Test Content</div>
            </SectionContainer>
        );
        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('should render as a section element', () => {
        const { container } = render(
            <SectionContainer>
                <div>Content</div>
            </SectionContainer>
        );
        expect(container.querySelector('section')).toBeInTheDocument();
    });

    it('should have correct CSS classes', () => {
        const { container } = render(
            <SectionContainer>
                <div>Content</div>
            </SectionContainer>
        );
        const section = container.querySelector('section');
        expect(section).toHaveClass('mx-auto', 'max-w-7xl', 'px-6');
    });

    it('should render multiple children', () => {
        render(
            <SectionContainer>
                <div>First</div>
                <div>Second</div>
            </SectionContainer>
        );
        expect(screen.getByText('First')).toBeInTheDocument();
        expect(screen.getByText('Second')).toBeInTheDocument();
    });
});
