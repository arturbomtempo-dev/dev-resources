import { render } from '@testing-library/react';
import { Toaster } from '../sonner';

jest.mock('sonner', () => ({
    Toaster: ({ closeButton, richColors, ...props }: any) => (
        <div
            data-testid="sonner-toaster"
            data-close-button={closeButton?.toString()}
            data-rich-colors={richColors?.toString()}
            {...props}
        />
    ),
}));

describe('Toaster Component', () => {
    it('should render Toaster component', () => {
        const { getByTestId } = render(<Toaster />);
        expect(getByTestId('sonner-toaster')).toBeInTheDocument();
    });

    it('should pass closeButton prop', () => {
        const { getByTestId } = render(<Toaster />);
        const toaster = getByTestId('sonner-toaster');
        expect(toaster).toHaveAttribute('data-close-button', 'true');
    });

    it('should pass richColors prop', () => {
        const { getByTestId } = render(<Toaster />);
        const toaster = getByTestId('sonner-toaster');
        expect(toaster).toHaveAttribute('data-rich-colors', 'true');
    });

    it('should forward additional props', () => {
        const { getByTestId } = render(<Toaster position="top-right" />);
        const toaster = getByTestId('sonner-toaster');
        expect(toaster).toHaveAttribute('position', 'top-right');
    });

    it('should handle duration prop', () => {
        const { getByTestId } = render(<Toaster duration={5000} />);
        const toaster = getByTestId('sonner-toaster');
        expect(toaster).toHaveAttribute('duration', '5000');
    });
});
