import type { Icon } from '@phosphor-icons/react';

interface IconBoxProps {
    icon: Icon;
    bgColor?: string;
    iconColor?: string;
    size?: number;
    href?: string;
    className?: string;
}

export function IconBox({
    icon: IconComponent,
    bgColor = 'bg-gray-200',
    iconColor = 'text-blue-500',
    size = 20,
    href,
    className = '',
}: IconBoxProps) {
    const boxClasses =
        `flex h-10 w-10 items-center justify-center rounded-lg ${bgColor} ${className}`.trim();
    const iconClasses = `${iconColor}`;

    const content = (
        <div className={boxClasses}>
            <IconComponent className={iconClasses} size={size} />
        </div>
    );

    if (href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 ease-in-out hover:scale-110"
            >
                {content}
            </a>
        );
    }

    return content;
}
