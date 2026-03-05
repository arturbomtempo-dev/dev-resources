import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from '../page';

const mockToastError = jest.fn();
const mockToastSuccess = jest.fn();

jest.mock('sonner', () => ({
    toast: {
        error: (...args: any[]) => mockToastError(...args),
        success: (...args: any[]) => mockToastSuccess(...args),
    },
}));

jest.mock('@/lib/i18n/I18nProvider', () => ({
    useI18n: () => ({
        t: {
            contact: {
                title: 'Contact Us',
                subtitle: 'Get in touch',
                form: {
                    name: { label: 'Name', placeholder: 'Your name' },
                    email: { label: 'Email', placeholder: 'your@email.com' },
                    subject: { label: 'Subject', placeholder: 'Subject' },
                    message: { label: 'Message', placeholder: 'Your message' },
                    submit: 'Send',
                },
                socialButtons: {
                    linkedin: 'LinkedIn',
                    email: 'Email',
                    github: 'GitHub',
                },
                toast: {
                    fillAllFields: 'Please fill all fields',
                    invalidEmail: 'Invalid email',
                    success: 'Message sent',
                    error: 'Error sending message',
                    confirmationWarning: 'Confirmation not sent',
                },
            },
        },
    }),
}));

jest.mock('@/components/SectionContainer', () => ({
    SectionContainer: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="section-container">{children}</div>
    ),
}));

jest.mock('@/components/Title', () => ({
    Title: ({ text }: { text: string }) => <h1 data-testid="title">{text}</h1>,
}));

jest.mock('@/components/Subtitle', () => ({
    Subtitle: ({ text }: { text: string }) => <p data-testid="subtitle">{text}</p>,
}));

jest.mock('@/components/ui/button', () => ({
    Button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
}));

jest.mock('@phosphor-icons/react', () => ({
    ChatTextIcon: () => <div>Chat</div>,
    EnvelopeIcon: () => <div>Envelope</div>,
    GithubLogoIcon: () => <div>GitHub</div>,
    LinkedinLogoIcon: () => <div>LinkedIn</div>,
    PaperPlaneTiltIcon: () => <div>Send</div>,
    UserIcon: () => <div>User</div>,
}));

jest.mock('@/config/emailJsConfig', () => ({
    getEmailJsConfig: () => ({
        SERVICE_ID: 'test-service',
        TEMPLATE_ID: 'test-template',
        PUBLIC_KEY: 'test-key',
    }),
}));

jest.mock('@emailjs/browser', () => ({
    send: jest.fn(() => Promise.resolve({ status: 200 })),
}));

describe('Contact Page', () => {
    beforeEach(() => {
        mockToastError.mockClear();
        mockToastSuccess.mockClear();
    });

    it('should render the section container', () => {
        render(<Contact />);
        expect(screen.getByTestId('section-container')).toBeInTheDocument();
    });

    it('should render the title', () => {
        render(<Contact />);
        expect(screen.getByTestId('title')).toHaveTextContent('Contact Us');
    });

    it('should render the subtitle', () => {
        render(<Contact />);
        expect(screen.getByTestId('subtitle')).toHaveTextContent('Get in touch');
    });

    it('should show error when submitting empty form', async () => {
        const user = userEvent.setup({ delay: null });
        const { container } = render(<Contact />);
        const form = container.querySelector('form');
        if (form) {
            form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
        }
        expect(mockToastError).toHaveBeenCalledWith('Please fill all fields');
    });

    it('should render form inputs', () => {
        render(<Contact />);
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    });
});
