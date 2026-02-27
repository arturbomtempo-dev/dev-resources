import { IconProps } from '@phosphor-icons/react';

export function Button({
    text,
    icon: Icon,
    className,
    onClick,
    href,
    target,
    rel,
}: Readonly<{
    text: string;
    icon?: React.ComponentType<IconProps>;
    className?: string;
    onClick?: () => void;
    href?: string;
    target?: string;
    rel?: string;
}>) {
    const Component = href ? 'a' : 'button';

    return (
        <Component
            type={href ? undefined : 'button'}
            onClick={onClick}
            href={href}
            target={target}
            rel={rel}
            className={`inline-flex items-center gap-2 rounded-md bg-teal-600 px-4 py-2 text-sm font-medium text-white transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 ${className}`}
        >
            {Icon && <Icon size={18} weight="bold" />}
            {text}
        </Component>
    );
}

export default Button;
