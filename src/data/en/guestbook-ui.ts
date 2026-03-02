export const guestbookUI = {
    title: 'Guestbook',
    subtitle: 'Leave your message and be part of our story',
    form: {
        name: {
            label: 'Name',
            placeholder: 'Enter your name...',
        },
        message: {
            label: 'Message',
            placeholder: 'Leave your message...',
        },
        submit: 'Send message',
        submitting: 'Sending...',
    },
    toast: {
        fillAllFields: 'Please fill in all fields before submitting.',
        success: 'Message sent successfully! Thank you for leaving your mark.',
        error: 'Unable to send your message. Please try again.',
    },
    entries: {
        title: 'Messages',
        empty: 'Be the first to leave a message!',
        loading: 'Loading messages...',
        error: 'Error loading messages.',
    },
};

export type GuestbookUITranslations = typeof guestbookUI;
