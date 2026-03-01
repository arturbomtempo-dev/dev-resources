export const contactUI = {
    title: 'Contact',
    subtitle:
        'Get in touch with us if you are interested in working on projects or making suggestions',
    socialButtons: {
        linkedin: 'LinkedIn',
        email: 'Email',
        github: 'GitHub',
    },
    form: {
        name: {
            label: 'Name',
            placeholder: 'Enter your name...',
        },
        email: {
            label: 'Email',
            placeholder: 'your@email.com',
        },
        subject: {
            label: 'Subject',
            placeholder: 'Enter the subject..',
        },
        message: {
            label: 'Message',
            placeholder: 'Write a message...',
        },
        submit: 'Send',
        sending: 'Sending...',
    },
    toast: {
        fillAllFields: 'Fill in all fields before submitting.',
        invalidEmail: 'Enter a valid email.',
        success: 'Message sent successfully! We will get back to you soon.',
        confirmationWarning: 'We were unable to send you a confirmation email at this time.',
        error: 'Unable to send your message. Please try again in a moment.',
    },
};

export type ContactUITranslations = typeof contactUI;
