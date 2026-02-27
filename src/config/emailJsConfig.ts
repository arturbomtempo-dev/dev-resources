const EMAILJS_CONFIG = {
    SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    TEMPLATE_ID_FOR_ME: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_FOR_ME,
    TEMPLATE_ID_FOR_SENDER: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_FOR_SENDER,
    PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
} as const;

export function getEmailJsConfig() {
    const missingVars = Object.entries(EMAILJS_CONFIG)
        .filter(([, value]) => !value)
        .map(([key]) => key);

    if (missingVars.length > 0) {
        throw new Error(`Variáveis do EmailJS ausentes: ${missingVars.join(', ')}`);
    }

    return EMAILJS_CONFIG as {
        SERVICE_ID: string;
        TEMPLATE_ID_FOR_ME: string;
        TEMPLATE_ID_FOR_SENDER: string;
        PUBLIC_KEY: string;
    };
}

export default EMAILJS_CONFIG;
