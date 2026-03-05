import { act, renderHook } from '@testing-library/react';
import { ThemeProvider, useTheme } from '../ThemeProvider';

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

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

const mockClassList = {
    toggle: jest.fn(),
};

Object.defineProperty(document, 'documentElement', {
    value: {
        classList: mockClassList,
    },
    writable: true,
});

describe('ThemeProvider', () => {
    beforeEach(() => {
        localStorageMock.clear();
        mockClassList.toggle.mockClear();
    });

    it('should provide theme context', () => {
        const { result } = renderHook(() => useTheme(), {
            wrapper: ThemeProvider,
        });

        expect(result.current.theme).toBeDefined();
        expect(result.current.setTheme).toBeDefined();
        expect(result.current.toggleTheme).toBeDefined();
    });

    it('should toggle theme from light to dark', () => {
        const { result } = renderHook(() => useTheme(), {
            wrapper: ThemeProvider,
        });

        act(() => {
            result.current.toggleTheme();
        });

        expect(result.current.theme).toBe('dark');
    });

    it('should set theme directly', () => {
        const { result } = renderHook(() => useTheme(), {
            wrapper: ThemeProvider,
        });

        act(() => {
            result.current.setTheme('dark');
        });

        expect(result.current.theme).toBe('dark');
    });

    it('should persist theme to localStorage', () => {
        const { result } = renderHook(() => useTheme(), {
            wrapper: ThemeProvider,
        });

        act(() => {
            result.current.setTheme('dark');
        });

        expect(localStorageMock.getItem('devresources-theme')).toBe('dark');
    });
});
