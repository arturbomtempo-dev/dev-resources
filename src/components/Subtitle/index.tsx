interface SubtitleProps {
    text: string;
}

export function Subtitle({ text }: SubtitleProps) {
    return <p className="text-subheading text-lg font-normal">{text}</p>;
}
