import { cn } from '@/lib/utils';

type PillsVariant = 'interest' | 'interestEduarda' | 'interestArtur' | 'technology';

interface PillsProps {
    text: string;
    variant?: PillsVariant;
    className?: string;
}

export function Pills({ text, variant = 'interest', className }: PillsProps) {
    const variantClasses: Record<PillsVariant, string> = {
        interest: 'bg-pink-100 text-pink-500',
        interestEduarda: 'bg-pink-100 text-pink-500',
        interestArtur: 'bg-green-bg text-green-600',
        technology: 'border border-gray-200 bg-gray-100 text-gray-500',
    };

    return (
        <span
            className={cn(
                'rounded-full px-3 py-1 text-xs font-medium',
                variantClasses[variant],
                className
            )}
        >
            {text}
        </span>
    );
}
