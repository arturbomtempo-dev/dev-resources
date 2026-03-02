interface TitleProps {
    text: string;
}

export function Title({ text }: TitleProps) {
    return (
        <h2 className="font-family-jetbrains-mono mb-4 text-3xl font-bold md:text-4xl">{text}</h2>
    );
}
