'use client';

import { CodeIcon } from '@phosphor-icons/react';

interface LogoProps {
    size?: 'small' | 'large';
    variant?: 'default' | 'light';
}

export function Logo({ size, variant = 'default' }: LogoProps) {
    const sizeClasses = {
        small: 'text-base',
        large: 'text-2xl',
    };

    const className = size ? sizeClasses[size] : 'text-2xl font-semibold';
    const isLight = variant === 'light';

    return (
        <div
            data-testid="logo"
            className={`flex items-center gap-3 font-semibold transition-colors duration-300 ${className} ${
                isLight ? 'text-white' : 'text-black dark:text-gray-100'
            }`}
        >
            <CodeIcon className={isLight ? 'text-white' : 'text-blue-primary'} />
            <h1>
                Dev
                <span className={isLight ? 'text-white' : 'font-display text-blue-primary'}>
                    Resources
                </span>
            </h1>
        </div>
    );
}
