'use client';

import { SectionContainer } from '@/components/SectionContainer';
import { useI18n } from '@/lib/i18n/I18nProvider';
import { ArrowLeft, ArrowSquareOut, GithubLogo } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { ProjectButton } from '../_components/ProjectButton';

export default function ProjectPage() {
    const params = useParams();
    const { t, data } = useI18n();
    const id = Number(params.id);

    const project = data.projects.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    const authorKeys = project.authorIds || [];
    const authorKeyMap: Record<number, string> = {
        1: 'artur',
        2: 'eduarda',
    };
    const authors = authorKeys
        .map((id) => {
            const key = authorKeyMap[id];
            return data.aboutMembers.find((member) => member.key === key);
        })
        .filter((author): author is NonNullable<typeof author> => author !== undefined);

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
                                <ArrowLeft size={24} weight="bold" />
                                {t.projects.backToProjects}
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
                            <h2 className="font-family-manrope mb-4 text-2xl font-bold text-neutral-900 md:text-3xl dark:text-gray-100">
                                {t.projects.about}
                            </h2>
                            <p className="text-base leading-relaxed text-neutral-600 md:text-lg dark:text-neutral-400">
                                {project.longDescription}
                            </p>
                        </div>

                        {project.screenshots && project.screenshots.length > 0 && (
                            <div className="mb-8">
                                <h2 className="font-family-manrope mb-6 text-2xl font-bold text-neutral-900 md:text-3xl dark:text-gray-100">
                                    {t.projects.screenshotsTitle}
                                </h2>
                                <div className="grid gap-6 md:gap-8">
                                    {project.screenshots.map((screenshot, index) => (
                                        <figure key={index} className="group">
                                            <div className="relative aspect-video overflow-hidden rounded-lg bg-neutral-100 shadow-md transition-shadow duration-300 group-hover:shadow-xl dark:bg-neutral-800">
                                                <Image
                                                    src={screenshot.imageUrl}
                                                    alt={screenshot.caption}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <figcaption className="mt-3 text-sm text-neutral-600 md:text-base dark:text-neutral-400">
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
                                <h3 className="mb-4 text-sm font-semibold tracking-wide text-neutral-700 uppercase dark:text-neutral-400">
                                    {t.projects.linksTitle}
                                </h3>
                                <div className="flex flex-col gap-3">
                                    {project.repositoryUrl && (
                                        <ProjectButton
                                            variant="outline"
                                            href={project.repositoryUrl}
                                            icon={<GithubLogo size={20} weight="regular" />}
                                        >
                                            {t.projects.viewRepository}
                                        </ProjectButton>
                                    )}
                                    {project.demoUrl && (
                                        <ProjectButton
                                            variant="gradient"
                                            href={project.demoUrl}
                                            icon={<ArrowSquareOut size={20} weight="regular" />}
                                        >
                                            {t.projects.accessDemo}
                                        </ProjectButton>
                                    )}
                                </div>
                            </div>

                            {project.tags && project.tags.length > 0 && (
                                <div>
                                    <h3 className="mb-4 text-sm font-semibold tracking-wide text-neutral-700 uppercase dark:text-neutral-400">
                                        {t.projects.technologiesTitle}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full bg-neutral-100 px-3 py-1.5 text-sm font-medium text-neutral-700 dark:bg-neutral-800 dark:text-gray-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {authors.length > 0 && (
                                <div>
                                    <h3 className="mb-4 text-sm font-semibold tracking-wide text-neutral-700 uppercase dark:text-neutral-400">
                                        {t.projects.developedBy}
                                    </h3>
                                    <div className="space-y-4">
                                        {authors.map((author) => (
                                            <div
                                                key={author.key}
                                                className="flex items-start gap-3"
                                            >
                                                <div className="from-blue-accent to-teal-accent relative size-12 shrink-0 overflow-hidden rounded-full bg-linear-to-br">
                                                    {author.image ? (
                                                        <Image
                                                            src={author.image}
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
                                                    <p className="font-medium text-neutral-900 dark:text-gray-100">
                                                        {author.name}
                                                    </p>
                                                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                                        {author.role}
                                                    </p>
                                                    {author.socialLinks.github && (
                                                        <a
                                                            href={author.socialLinks.github}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-blue-accent hover:text-blue-accent-dark mt-1 inline-flex items-center gap-1 text-sm transition-colors"
                                                        >
                                                            <GithubLogo
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
