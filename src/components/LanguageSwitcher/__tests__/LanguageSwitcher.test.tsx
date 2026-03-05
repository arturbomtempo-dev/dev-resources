import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LanguageSwitcher } from '../index';

const mockSetLocale = jest.fn();

jest.mock('@/lib/i18n/I18nProvider', () => ({
    useI18n: () => ({
        locale: 'en',
        setLocale: mockSetLocale,
    }),
}));

jest.mock('@phosphor-icons/react', () => ({
    TranslateIcon: ({ size, weight }: { size?: number; weight?: string }) => (
        <div data-testid="translate-icon">
            Translate {size} {weight}
        </div>
    ),
}));

jest.mock('@/config/i18n', () => ({
    localeNames: {
        en: 'English',
        pt: 'Português',
    },
}));

describe('LanguageSwitcher Component', () => {
    beforeEach(() => {
        mockSetLocale.mockClear();
    });

    it('should render the language switcher button', () => {
        render(<LanguageSwitcher />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should display current locale', () => {
        render(<LanguageSwitcher />);
        expect(screen.getByText('en')).toBeInTheDocument();
    });

    it('should render translate icon', () => {
        render(<LanguageSwitcher />);
        expect(screen.getByTestId('translate-icon')).toBeInTheDocument();
    });

    it('should call setLocale when clicked', async () => {
        const user = userEvent.setup({ delay: null });
        render(<LanguageSwitcher />);
        const button = screen.getByRole('button');
        await user.click(button);
        expect(mockSetLocale).toHaveBeenCalledWith('pt');
    });

    it('should have accessible aria-label', () => {
        render(<LanguageSwitcher />);
        const button = screen.getByRole('button');
        expect(button).toHaveAttribute('aria-label');
    });

    it('should apply default styling', () => {
        render(<LanguageSwitcher />);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('border-neutral-200');
    });

    it('should apply transparent styling when specified', () => {
        render(<LanguageSwitcher isTransparent />);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('backdrop-blur-sm');
    });
});
