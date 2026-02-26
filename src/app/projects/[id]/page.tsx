import { SectionContainer } from '@/components/SectionContainer';
import { getAllProjects, getProjectById } from '@/data/pt/projects';
import { getAllTeamMembers } from '@/data/pt/team';
import { ArrowLeftIcon, ArrowSquareOutIcon, GithubLogoIcon } from '@phosphor-icons/react/dist/ssr';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ProjectButton } from '../_components/ProjectButton';

interface ProjectPageProps {
    params: Promise<{
        id: string;
    }>;
}

export async function generateStaticParams() {
    const projects = getAllProjects();
    return projects.map((project) => ({
        id: project.id.toString(),
    }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const { id } = await params;
    const project = getProjectById(Number(id));

    if (!project) {
        return {
            title: 'Projeto não encontrado',
        };
    }

    return {
        title: `${project.title} | DevResources`,
        description: project.description,
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { id } = await params;
    const project = getProjectById(Number(id));

    if (!project) {
        notFound();
    }

    const team = getAllTeamMembers();
    const authors =
        project.authorIds
            ?.map((authorId) => team.find((member) => member.id === authorId))
            .filter((author): author is NonNullable<typeof author> => author !== undefined) || [];

    return (
        <>
            <div className="relative h-80 min-h-100 w-full overflow-hidden md:h-screen md:max-h-150">
                <Image
                    src={project.imageUrl}
                    alt={project.imageAlt || project.title}
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/80 to-black/60" />
                <div className="absolute inset-0 flex items-start">
                    <div className="w-full pt-5 md:pt-28">
                        <SectionContainer>
                            <Link
                                href="/projects"
                                className="mb-5 inline-flex items-center gap-2 text-base font-semibold text-white transition-colors hover:text-white/80"
                            >
                                <ArrowLeftIcon size={24} weight="bold" />
                                Voltar para projetos
                            </Link>
                            <h1 className="font-family-manrope mb-3 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                                {project.title}
                            </h1>
                            <p className="max-w-3xl text-lg text-white/90 md:text-xl">
                                {project.description}
                            </p>
                        </SectionContainer>
                    </div>
                </div>
            </div>

            <section className="mx-auto my-10 max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 py-8 md:py-12 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-8">
                        <div className="mb-8">
                            <h2 className="font-family-manrope mb-4 text-2xl font-bold text-neutral-900 md:text-3xl">
                                Sobre o projeto
                            </h2>
                            <p className="text-base leading-relaxed text-neutral-600 md:text-lg">
                                {project.longDescription}
                            </p>
                        </div>

                        {project.screenshots && project.screenshots.length > 0 && (
                            <div className="mb-8">
                                <h2 className="font-family-manrope mb-6 text-2xl font-bold text-neutral-900 md:text-3xl">
                                    Capturas de tela
                                </h2>
                                <div className="grid gap-6 md:gap-8">
                                    {project.screenshots.map((screenshot, index) => (
                                        <figure key={index} className="group">
                                            <div className="relative aspect-video overflow-hidden rounded-lg bg-neutral-100 shadow-md transition-shadow duration-300 group-hover:shadow-xl">
                                                <Image
                                                    src={screenshot.imageUrl}
                                                    alt={screenshot.caption}
                                                    fill
                                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                            </div>
                                            <figcaption className="mt-3 text-sm text-neutral-600 md:text-base">
                                                {screenshot.caption}
                                            </figcaption>
                                        </figure>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <aside className="lg:col-span-4">
                        <div className="sticky top-6 space-y-8">
                            <div>
                                <h3 className="mb-4 text-sm font-semibold tracking-wide text-neutral-700 uppercase">
                                    Links
                                </h3>
                                <div className="flex flex-col gap-3">
                                    {project.repositoryUrl && (
                                        <ProjectButton
                                            variant="outline"
                                            href={project.repositoryUrl}
                                            icon={<GithubLogoIcon size={20} weight="regular" />}
                                        >
                                            Ver repositório
                                        </ProjectButton>
                                    )}
                                    {project.demoUrl && (
                                        <ProjectButton
                                            variant="gradient"
                                            href={project.demoUrl}
                                            icon={<ArrowSquareOutIcon size={20} weight="regular" />}
                                        >
                                            Acessar demo
                                        </ProjectButton>
                                    )}
                                </div>
                            </div>

                            {project.tags && project.tags.length > 0 && (
                                <div>
                                    <h3 className="mb-4 text-sm font-semibold tracking-wide text-neutral-700 uppercase">
                                        Tecnologias
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full bg-neutral-100 px-3 py-1.5 text-sm font-medium text-neutral-700"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {authors.length > 0 && (
                                <div>
                                    <h3 className="mb-4 text-sm font-semibold tracking-wide text-neutral-700 uppercase">
                                        Desenvolvido por
                                    </h3>
                                    <div className="space-y-4">
                                        {authors.map((author) => (
                                            <div key={author.id} className="flex items-start gap-3">
                                                <div className="from-blue-accent to-teal-accent relative size-12 shrink-0 overflow-hidden rounded-full bg-linear-to-br">
                                                    {author.avatar ? (
                                                        <Image
                                                            src={author.avatar}
                                                            alt={author.name}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    ) : (
                                                        <div className="flex size-full items-center justify-center text-lg font-bold text-white">
                                                            {author.name.charAt(0).toUpperCase()}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <p className="font-medium text-neutral-900">
                                                        {author.name}
                                                    </p>
                                                    <p className="text-sm text-neutral-500">
                                                        {author.role}
                                                    </p>
                                                    {author.socialLinks.github && (
                                                        <a
                                                            href={author.socialLinks.github}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-blue-accent hover:text-blue-accent-dark mt-1 inline-flex items-center gap-1 text-sm transition-colors"
                                                        >
                                                            <GithubLogoIcon
                                                                size={16}
                                                                weight="regular"
                                                            />
                                                            GitHub
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </aside>
                </div>
            </section>
        </>
    );
}
