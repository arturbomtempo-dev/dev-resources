import { getEmailJsConfig } from '../emailJsConfig';

describe('EmailJS Configuration', () => {
    const originalEnv = process.env;

    beforeEach(() => {
        process.env = {
            ...originalEnv,
            NEXT_PUBLIC_EMAILJS_SERVICE_ID: undefined,
            NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_FOR_ME: undefined,
            NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_FOR_SENDER: undefined,
            NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: undefined,
        };
    });

    afterAll(() => {
        process.env = originalEnv;
    });

    describe('getEmailJsConfig', () => {
        it('should return config when all env vars are present', () => {
            jest.resetModules();
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID = 'service_123';
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_FOR_ME = 'template_me_123';
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_FOR_SENDER = 'template_sender_123';
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = 'public_key_123';

            const { getEmailJsConfig } = require('../emailJsConfig');
            const config = getEmailJsConfig();

            expect(config.SERVICE_ID).toBe('service_123');
            expect(config.TEMPLATE_ID_FOR_ME).toBe('template_me_123');
            expect(config.TEMPLATE_ID_FOR_SENDER).toBe('template_sender_123');
            expect(config.PUBLIC_KEY).toBe('public_key_123');
        });

        it('should throw error when SERVICE_ID is missing', () => {
            jest.resetModules();
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_FOR_ME = 'template_me_123';
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_FOR_SENDER = 'template_sender_123';
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = 'public_key_123';

            const { getEmailJsConfig } = require('../emailJsConfig');
            expect(() => getEmailJsConfig()).toThrow(/SERVICE_ID/);
        });

        it('should throw error when TEMPLATE_ID_FOR_ME is missing', () => {
            jest.resetModules();
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID = 'service_123';
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_FOR_SENDER = 'template_sender_123';
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = 'public_key_123';

            const { getEmailJsConfig } = require('../emailJsConfig');
            expect(() => getEmailJsConfig()).toThrow(/TEMPLATE_ID_FOR_ME/);
        });

        it('should throw error when TEMPLATE_ID_FOR_SENDER is missing', () => {
            jest.resetModules();
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID = 'service_123';
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_FOR_ME = 'template_me_123';
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = 'public_key_123';

            const { getEmailJsConfig } = require('../emailJsConfig');
            expect(() => getEmailJsConfig()).toThrow(/TEMPLATE_ID_FOR_SENDER/);
        });

        it('should throw error when PUBLIC_KEY is missing', () => {
            jest.resetModules();
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID = 'service_123';
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_FOR_ME = 'template_me_123';
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_FOR_SENDER = 'template_sender_123';

            const { getEmailJsConfig } = require('../emailJsConfig');
            expect(() => getEmailJsConfig()).toThrow(/PUBLIC_KEY/);
        });

        it('should throw error listing all missing variables', () => {
            jest.resetModules();
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_FOR_SENDER = 'template_sender_123';
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = 'public_key_123';

            const { getEmailJsConfig } = require('../emailJsConfig');
            expect(() => getEmailJsConfig()).toThrow('Variáveis do EmailJS ausentes');
            expect(() => getEmailJsConfig()).toThrow(/SERVICE_ID/);
            expect(() => getEmailJsConfig()).toThrow(/TEMPLATE_ID_FOR_ME/);
        });

        it('should throw error when all variables are missing', () => {
            jest.resetModules();
            const { getEmailJsConfig } = require('../emailJsConfig');
            expect(() => getEmailJsConfig()).toThrow('Variáveis do EmailJS ausentes');
        });
    });
});
