import { IconBox } from '@/components/IconBox';
import Image from 'next/image';
import {
    GithubLogoIcon,
    GlobeIcon,
    InstagramLogoIcon,
    LinkedinLogoIcon,
    YoutubeLogoIcon,
} from '@phosphor-icons/react';
import { Pills } from '../Pills';

type CardAboutProps = {
    member: 'eduarda' | 'artur';
};

const profiles = {
    eduarda: {
        initials: 'EV',
        image: '/Eduarda.png',
        name: 'Eduarda Vieira',
        bio: 'Desenvolvedora frontend apaixonada por design, UX e tecnologias web modernas. Acredita que a tecnologia deve ser acessível e bonita.',
        interests: ['Frontend', 'UI/UX Design', 'APIs', 'Banco de dados'],
        technologies: ['React', 'Next.js', 'Tailwind CSS', 'Figma', 'Typescript', 'Node.js'],
        cardClass: 'border-pink-100 bg-pink-50/30',
        avatarClass: 'from-pink-100 to-pink-200 text-pink-600',
        socialBgClass: 'bg-pink-100 hover:bg-pink-200',
        socialIconClass: 'text-pink-500',
        interestVariant: 'interestEduarda' as const,
        socialLinks: {
            github: 'https://github.com/eduardavieira-dev',
            linkedin: 'https://www.linkedin.com/in/eduarda-vieira-gon%C3%A7alves-01a584297/',
            instagram: 'https://www.instagram.com/eduardavieira.dev/',
            website: 'https://portifolio-eduardavieira.vercel.app/',
            youtube: undefined,
        },
    },
    artur: {
        initials: 'AB',
        image: '/Artur.png',
        name: 'Artur Bomtempo',
        bio: 'Desenvolvedor fullstack focado em soluções escaláveis e experiências digitais impactantes. Entusiasta de backend, APIs e arquitetura de software.',
        interests: ['Backend', 'Cloud', 'IA', 'APIs', 'Banco de dados'],
        technologies: ['Node.js', 'Spring Boot', 'PostgreSQL', 'Docker', 'Typescript', 'React'],
        cardClass: 'border-green-bg bg-green-50/30',
        avatarClass: 'from-green-100 to-green-200 text-green-700',
        socialBgClass: 'bg-green-bg hover:bg-green-200',
        socialIconClass: 'text-green-600',
        interestVariant: 'interestArtur' as const,
        socialLinks: {
            github: 'https://github.com/arturbomtempo-dev',
            linkedin: 'https://www.linkedin.com/in/artur-bomtempo/',
            instagram: 'https://www.instagram.com/arturbomtempo.dev/',
            website: 'https://arturbomtempo.dev',
            youtube: 'https://www.youtube.com/@ArturBomtempoDev',
        },
    },
};

export function CardAbout({ member }: CardAboutProps) {
    const profile = profiles[member];

    return (
        <article className={`rounded-xl border p-8 md:p-10 ${profile.cardClass}`}>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[300px_1fr]">
                <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full border border-gray-200">
                        <Image
                            src={profile.image}
                            alt={`Foto de ${profile.name}`}
                            fill
                            className="object-cover"
                            sizes="128px"
                        />
                    </div>

                    <h3 className="text-2xl font-semibold text-black">{profile.name}</h3>
                    <p className="mt-1 text-sm text-black">Estudante de Engenharia de Software</p>
                    <p className="text-sm font-semibold text-black">PUC Minas</p>

                    <div className="mt-5 flex flex-wrap justify-center gap-2">
                        <IconBox
                            icon={GithubLogoIcon}
                            bgColor={profile.socialBgClass}
                            iconColor={profile.socialIconClass}
                            size={18}
                            href={profile.socialLinks.github}
                            className="h-8 w-8 rounded-md"
                        />
                        <IconBox
                            icon={LinkedinLogoIcon}
                            bgColor={profile.socialBgClass}
                            iconColor={profile.socialIconClass}
                            size={18}
                            href={profile.socialLinks.linkedin}
                            className="h-8 w-8 rounded-md"
                        />
                        <IconBox
                            icon={InstagramLogoIcon}
                            bgColor={profile.socialBgClass}
                            iconColor={profile.socialIconClass}
                            size={18}
                            href={profile.socialLinks.instagram}
                            className="h-8 w-8 rounded-md"
                        />
                        {profile.socialLinks.youtube && (
                            <IconBox
                                icon={YoutubeLogoIcon}
                                bgColor={profile.socialBgClass}
                                iconColor={profile.socialIconClass}
                                size={18}
                                href={profile.socialLinks.youtube}
                                className="h-8 w-8 rounded-md"
                            />
                        )}
                        <IconBox
                            icon={GlobeIcon}
                            bgColor={profile.socialBgClass}
                            iconColor={profile.socialIconClass}
                            size={18}
                            href={profile.socialLinks.website}
                            className="h-8 w-8 rounded-md"
                        />
                    </div>
                </div>

                <div>
                    <p className="mb-6 text-lg leading-relaxed text-gray-700">{profile.bio}</p>

                    <h4 className="mb-3 text-xl font-semibold text-black">Áreas de interesse</h4>
                    <div className="mb-6 flex flex-wrap gap-2">
                        {profile.interests.map((interest) => (
                            <Pills
                                key={interest}
                                text={interest}
                                variant={profile.interestVariant}
                            />
                        ))}
                    </div>

                    <h4 className="mb-3 text-xl font-semibold text-black">Stack de Tecnologias</h4>
                    <div className="flex flex-wrap gap-2">
                        {profile.technologies.map((technology) => (
                            <Pills key={technology} text={technology} variant="technology" />
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}
