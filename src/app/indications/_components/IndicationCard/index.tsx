'use client';

import { IconBox } from '@/components/IconBox';
import { Indication, IndicationIconName } from '@/data';
import { ArrowSquareOutIcon, StarIcon } from '@phosphor-icons/react';
import Link from 'next/link';
import { categoryColors } from './constants/categoryColors';
import { iconMap } from './constants/iconMap';

interface IndicationCardProps {
    indication: Indication;
    isFavorite: boolean;
    onToggleFavorite: (id: number) => void;
}

export function IndicationCard({ indication, isFavorite, onToggleFavorite }: IndicationCardProps) {
    const IconComponent = iconMap[indication.iconName];
    const colors = categoryColors[indication.category] || {
        bg: 'bg-teal-50',
        icon: 'text-teal-600',
    };

    return (
        <article className="group relative flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <button
                type="button"
                onClick={() => onToggleFavorite(indication.id)}
                className={`absolute -top-px -right-px flex h-11 w-11 cursor-pointer items-center justify-center rounded-tr-xl rounded-bl-lg transition-all hover:scale-105 ${
                    isFavorite ? 'border-yellow-200 bg-yellow-100' : 'border-gray-200 bg-neutral-50'
                }`}
                aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
            >
                <StarIcon
                    size={20}
                    weight={isFavorite ? 'fill' : 'regular'}
                    className={isFavorite ? 'text-yellow-500' : 'text-neutral-500'}
                />
            </button>
            <div className="mb-3 flex items-start gap-3 pr-10">
                <IconBox
                    icon={IconComponent}
                    bgColor={colors.bg}
                    iconColor={colors.icon}
                    size={22}
                />
                <span className="ml-auto rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-600">
                    {indication.category}
                </span>
            </div>

            <h3 className="mb-2 text-base font-semibold text-gray-900">{indication.title}</h3>

            <p className="mb-4 line-clamp-2 flex-1 text-sm leading-relaxed text-gray-600">
                {indication.description}
            </p>

            <div className="mb-4 flex flex-wrap gap-1.5">
                {indication.tags.map((tag: string) => (
                    <span
                        key={tag}
                        className={`rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-medium text-teal-700`}
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <span className="text-xs text-gray-500">
                    por <span className="font-medium text-gray-700">{indication.indicatedBy}</span>
                </span>
                <Link
                    href={indication.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-teal-600 transition-colors hover:bg-teal-100 hover:text-teal-700"
                >
                    <span>Acessar</span>
                    <ArrowSquareOutIcon size={16} weight="bold" className="ml-1" />
                </Link>
            </div>
        </article>
    );
}
