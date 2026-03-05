import { render } from '@testing-library/react';
import LoadingPage from '../loading';

jest.mock('@/components/Loading', () => ({
    __esModule: true,
    default: () => <div data-testid="loading-component">Loading</div>,
}));

describe('Loading Page', () => {
    it('should render the loading component', () => {
        const { getByTestId } = render(<LoadingPage />);
        expect(getByTestId('loading-component')).toBeInTheDocument();
    });

    it('should render without errors', () => {
        expect(() => render(<LoadingPage />)).not.toThrow();
    });
});
