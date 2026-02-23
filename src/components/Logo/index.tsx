'use client';

import { CodeIcon } from '@phosphor-icons/react';

interface LogoProps {
    size?: 'small' | 'large';
}

export function Logo({ size }: LogoProps) {
    const sizeClasses = {
        small: 'text-base',
        large: 'text-2xl font-semibold',
    };

    const className = size ? sizeClasses[size] : 'text-2xl font-semibold';

    return (
        <div className={`flex items-center gap-4 ${className}`}>
            <CodeIcon className="text-blue-primary" />
            <h1>
                Dev<span className="font-display text-blue-primary">Resources</span>
            </h1>
        </div>
    );
}
