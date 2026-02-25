import { Subtitle } from '@/components/Subtitle';
import { Title } from '@/components/Title';
import { ProjectCard } from './_components/ProjectCard';
import { SectionContainer } from '@/components/SectionContainer';

export default function Projects() {
    return (
        <SectionContainer>
            <Title text="Projetos" />
            <Subtitle text="Conheça outros de nossos projetos desenvolvidos." />
            <div>
                <ProjectCard />
            </div>
        </SectionContainer>
    );
}
