import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Toaster } from '@/components/ui/sonner';
import { I18nProvider } from '@/lib/i18n/I18nProvider';
import { ThemeProvider } from '@/lib/theme/ThemeProvider';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Manrope, Varela_Round } from 'next/font/google';
import './globals.css';

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
    display: 'swap',
});

const manrope = Manrope({
    variable: '--font-manrope',
    subsets: ['latin'],
    display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
    variable: '--font-jetbrains-mono',
    subsets: ['latin'],
    display: 'swap',
});

const varelaRound = Varela_Round({
    variable: '--font-varela-round',
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'DevResources',
    description: 'Hub colaborativo de curadoria digital, projetos e experiências em tecnologia',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body
                className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable} ${varelaRound.variable} font-family-inter flex min-h-screen flex-col antialiased`}
            >
                <ThemeProvider>
                    <I18nProvider>
                        <Header />
                        <main className="flex-1">{children}</main>
                        <Footer />
                        <Toaster position="top-center" />
                    </I18nProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
