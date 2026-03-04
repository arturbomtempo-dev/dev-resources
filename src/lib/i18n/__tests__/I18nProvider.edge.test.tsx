import { useI18n } from '@/lib/i18n/I18nProvider';
import { act, renderHook } from '@testing-library/react';
import React from 'react';

const localStorageMock = (() => {
    let store: Record<string, string> = {};
    return {
        getItem: (key: string) => store[key] || null,
        setItem: (key: string, value: string) => {
            store[key] = value;
        },
        clear: () => {
            store = {};
        },
    };
})();

Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
});

jest.mock('@/lib/i18n/I18nProvider', () => {
    const React = require('react');
    const actualModule = jest.requireActual('@/lib/i18n/I18nProvider');

    return {
        ...actualModule,
        I18nProvider: ({ children }: { children: React.ReactNode }) => {
            return React.createElement(actualModule.I18nProvider, null, children);
        },
    };
});

describe('I18nProvider Edge Cases', () => {
    beforeEach(() => {
        localStorageMock.clear();
    });

    it('should handle initial load with saved locale', () => {
        localStorageMock.setItem('devresources-locale', 'en');

        const { result } = renderHook(() => useI18n(), {
            wrapper: ({ children }) => {
                const { I18nProvider } = require('@/lib/i18n/I18nProvider');
                return React.createElement(I18nProvider, null, children);
            },
        });

        expect(result.current.locale).toBe('en');
    });

    it('should switch between locales multiple times', () => {
        const { result } = renderHook(() => useI18n(), {
            wrapper: ({ children }) => {
                const { I18nProvider } = require('@/lib/i18n/I18nProvider');
                return React.createElement(I18nProvider, null, children);
            },
        });

        act(() => {
            result.current.setLocale('en');
        });
        expect(result.current.locale).toBe('en');

        act(() => {
            result.current.setLocale('pt');
        });
        expect(result.current.locale).toBe('pt');
    });

    it('should provide correct data structure', () => {
        const { result } = renderHook(() => useI18n(), {
            wrapper: ({ children }) => {
                const { I18nProvider } = require('@/lib/i18n/I18nProvider');
                return React.createElement(I18nProvider, null, children);
            },
        });

        expect(result.current.data).toHaveProperty('projects');
        expect(result.current.data).toHaveProperty('experiences');
        expect(result.current.data).toHaveProperty('indications');
    });

    it('should have navigation translations', () => {
        const { result } = renderHook(() => useI18n(), {
            wrapper: ({ children }) => {
                const { I18nProvider } = require('@/lib/i18n/I18nProvider');
                return React.createElement(I18nProvider, null, children);
            },
        });

        expect(result.current.t).toHaveProperty('nav');
        expect(result.current.t.nav).toBeDefined();
    });
});
