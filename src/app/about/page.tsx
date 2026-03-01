'use client';
import { SectionContainer } from '@/components/SectionContainer';
import { Subtitle } from '@/components/Subtitle';
import { Title } from '@/components/Title';
import { useI18n } from '@/lib/i18n/I18nProvider';
import { CardAbout } from './_components/CardAbout';

export default function About() {
    const { t, data } = useI18n();
    const members = data.aboutMembers;

    return (
        <SectionContainer>
            <Title text={t.about.title} />
            <Subtitle text={t.about.subtitle} />
            <div className="my-5 flex flex-col gap-4">
                {members.map((member) => (
                    <CardAbout key={member.key} member={member} />
                ))}
            </div>
        </SectionContainer>
    );
}
