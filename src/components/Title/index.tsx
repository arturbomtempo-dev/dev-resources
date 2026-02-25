interface TitleProps {
    text: string;
}

export function Title({ text }: TitleProps) {
    return <h2 className="font-family-manrope mb-4 text-4xl font-bold">{text}</h2>;
}
