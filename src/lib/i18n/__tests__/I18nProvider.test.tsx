import { act, renderHook } from '@testing-library/react';
import { I18nProvider, useI18n } from '../I18nProvider';

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

describe('I18nProvider', () => {
    beforeEach(() => {
        localStorageMock.clear();
    });

    it('should provide i18n context', () => {
        const { result } = renderHook(() => useI18n(), {
            wrapper: I18nProvider,
        });

        expect(result.current.locale).toBeDefined();
        expect(result.current.setLocale).toBeDefined();
        expect(result.current.t).toBeDefined();
        expect(result.current.data).toBeDefined();
    });

    it('should have default locale as pt', () => {
        const { result } = renderHook(() => useI18n(), {
            wrapper: I18nProvider,
        });

        expect(result.current.locale).toBe('pt');
    });

    it('should change locale from pt to en', () => {
        const { result } = renderHook(() => useI18n(), {
            wrapper: I18nProvider,
        });

        act(() => {
            result.current.setLocale('en');
        });

        expect(result.current.locale).toBe('en');
    });

    it('should persist locale to localStorage', () => {
        const { result } = renderHook(() => useI18n(), {
            wrapper: I18nProvider,
        });

        act(() => {
            result.current.setLocale('en');
        });

        expect(localStorageMock.getItem('devresources-locale')).toBe('en');
    });

    it('should provide translations', () => {
        const { result } = renderHook(() => useI18n(), {
            wrapper: I18nProvider,
        });

        expect(result.current.t.nav).toBeDefined();
        expect(result.current.t.home).toBeDefined();
        expect(result.current.t.about).toBeDefined();
    });

    it('should provide data', () => {
        const { result } = renderHook(() => useI18n(), {
            wrapper: I18nProvider,
        });

        expect(result.current.data.projects).toBeDefined();
        expect(result.current.data.experiences).toBeDefined();
        expect(result.current.data.indications).toBeDefined();
    });
});
