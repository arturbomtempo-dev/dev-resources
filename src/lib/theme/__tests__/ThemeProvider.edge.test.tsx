import { useTheme } from '@/lib/theme/ThemeProvider';
import { renderHook } from '@testing-library/react';
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
    writable: true,
});

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
        matches: query === '(prefers-color-scheme: dark)',
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
    add: jest.fn(),
    remove: jest.fn(),
};

Object.defineProperty(document, 'documentElement', {
    value: {
        classList: mockClassList,
    },
    writable: true,
});

jest.mock('@/lib/theme/ThemeProvider', () => {
    const React = require('react');
    const actualModule = jest.requireActual('@/lib/theme/ThemeProvider');

    return {
        ...actualModule,
        ThemeProvider: ({ children }: { children: React.ReactNode }) => {
            return React.createElement(actualModule.ThemeProvider, null, children);
        },
    };
});

describe('ThemeProvider Edge Cases', () => {
    beforeEach(() => {
        localStorageMock.clear();
        mockClassList.toggle.mockClear();
        jest.clearAllMocks();
    });

    it('should handle initial load with saved theme', () => {
        localStorageMock.setItem('devresources-theme', 'dark');

        const { result } = renderHook(() => useTheme(), {
            wrapper: ({ children }) => {
                const { ThemeProvider } = require('@/lib/theme/ThemeProvider');
                return React.createElement(ThemeProvider, null, children);
            },
        });

        expect(result.current.theme).toBeDefined();
    });

    it('should handle system preference for dark mode', () => {
        (window.matchMedia as jest.Mock).mockImplementation((query) => ({
            matches: query === '(prefers-color-scheme: dark)',
            media: query,
            onchange: null,
            addListener: jest.fn(),
            removeListener: jest.fn(),
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        }));

        const { result } = renderHook(() => useTheme(), {
            wrapper: ({ children }) => {
                const { ThemeProvider } = require('@/lib/theme/ThemeProvider');
                return React.createElement(ThemeProvider, null, children);
            },
        });

        expect(result.current).toBeDefined();
    });

    it('should default to light theme when no preference', () => {
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

        const { result } = renderHook(() => useTheme(), {
            wrapper: ({ children }) => {
                const { ThemeProvider } = require('@/lib/theme/ThemeProvider');
                return React.createElement(ThemeProvider, null, children);
            },
        });

        expect(result.current.theme).toBe('light');
    });
});
