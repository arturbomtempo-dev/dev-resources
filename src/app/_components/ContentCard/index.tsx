import { IconBox } from '@/components/IconBox';
import { Icon } from '@phosphor-icons/react';

interface ContentCardProps {
    icon: Icon;
    title: string;
    description: string;
}

export function ContentCard({ icon, title, description }: ContentCardProps) {
    return (
        <div className="font-family-manrope flex h-40 w-full max-w-sm min-w-70 flex-col gap-2 rounded-lg border border-neutral-200 p-3">
            <IconBox icon={icon} bgColor="bg-teal-50" iconColor="text-teal-primary" size={20} />
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm font-normal">{description}</p>
        </div>
    );
}
