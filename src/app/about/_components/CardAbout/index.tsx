'use client';

import { IconBox } from '@/components/IconBox';
import type { AboutMember } from '@/data';
import { useGitHubUser } from '@/hooks/useGitHubUser';
import { useI18n } from '@/lib/i18n/I18nProvider';
import { useTheme } from '@/lib/theme/ThemeProvider';
import {
    GithubLogoIcon,
    GlobeIcon,
    InstagramLogoIcon,
    LinkedinLogoIcon,
    YoutubeLogoIcon,
} from '@phosphor-icons/react';
import Image from 'next/image';
import { GitHubCalendar } from 'react-github-calendar';
import { Pills } from '../Pills';

type CardAboutProps = {
    member: AboutMember;
};

const calendarThemes = {
    pink: {
        light: ['#f3f4f6', '#fce7f3', '#f9a8d4', '#ec4899', '#be185d'],
        dark: ['#1f1f1f', '#4a1942', '#831843', '#be185d', '#ec4899'],
    },
    green: {
        light: ['#f3f4f6', '#dcfce7', '#86efac', '#22c55e', '#15803d'],
        dark: ['#1f1f1f', '#0a3022', '#14532d', '#15803d', '#22c55e'],
    },
};

const accentStyles = {
    pink: {
        cardClass: 'border-neutral-200 bg-white',
        socialBgClass: 'bg-pink-50 hover:bg-pink-200 dark:bg-pink-900/30 dark:hover:bg-pink-800/50',
        socialIconClass: 'text-pink-600 dark:text-pink-400',
        interestVariant: 'interestEduarda' as const,
        statsBg: 'bg-pink-50 dark:bg-pink-900/30',
        statsText: 'text-pink-600 dark:text-pink-400',
        statsLabel: 'text-pink-500/80 dark:text-pink-400/70',
    },
    green: {
        cardClass: 'border-neutral-200 bg-white',
        socialBgClass:
            'bg-green-50 hover:bg-green-100 dark:bg-green-900/30 dark:hover:bg-green-800/50',
        socialIconClass: 'text-green-600 dark:text-green-400',
        interestVariant: 'interestArtur' as const,
        statsBg: 'bg-green-50 dark:bg-green-900/30',
        statsText: 'text-green-600 dark:text-green-400',
        statsLabel: 'text-green-500/80 dark:text-green-400/70',
    },
};

export function CardAbout({ member }: CardAboutProps) {
    const profile = member;
    const styles = accentStyles[profile.accent];
    const { t } = useI18n();
    const { theme } = useTheme();
    const { data: githubData, isLoading: githubLoading } = useGitHubUser(profile.githubUsername);

    return (
        <article
            className={`rounded-xl border p-8 md:p-10 ${styles.cardClass} dark:border-neutral-700 dark:bg-neutral-800`}
        >
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[300px_1fr]">
                <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full border border-gray-200 dark:border-neutral-600">
                        <Image
                            src={profile.image}
                            alt={`Foto de ${profile.name}`}
                            fill
                            className="object-cover"
                            sizes="128px"
                        />
                    </div>

                    <h3 className="text-2xl font-semibold text-black dark:text-gray-100">
                        {githubData?.name || profile.name}
                    </h3>
                    <a
                        href={`https://github.com/${profile.githubUsername}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 text-sm text-neutral-500 transition-colors hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
                    >
                        @{profile.githubUsername}
                    </a>
                    <p className="mt-1 text-sm text-black dark:text-neutral-300">{profile.role}</p>
                    <p className="text-sm font-semibold text-black dark:text-neutral-300">
                        {profile.institution}
                    </p>

                    {/* GitHub Stats */}
                    {githubLoading ? (
                        <div className="mt-5 flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-neutral-300 border-t-transparent dark:border-neutral-600" />
                            {t.about.github.loading}
                        </div>
                    ) : githubData ? (
                        <div className="mt-5 grid w-full grid-cols-3 gap-2">
                            <div
                                className={`rounded-lg p-3 text-center ${styles.statsBg} transition-colors`}
                            >
                                <p className={`text-lg font-bold ${styles.statsText}`}>
                                    {githubData.publicRepos}
                                </p>
                                <p className={`text-xs ${styles.statsLabel}`}>
                                    {t.about.github.repositories}
                                </p>
                            </div>
                            <div
                                className={`rounded-lg p-3 text-center ${styles.statsBg} transition-colors`}
                            >
                                <p className={`text-lg font-bold ${styles.statsText}`}>
                                    {githubData.followers}
                                </p>
                                <p className={`text-xs ${styles.statsLabel}`}>
                                    {t.about.github.followers}
                                </p>
                            </div>
                            <div
                                className={`rounded-lg p-3 text-center ${styles.statsBg} transition-colors`}
                            >
                                <p className={`text-lg font-bold ${styles.statsText}`}>
                                    {githubData.following}
                                </p>
                                <p className={`text-xs ${styles.statsLabel}`}>
                                    {t.about.github.following}
                                </p>
                            </div>
                        </div>
                    ) : null}

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
                    <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-neutral-300">
                        {profile.bio}
                    </p>

                    <h4 className="mb-3 text-xl font-semibold text-black dark:text-gray-100">
                        {t.about.interests}
                    </h4>
                    <div className="mb-6 flex flex-wrap gap-2">
                        {profile.interests.map((interest) => (
                            <Pills
                                key={interest}
                                text={interest}
                                variant={styles.interestVariant}
                            />
                        ))}
                    </div>

                    <h4 className="mb-3 text-xl font-semibold text-black dark:text-gray-100">
                        {t.about.technologies}
                    </h4>
                    <div className="mb-6 flex flex-wrap gap-2">
                        {profile.technologies.map((technology) => (
                            <Pills key={technology} text={technology} variant="technology" />
                        ))}
                    </div>

                    {/* GitHub Contributions Calendar */}
                    <h4 className="mb-3 text-xl font-semibold text-black dark:text-gray-100">
                        {t.about.github.contributions}
                    </h4>
                    <div className="overflow-x-auto rounded-lg bg-white p-4 dark:bg-neutral-900">
                        <GitHubCalendar
                            username={profile.githubUsername}
                            colorScheme={theme}
                            theme={calendarThemes[profile.accent]}
                            fontSize={12}
                            blockSize={10}
                            blockMargin={3}
                        />
                    </div>
                </div>
            </div>
        </article>
    );
}
