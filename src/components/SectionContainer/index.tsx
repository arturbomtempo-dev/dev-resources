import { ReactNode } from 'react';

interface SectionContainerProps {
    children: ReactNode;
}

export function SectionContainer({ children }: SectionContainerProps) {
    return <section className="mx-auto my-30 max-w-7xl px-6 ">{children}</section>;
}
