interface SubtitleProps {
    text: string;
}

export function Subtitle({ text }: SubtitleProps) {
    return (
        <p className="text-subheading text-md font-normal md:text-lg dark:text-neutral-400">
            {text}
        </p>
    );
}
