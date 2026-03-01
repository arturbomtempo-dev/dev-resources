import { cn } from '@/lib/utils';

interface PillsProps {
    text: string;
    className?: string;
    onClick?: () => void;
    isActive?: boolean;
}

export function Pills({ text, className, onClick, isActive = false }: PillsProps) {
    const baseClasses =
        'rounded-full px-3 py-1 text-xs transition-transform duration-300 ease-in-out md:text-sm';

    const defaultClasses = isActive
        ? 'bg-linear-to-r from-teal-600 to-teal-500 text-white'
        : 'bg-gray-200 text-gray-800 dark:bg-neutral-700 dark:text-white';

    if (onClick) {
        return (
            <button
                type="button"
                onClick={onClick}
                aria-pressed={isActive}
                className={cn(
                    baseClasses,
                    defaultClasses,
                    'cursor-pointer hover:scale-105',
                    className
                )}
            >
                {text}
            </button>
        );
    }

    return <span className={cn(baseClasses, defaultClasses, className)}>{text}</span>;
}
