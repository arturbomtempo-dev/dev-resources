'use client';

import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { defaultLocale, Locale } from '@/config/i18n';

import { common as ptCommon } from '@/data/pt/common';
import { home as ptHome } from '@/data/pt/home';
import { indicationsUI as ptIndicationsUI } from '@/data/pt/indications-ui';
import { aboutUI as ptAboutUI } from '@/data/pt/about-ui';
import { projectsUI as ptProjectsUI } from '@/data/pt/projects-ui';
import { experiencesUI as ptExperiencesUI } from '@/data/pt/experiences-ui';
import { contactUI as ptContactUI } from '@/data/pt/contact-ui';

import { common as enCommon } from '@/data/en/common';
import { home as enHome } from '@/data/en/home';
import { indicationsUI as enIndicationsUI } from '@/data/en/indications-ui';
import { aboutUI as enAboutUI } from '@/data/en/about-ui';
import { projectsUI as enProjectsUI } from '@/data/en/projects-ui';
import { experiencesUI as enExperiencesUI } from '@/data/en/experiences-ui';
import { contactUI as enContactUI } from '@/data/en/contact-ui';

import { team as ptTeam } from '@/data/pt/team';
import { team as enTeam } from '@/data/en/team';

import { aboutMembers as ptAboutMembers } from '@/data/pt/team';
import { aboutMembers as enAboutMembers } from '@/data/en/team';

import { projects as ptProjects } from '@/data/pt/projects';
import { projects as enProjects } from '@/data/en/projects';

import { indications as ptIndications } from '@/data/pt/indications';
import { indications as enIndications } from '@/data/en/indications';

import { experiences as ptExperiences } from '@/data/pt/experiences';
import { experiences as enExperiences } from '@/data/en/experiences';

import { links as ptLinks } from '@/data/pt/links';
import { links as enLinks } from '@/data/en/links';

import type { TeamMember, AboutMember, Project, Indication, Link } from '@/data/types';
import type { ExperiencesData } from '@/data/pt/experiences';
import type { CommonTranslations } from '@/data/pt/common';
import type { HomeTranslations } from '@/data/pt/home';
import type { IndicationsUITranslations } from '@/data/pt/indications-ui';
import type { AboutUITranslations } from '@/data/pt/about-ui';
import type { ProjectsUITranslations } from '@/data/pt/projects-ui';
import type { ExperiencesUITranslations } from '@/data/pt/experiences-ui';
import type { ContactUITranslations } from '@/data/pt/contact-ui';

export interface UITranslations {
    nav: CommonTranslations['nav'];
    footer: CommonTranslations['footer'];
    common: Omit<CommonTranslations, 'nav' | 'footer'>;
    home: HomeTranslations;
    indications: IndicationsUITranslations;
    about: AboutUITranslations;
    projects: ProjectsUITranslations;
    experiences: ExperiencesUITranslations;
    contact: ContactUITranslations;
}

interface LocaleData {
    ui: UITranslations;
    team: TeamMember[];
    aboutMembers: AboutMember[];
    projects: Project[];
    indications: Indication[];
    experiences: ExperiencesData;
    links: Link[];
}

const ptUI: UITranslations = {
    nav: ptCommon.nav,
    footer: ptCommon.footer,
    common: {
        loading: ptCommon.loading,
        error: ptCommon.error,
        notFound: ptCommon.notFound,
        backToHome: ptCommon.backToHome,
    },
    home: ptHome,
    indications: ptIndicationsUI,
    about: ptAboutUI,
    projects: ptProjectsUI,
    experiences: ptExperiencesUI,
    contact: ptContactUI,
};

const enUI: UITranslations = {
    nav: enCommon.nav,
    footer: enCommon.footer,
    common: {
        loading: enCommon.loading,
        error: enCommon.error,
        notFound: enCommon.notFound,
        backToHome: enCommon.backToHome,
    },
    home: enHome,
    indications: enIndicationsUI,
    about: enAboutUI,
    projects: enProjectsUI,
    experiences: enExperiencesUI,
    contact: enContactUI,
};

const localeData: Record<Locale, LocaleData> = {
    pt: {
        ui: ptUI,
        team: ptTeam,
        aboutMembers: ptAboutMembers,
        projects: ptProjects,
        indications: ptIndications,
        experiences: ptExperiences,
        links: ptLinks,
    },
    en: {
        ui: enUI,
        team: enTeam,
        aboutMembers: enAboutMembers,
        projects: enProjects,
        indications: enIndications,
        experiences: enExperiences,
        links: enLinks,
    },
};

interface I18nContextValue {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: UITranslations;
    data: Omit<LocaleData, 'ui'>;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

const LOCALE_STORAGE_KEY = 'devresources-locale';

export function I18nProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>(defaultLocale);
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        const storedLocale = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
        if (storedLocale && (storedLocale === 'pt' || storedLocale === 'en')) {
            setLocaleState(storedLocale);
        }
        setIsHydrated(true);
    }, []);

    const setLocale = useCallback((newLocale: Locale) => {
        setLocaleState(newLocale);
        localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
    }, []);

    const currentData = localeData[locale];

    const value: I18nContextValue = {
        locale,
        setLocale,
        t: currentData.ui,
        data: {
            team: currentData.team,
            aboutMembers: currentData.aboutMembers,
            projects: currentData.projects,
            indications: currentData.indications,
            experiences: currentData.experiences,
            links: currentData.links,
        },
    };

    if (!isHydrated) {
        return null;
    }

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error('useI18n must be used within I18nProvider');
    }
    return context;
}
