'use client';

import { IconBox } from '@/components/IconBox';
import { Indication, IndicationIconName } from '@/data';
import {
    ArrowUpRightIcon,
    AtomIcon,
    BracketsCurlyIcon,
    BrowsersIcon,
    ChatCircleIcon,
    CodeIcon,
    DatabaseIcon,
    FileTextIcon,
    GithubLogoIcon,
    GraduationCapIcon,
    Icon,
    LayoutIcon,
    MonitorIcon,
    NotebookIcon,
    PaintBrushIcon,
    PenNibIcon,
    RocketIcon,
    SparkleIcon,
    StackIcon,
    StarIcon,
    TrophyIcon,
    VideoIcon,
    WrenchIcon,
} from '@phosphor-icons/react';
import Link from 'next/link';

interface IndicationCardProps {
    indication: Indication;
    isFavorite: boolean;
    onToggleFavorite: (id: number) => void;
}

const iconMap: Record<IndicationIconName, Icon> = {
    Monitor: MonitorIcon,
    PenNib: PenNibIcon,
    GithubLogo: GithubLogoIcon,
    Wrench: WrenchIcon,
    Code: CodeIcon,
    PaintBrush: PaintBrushIcon,
    ChatCircle: ChatCircleIcon,
    Notebook: NotebookIcon,
    Video: VideoIcon,
    FileText: FileTextIcon,
    Database: DatabaseIcon,
    Rocket: RocketIcon,
    Atom: AtomIcon,
    BracketsCurly: BracketsCurlyIcon,
    Layout: LayoutIcon,
    Sparkle: SparkleIcon,
    Stack: StackIcon,
    GraduationCap: GraduationCapIcon,
    Trophy: TrophyIcon,
    Browsers: BrowsersIcon,
};

const categoryColors: Record<string, { bg: string; icon: string }> = {
    Estudos: { bg: 'bg-teal-50', icon: 'text-teal-600' },
    Ferramentas: { bg: 'bg-blue-50', icon: 'text-blue-600' },
    'Sites úteis': { bg: 'bg-purple-50', icon: 'text-purple-600' },
    Desenvolvimento: { bg: 'bg-cyan-50', icon: 'text-cyan-600' },
    'Design UI/UX': { bg: 'bg-pink-50', icon: 'text-pink-600' },
    'Conteúdos educacionais': { bg: 'bg-orange-50', icon: 'text-orange-600' },
};

const tagColors: Record<string, string> = {
    Documentação: 'bg-teal-100 text-teal-700',
    Frontend: 'bg-cyan-100 text-cyan-700',
    Backend: 'bg-purple-100 text-purple-700',
    JavaScript: 'bg-yellow-100 text-yellow-700',
    TypeScript: 'bg-blue-100 text-blue-700',
    Design: 'bg-pink-100 text-pink-700',
    'UI/UX': 'bg-pink-100 text-pink-700',
    UI: 'bg-pink-100 text-pink-700',
    Gratuito: 'bg-green-100 text-green-700',
    Pago: 'bg-red-100 text-red-700',
    Produtividade: 'bg-indigo-100 text-indigo-700',
    Git: 'bg-orange-100 text-orange-700',
    IA: 'bg-violet-100 text-violet-700',
    CSS: 'bg-blue-100 text-blue-700',
    React: 'bg-cyan-100 text-cyan-700',
    'Next.js': 'bg-gray-800 text-white',
    DevOps: 'bg-amber-100 text-amber-700',
    'Banco de dados': 'bg-emerald-100 text-emerald-700',
    API: 'bg-lime-100 text-lime-700',
    FullStack: 'bg-violet-100 text-violet-700',
    Framework: 'bg-indigo-100 text-indigo-700',
    SSR: 'bg-slate-100 text-slate-700',
    Animação: 'bg-fuchsia-100 text-fuchsia-700',
    Componentes: 'bg-rose-100 text-rose-700',
    Educação: 'bg-amber-100 text-amber-700',
    Online: 'bg-sky-100 text-sky-700',
    Certificado: 'bg-emerald-100 text-emerald-700',
    Universidade: 'bg-blue-100 text-blue-700',
    Prática: 'bg-orange-100 text-orange-700',
    Desafios: 'bg-red-100 text-red-700',
    Tipagem: 'bg-blue-100 text-blue-700',
    Versionamento: 'bg-gray-100 text-gray-700',
};

export function IndicationCard({ indication, isFavorite, onToggleFavorite }: IndicationCardProps) {
    const IconComponent = iconMap[indication.iconName];
    const colors = categoryColors[indication.category] || {
        bg: 'bg-gray-50',
        icon: 'text-gray-600',
    };

    return (
        <article className="group relative flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-3 flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                    <IconBox
                        icon={IconComponent}
                        bgColor={colors.bg}
                        iconColor={colors.icon}
                        size={22}
                    />
                    <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                        {indication.category}
                    </span>
                </div>
                <button
                    type="button"
                    onClick={() => onToggleFavorite(indication.id)}
                    className="shrink-0 text-gray-300 transition-all hover:scale-110 hover:text-yellow-500"
                    aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                >
                    <StarIcon
                        size={22}
                        weight={isFavorite ? 'fill' : 'regular'}
                        className={isFavorite ? 'text-yellow-500' : ''}
                    />
                </button>
            </div>

            <h3 className="mb-2 text-base font-semibold text-gray-900 transition-colors group-hover:text-teal-600">
                {indication.title}
            </h3>

            <p className="mb-4 line-clamp-2 flex-1 text-sm leading-relaxed text-gray-600">
                {indication.description}
            </p>

            <div className="mb-4 flex flex-wrap gap-1.5">
                {indication.tags.map((tag) => (
                    <span
                        key={tag}
                        className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${tagColors[tag] || 'bg-gray-100 text-gray-700'}`}
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
                    className="inline-flex items-center gap-1 text-sm font-medium text-teal-600 transition-colors hover:text-teal-700"
                >
                    Acessar
                    <ArrowUpRightIcon size={14} weight="bold" />
                </Link>
            </div>
        </article>
    );
}
