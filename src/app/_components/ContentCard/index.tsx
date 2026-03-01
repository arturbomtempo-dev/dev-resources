import { IconBox } from '@/components/IconBox';
import { Icon } from '@phosphor-icons/react';

interface ContentCardProps {
    icon: Icon;
    title: string;
    description: string;
}

export function ContentCard({ icon, title, description }: ContentCardProps) {
    return (
        <div className="font-family-manrope flex h-40 w-full max-w-sm min-w-70 flex-col gap-2 rounded-lg border border-neutral-200 p-3 dark:border-neutral-700 dark:bg-neutral-800">
            <IconBox
                icon={icon}
                bgColor="bg-teal-50 dark:bg-teal-950"
                iconColor="text-teal-primary dark:text-teal-400"
                size={20}
            />
            <h2 className="text-lg font-semibold dark:text-gray-100">{title}</h2>
            <p className="text-sm font-normal dark:text-neutral-400">{description}</p>
        </div>
    );
}
