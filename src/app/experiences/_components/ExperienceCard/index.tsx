'use client';

import { Icon } from '@phosphor-icons/react';
import { Pills } from '../Pills';

export type ExperienceCategory = 'Acadêmica' | 'Profissional' | 'Projetos' | 'Evento';

interface ExperienceCardProps {
    title: string;
    organization: string;
    period: string;
    category: ExperienceCategory;
    icon: Icon;
    showLine?: boolean;
}

const categoryClasses: Record<ExperienceCategory, string> = {
    Acadêmica: 'border-sky-500 bg-sky-50 text-sky-500 dark:bg-sky-900/40 dark:text-sky-400',
    Profissional:
        'border-green-600 bg-green-50 text-green-600 dark:bg-green-900/40 dark:text-green-400',
    Projetos: 'border-teal-600 bg-teal-50 text-teal-600 dark:bg-teal-900/40 dark:text-teal-400',
    Evento: 'border-orange-500 bg-orange-50 text-orange-500 dark:bg-orange-900/40 dark:text-orange-400',
};

export function ExperienceCard({
    title,
    organization,
    period,
    category,
    icon: CardIcon,
    showLine = true,
}: ExperienceCardProps) {
    return (
        <div className="flex gap-3">
            <div className="relative flex w-9 shrink-0 justify-center md:w-10">
                <div
                    className={`z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 md:h-10 md:w-10 ${categoryClasses[category]}`}
                >
                    <CardIcon size={16} weight="regular" />
                </div>
                {showLine && (
                    <span className="absolute top-9 h-[calc(100%+1rem)] w-px bg-gray-300 md:top-10 dark:bg-neutral-600" />
                )}
            </div>

            <article className="w-full rounded-md border border-gray-300 bg-white px-3 py-3 md:px-4 md:py-3.5 dark:border-neutral-700 dark:bg-neutral-800">
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <h3 className="text-sm leading-tight font-semibold text-gray-900 md:text-base dark:text-gray-100">
                            {title}
                        </h3>
                        <p className="mt-0.5 text-[11px] text-gray-900 md:text-xs dark:text-gray-300">
                            {organization}
                        </p>
                    </div>

                    <Pills
                        text={category}
                        className={`shrink-0 border px-2 py-0.5 text-[10px] md:px-2.5 md:py-0.5 md:text-[11px] ${categoryClasses[category]}`}
                    />
                </div>

                <p className="mt-3 text-center text-[11px] font-light text-slate-500 italic md:text-xs dark:text-neutral-400">
                    {period}
                </p>
            </article>
        </div>
    );
}
