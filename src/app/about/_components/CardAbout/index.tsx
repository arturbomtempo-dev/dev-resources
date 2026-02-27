import { IconBox } from '@/components/IconBox';
import type { AboutMember } from '@/data';
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
    member: AboutMember;
};

const accentStyles = {
    pink: {
        cardClass: 'border-pink-100 bg-pink-50/30',
        socialBgClass: 'bg-pink-100 hover:bg-pink-200',
        socialIconClass: 'text-pink-500',
        interestVariant: 'interestEduarda' as const,
    },
    green: {
        cardClass: 'border-green-200 bg-green-50/30',
        socialBgClass: 'bg-green-100 hover:bg-green-200',
        socialIconClass: 'text-green-600',
        interestVariant: 'interestArtur' as const,
    },
};

export function CardAbout({ member }: CardAboutProps) {
    const profile = member;
    const styles = accentStyles[profile.accent];

    return (
        <article className={`rounded-xl border p-8 md:p-10 ${styles.cardClass}`}>
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
                    <p className="mt-1 text-sm text-black">{profile.role}</p>
                    <p className="text-sm font-semibold text-black">{profile.institution}</p>

                    <div className="mt-5 flex flex-wrap justify-center gap-2">
                        {profile.socialLinks.github && (
                            <IconBox
                                icon={GithubLogoIcon}
                                bgColor={styles.socialBgClass}
                                iconColor={styles.socialIconClass}
                                size={18}
                                href={profile.socialLinks.github}
                                className="h-8 w-8 rounded-md"
                            />
                        )}
                        {profile.socialLinks.linkedin && (
                            <IconBox
                                icon={LinkedinLogoIcon}
                                bgColor={styles.socialBgClass}
                                iconColor={styles.socialIconClass}
                                size={18}
                                href={profile.socialLinks.linkedin}
                                className="h-8 w-8 rounded-md"
                            />
                        )}
                        {profile.socialLinks.instagram && (
                            <IconBox
                                icon={InstagramLogoIcon}
                                bgColor={styles.socialBgClass}
                                iconColor={styles.socialIconClass}
                                size={18}
                                href={profile.socialLinks.instagram}
                                className="h-8 w-8 rounded-md"
                            />
                        )}
                        {profile.socialLinks.youtube && (
                            <IconBox
                                icon={YoutubeLogoIcon}
                                bgColor={styles.socialBgClass}
                                iconColor={styles.socialIconClass}
                                size={18}
                                href={profile.socialLinks.youtube}
                                className="h-8 w-8 rounded-md"
                            />
                        )}
                        {profile.socialLinks.website && (
                            <IconBox
                                icon={GlobeIcon}
                                bgColor={styles.socialBgClass}
                                iconColor={styles.socialIconClass}
                                size={18}
                                href={profile.socialLinks.website}
                                className="h-8 w-8 rounded-md"
                            />
                        )}
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
                                variant={styles.interestVariant}
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
