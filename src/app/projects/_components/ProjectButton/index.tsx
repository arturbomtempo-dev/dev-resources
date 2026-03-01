import { type ReactNode } from 'react';

interface ProjectButtonProps {
    children: ReactNode;
    variant?: 'outline' | 'gradient';
    href?: string;
    icon?: ReactNode;
}

export function ProjectButton({ children, variant = 'outline', href, icon }: ProjectButtonProps) {
    const baseClasses =
        'flex flex-1 items-center justify-center gap-2 rounded-lg px-6 py-2 text-sm font-medium transition-colors duration-300 ease-in-out outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

    const variantClasses = {
        outline:
            'border border-neutral-200 bg-white text-black hover:bg-neutral-50 hover:border-neutral-300 focus-visible:ring-neutral-300 dark:border-neutral-600 dark:bg-[#0a0a0a] dark:text-gray-100 dark:hover:bg-[#1a1a1a]',
        gradient:
            'border-0 bg-gradient-to-r from-blue-accent to-blue-accent-dark text-white hover:from-blue-accent-dark hover:to-blue-accent focus-visible:ring-blue-accent',
    };

    const className = `${baseClasses} ${variantClasses[variant]}`;

    const content = (
        <>
            {icon && <span className="shrink-0">{icon}</span>}
            <span>{children}</span>
        </>
    );

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
                {content}
            </a>
        );
    }

    return <button className={className}>{content}</button>;
}
