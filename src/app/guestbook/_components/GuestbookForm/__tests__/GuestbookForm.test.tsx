import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GuestbookForm } from '../index';

jest.mock('@/lib/i18n/I18nProvider', () => ({
    useI18n: () => ({
        t: {
            guestbook: {
                form: {
                    name: { 
                        label: 'Name',
                        placeholder: 'Your name' 
                    },
                    message: { 
                        label: 'Message',
                        placeholder: 'Your message' 
                    },
                    submit: 'Send',
                    submitting: 'Sending...',
                },
            },
        },
    }),
}));

describe('GuestbookForm Component', () => {
    const setup = (isSubmitting = false) => {
        const mockOnSubmit = jest.fn();
        const user = userEvent.setup({ delay: null });
        render(<GuestbookForm onSubmit={mockOnSubmit} isSubmitting={isSubmitting} />);
        return { mockOnSubmit, user };
    };

    describe('Rendering', () => {
        it('should render the form with all fields', () => {
            setup();
            expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument();
            expect(screen.getByRole('textbox', { name: /message/i })).toBeInTheDocument();
            expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
        });

        it('should show correct labels and placeholders', () => {
            setup();
            expect(screen.getByText('Name')).toBeInTheDocument();
            expect(screen.getByText('Message')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Your message')).toBeInTheDocument();
        });
    });

    describe('Interactions', () => {
        it('should update name field when user types', async () => {
            const { user } = setup();
            const nameInput = screen.getByRole('textbox', { name: /name/i });
            await user.type(nameInput, 'John Smith');
            expect(nameInput).toHaveValue('John Smith');
        });

        it('should update message field when user types', async () => {
            const { user } = setup();
            const messageInput = screen.getByRole('textbox', { name: /message/i });
            await user.type(messageInput, 'Great project!');
            expect(messageInput).toHaveValue('Great project!');
        });
    });

    describe('Submission', () => {
        it('should call onSubmit with correct values when submitting', async () => {
            const { mockOnSubmit, user } = setup();
            mockOnSubmit.mockResolvedValue(true);

            const nameInput = screen.getByRole('textbox', { name: /name/i });
            const messageInput = screen.getByRole('textbox', { name: /message/i });
            const submitButton = screen.getByRole('button', { name: /send/i });

            await user.click(nameInput);
            await user.type(nameInput, 'Mary');
            await user.click(messageInput);
            await user.type(messageInput, 'Love it!');
            await user.click(submitButton);

            await waitFor(() => {
                expect(mockOnSubmit).toHaveBeenCalledWith('Mary', 'Love it!');
            });
        });

        it('should clear fields after successful submission', async () => {
            const { mockOnSubmit, user } = setup();
            mockOnSubmit.mockResolvedValue(true);

            const nameInput = screen.getByRole('textbox', { name: /name/i });
            const messageInput = screen.getByRole('textbox', { name: /message/i });
            const submitButton = screen.getByRole('button', { name: /send/i });

            await user.click(nameInput);
            await user.type(nameInput, 'Mary');
            await user.click(messageInput);
            await user.type(messageInput, 'Love it!');
            await user.click(submitButton);

            await waitFor(() => {
                expect(nameInput).toHaveValue('');
                expect(messageInput).toHaveValue('');
            });
        });

        it('should NOT clear fields if submission fails', async () => {
            const { mockOnSubmit, user } = setup();
            mockOnSubmit.mockResolvedValue(false);

            const nameInput = screen.getByRole('textbox', { name: /name/i });
            const messageInput = screen.getByRole('textbox', { name: /message/i });
            const submitButton = screen.getByRole('button', { name: /send/i });

            await user.click(nameInput);
            await user.type(nameInput, 'Mary');
            await user.click(messageInput);
            await user.type(messageInput, 'Love it!');
            await user.click(submitButton);

            await waitFor(() => {
                expect(mockOnSubmit).toHaveBeenCalled();
            });

            expect(nameInput).toHaveValue('Mary');
            expect(messageInput).toHaveValue('Love it!');
        });

        it('should trim values before submitting', async () => {
            const { mockOnSubmit, user } = setup();
            mockOnSubmit.mockResolvedValue(true);

            const nameInput = screen.getByRole('textbox', { name: /name/i });
            const messageInput = screen.getByRole('textbox', { name: /message/i });
            const submitButton = screen.getByRole('button', { name: /send/i });

            await user.click(nameInput);
            await user.type(nameInput, '  Mary  ');
            await user.click(messageInput);
            await user.type(messageInput, '  Love it!  ');
            await user.click(submitButton);

            await waitFor(() => {
                expect(mockOnSubmit).toHaveBeenCalledWith('Mary', 'Love it!');
            });
        });
    });

    describe('Loading State (isSubmitting)', () => {
        it('should show "Sending..." when isSubmitting is true', () => {
            setup(true);
            expect(screen.getByRole('button')).toHaveTextContent('Sending...');
        });

        it('should disable fields when isSubmitting is true', () => {
            setup(true);
            expect(screen.getByRole('textbox', { name: /name/i })).toBeDisabled();
            expect(screen.getByRole('textbox', { name: /message/i })).toBeDisabled();
            expect(screen.getByRole('button')).toBeDisabled();
        });

        it('should enable fields when isSubmitting is false', () => {
            setup(false);
            expect(screen.getByRole('textbox', { name: /name/i })).not.toBeDisabled();
            expect(screen.getByRole('textbox', { name: /message/i })).not.toBeDisabled();
            expect(screen.getByRole('button')).not.toBeDisabled();
        });
    });

    describe('Accessibility', () => {
        it('should have labels correctly associated with inputs', () => {
            setup();
            const nameInput = screen.getByRole('textbox', { name: /name/i });
            const messageInput = screen.getByRole('textbox', { name: /message/i });
            
            expect(nameInput).toHaveAttribute('id', 'guestbook-name');
            expect(messageInput).toHaveAttribute('id', 'guestbook-message');
        });
    });
});