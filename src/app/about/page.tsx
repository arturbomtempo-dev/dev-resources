'use client';
import { SectionContainer } from '@/components/SectionContainer';
import { CardAbout } from './_components/CardAbout';
import { Title } from '@/components/Title';
import { Subtitle } from '@/components/Subtitle';

export default function About() {
    return (
        <SectionContainer>
            <Title text="Sobre nós" />
            <Subtitle text="Conheça as pessoas por trás do DevResources" />
            <div className="my-5 flex flex-col gap-4">
                <CardAbout member="eduarda" />
                <CardAbout member="artur" />
            </div>
        </SectionContainer>
    );
}
