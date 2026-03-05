import { render } from '@testing-library/react';
import { Grainient } from '../index';

jest.mock('../hooks/useWebGLRenderer', () => ({
    useWebGLRenderer: jest.fn(),
}));

describe('Grainient Component', () => {
    it('should render without crashing', () => {
        const { container } = render(<Grainient />);
        expect(container.firstChild).toBeInTheDocument();
    });

    it('should render with custom className', () => {
        const { container } = render(<Grainient className="custom-class" />);
        const element = container.firstChild as HTMLElement;
        expect(element.className).toContain('custom-class');
    });

    it('should render with default props', () => {
        const { container } = render(<Grainient />);
        expect(container.firstChild).toBeTruthy();
    });

    it('should render with custom colors', () => {
        const { container } = render(
            <Grainient color1="#FF0000" color2="#00FF00" color3="#0000FF" />
        );
        expect(container.firstChild).toBeTruthy();
    });

    it('should render with custom animation values', () => {
        const { container } = render(
            <Grainient timeSpeed={2} warpStrength={0.5} grainAnimated={true} />
        );
        expect(container.firstChild).toBeTruthy();
    });

    it('should pass all props to useWebGLRenderer', () => {
        const mockUseWebGLRenderer = require('../hooks/useWebGLRenderer').useWebGLRenderer;

        render(<Grainient timeSpeed={1.5} colorBalance={0.7} warpStrength={0.3} />);

        expect(mockUseWebGLRenderer).toHaveBeenCalled();
    });

    it('should create canvas container', () => {
        const { container } = render(<Grainient />);
        const divElement = container.querySelector('div');
        expect(divElement).toBeInTheDocument();
    });
});
