import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeSwitcher } from '../index';

const mockToggleTheme = jest.fn();

jest.mock('@/lib/theme/ThemeProvider', () => ({
    useTheme: () => ({
        theme: 'light',
        toggleTheme: mockToggleTheme,
    }),
}));

jest.mock('@phosphor-icons/react', () => ({
    SunIcon: ({ size, weight }: { size?: number; weight?: string }) => (
        <div data-testid="sun-icon">
            Sun {size} {weight}
        </div>
    ),
    MoonIcon: ({ size, weight }: { size?: number; weight?: string }) => (
        <div data-testid="moon-icon">
            Moon {size} {weight}
        </div>
    ),
}));

describe('ThemeSwitcher Component', () => {
    beforeEach(() => {
        mockToggleTheme.mockClear();
    });

    it('should render the theme switcher button', () => {
        render(<ThemeSwitcher />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should render sun icon when theme is light', () => {
        render(<ThemeSwitcher />);
        expect(screen.getByTestId('sun-icon')).toBeInTheDocument();
    });

    it('should call toggleTheme when clicked', async () => {
        const user = userEvent.setup({ delay: null });
        render(<ThemeSwitcher />);
        const button = screen.getByRole('button');
        await user.click(button);
        expect(mockToggleTheme).toHaveBeenCalledTimes(1);
    });

    it('should have accessible aria-label', () => {
        render(<ThemeSwitcher />);
        const button = screen.getByRole('button');
        expect(button).toHaveAttribute('aria-label');
    });

    it('should apply default styling', () => {
        render(<ThemeSwitcher />);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('border-neutral-200');
    });

    it('should apply transparent styling when specified', () => {
        render(<ThemeSwitcher isTransparent />);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('backdrop-blur-sm');
    });
});
