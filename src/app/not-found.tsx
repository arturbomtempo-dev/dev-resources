'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n/I18nProvider';

export default function NotFound() {
    const { t } = useI18n();

    return (
        <main className="flex min-h-[calc(100vh-200px)] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 md:flex-row md:gap-12 lg:gap-16">
                <div className="flex w-full justify-center md:w-1/2 md:justify-end">
                    <div className="relative h-50 w-70 sm:h-62.5 sm:w-87.5 md:h-70 md:w-100">
                        <Image
                            src="/not-found/dino.png"
                            alt="Dinosaur illustration"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                <div className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
                    <h1 className="font-family-manrope text-7xl font-semibold text-[#00786F] sm:text-8xl lg:text-9xl">
                        {t.common.notFound.code}
                    </h1>

                    <p className="font-family-manrope mt-4 text-xl font-bold text-neutral-600 sm:text-2xl">
                        {t.common.notFound.text}
                    </p>

                    <Link
                        href="/"
                        className="font-family-manrope mt-8 inline-flex items-center justify-center rounded-full bg-linear-to-l from-[#00BBA7] to-[#009689] px-6 py-2.5 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:px-8 sm:py-3 sm:text-base"
                    >
                        {t.common.notFound.button}
                    </Link>
                </div>
            </div>
        </main>
    );
}
