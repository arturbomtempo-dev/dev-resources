import { render, screen } from '@testing-library/react';
import { GuestbookCard } from '../index';

const mockLocale = { current: 'en' };

jest.mock('@/lib/i18n/I18nProvider', () => ({
    useI18n: () => ({
        t: {},
        locale: mockLocale.current,
    }),
}));

describe('GuestbookCard Component', () => {
    const mockEntry = {
        id: '123',
        name: 'John Smith',
        message: 'This is a great project!',
        created_at: '2024-03-15T14:30:00Z',
    };

    describe('Rendering', () => {
        it('should render the author name', () => {
            render(<GuestbookCard entry={mockEntry} />);
            expect(screen.getByText('John Smith')).toBeInTheDocument();
        });

        it('should render the message', () => {
            render(<GuestbookCard entry={mockEntry} />);
            expect(screen.getByText('This is a great project!')).toBeInTheDocument();
        });
    });

    describe('Avatar with Initials', () => {
        it('should show initials of full name (JS for John Smith)', () => {
            render(<GuestbookCard entry={mockEntry} />);
            expect(screen.getByText('JS')).toBeInTheDocument();
        });

        it('should show only first letter for single name', () => {
            const singleNameEntry = { ...mockEntry, name: 'Mary' };
            render(<GuestbookCard entry={singleNameEntry} />);
            expect(screen.getByText('M')).toBeInTheDocument();
        });

        it('should handle names with multiple words (use first and last)', () => {
            const multiNameEntry = { ...mockEntry, name: 'Mary Jane da Silva' };
            render(<GuestbookCard entry={multiNameEntry} />);
            expect(screen.getByText('MS')).toBeInTheDocument();
        });

        it('should show "?" for empty name', () => {
            const emptyNameEntry = { ...mockEntry, name: '' };
            render(<GuestbookCard entry={emptyNameEntry} />);
            expect(screen.getByText('?')).toBeInTheDocument();
        });

        it('should show initials in uppercase', () => {
            const lowerCaseEntry = { ...mockEntry, name: 'mary smith' };
            render(<GuestbookCard entry={lowerCaseEntry} />);
            expect(screen.getByText('MS')).toBeInTheDocument();
        });
    });

    describe('Date Formatting', () => {
        it('should display a formatted date', () => {
            render(<GuestbookCard entry={mockEntry} />);
            const dateElements = screen.getByText(/\d{2}\/\d{2}\/\d{4}/);
            expect(dateElements).toBeInTheDocument();
        });
    });

    describe('Structure', () => {
        it('should have the correct element structure', () => {
            const { container } = render(<GuestbookCard entry={mockEntry} />);
            const card = container.firstChild as HTMLElement;
            expect(card).toHaveClass('rounded-xl');
        });
    });

    describe('Special Messages', () => {
        it('should render long messages correctly', () => {
            const longMessage = 'A'.repeat(500);
            const longMessageEntry = { ...mockEntry, message: longMessage };
            render(<GuestbookCard entry={longMessageEntry} />);
            expect(screen.getByText(longMessage)).toBeInTheDocument();
        });

        it('should render special characters in message', () => {
            const specialMessageEntry = {
                ...mockEntry,
                message: 'Hello! <script>alert("xss")</script> & "test"',
            };
            render(<GuestbookCard entry={specialMessageEntry} />);
            expect(
                screen.getByText('Hello! <script>alert("xss")</script> & "test"')
            ).toBeInTheDocument();
        });

        it('should render emojis correctly', () => {
            const emojiEntry = {
                ...mockEntry,
                message: 'Amazing project!',
            };
            render(<GuestbookCard entry={emojiEntry} />);
            expect(screen.getByText(/Amazing project!/)).toBeInTheDocument();
        });
    });
});