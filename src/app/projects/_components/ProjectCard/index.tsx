'use client';

import { ArrowSquareOutIcon, GithubLogoIcon } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectButton } from '../ProjectButton';
import type { Project } from '@/data/types';

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="group flex max-w-md min-w-70 flex-col overflow-hidden rounded-lg border border-neutral-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-neutral-200/50 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:shadow-neutral-900/50">
            <Link href={`/projects/${project.id}`} className="block">
                <div className="relative h-48 w-full overflow-hidden">
                    <Image
                        src={project.imageUrl}
                        alt={project.imageAlt || project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
                <div className="flex flex-col gap-4 p-5">
                    <div className="flex flex-col gap-2">
                        <h3 className="font-family-manrope text-base font-bold dark:text-white">
                            {project.title}
                        </h3>
                        <p className="text-sm font-normal text-neutral-600 dark:text-neutral-400">
                            {project.description}
                        </p>
                    </div>
                </div>
            </Link>
            <div className="flex gap-3 px-5 pb-5">
                {project.repositoryUrl && (
                    <ProjectButton
                        variant="outline"
                        href={project.repositoryUrl}
                        icon={<GithubLogoIcon size={20} weight="regular" />}
                    >
                        Repositório
                    </ProjectButton>
                )}
                {project.demoUrl && (
                    <ProjectButton
                        variant="gradient"
                        href={project.demoUrl}
                        icon={<ArrowSquareOutIcon size={20} weight="regular" />}
                    >
                        Demo
                    </ProjectButton>
                )}
            </div>
        </div>
    );
}
