import { SectionContainer } from '@/components/SectionContainer';
import { Title } from '@/components/Title';
import { Subtitle } from '@/components/Subtitle';
import Link from 'next/link';
import { ArrowLeftIcon } from '@phosphor-icons/react/dist/ssr';

export default function NotFound() {
    return (
        <SectionContainer>
            <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
                <Title text="Projeto não encontrado" />
                <Subtitle text="O projeto que você está procurando não existe ou foi removido." />
                <Link
                    href="/projects"
                    className="from-blue-accent to-blue-accent-dark hover:from-blue-accent-dark hover:to-blue-accent mt-8 inline-flex items-center gap-2 rounded-lg bg-linear-to-r px-6 py-3 font-medium text-white transition-all hover:shadow-lg"
                >
                    <ArrowLeftIcon size={20} weight="bold" />
                    Voltar para projetos
                </Link>
            </div>
        </SectionContainer>
    );
}
