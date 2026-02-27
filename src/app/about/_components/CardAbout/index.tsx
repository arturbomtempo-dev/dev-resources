import { IconBox } from '@/components/IconBox';
import {
    GithubLogoIcon,
    GlobeIcon,
    InstagramLogoIcon,
    LinkedinLogoIcon,
} from '@phosphor-icons/react';
import { Pills } from '../Pills';

const interests = ['Frontend', 'UI/UX Design', 'APIs', 'Banco de dados'];
const technologies = ['React', 'Next.js', 'Tailwind CSS', 'Figma', 'Typescript', 'Node.js'];

export function CardAbout() {
    return (
        <article className="rounded-xl border border-pink-200 bg-pink-50/30 p-6 md:p-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[320px_1fr]">
                <div className="flex flex-col items-center text-center">
                    <div className="mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-linear-to-br from-pink-100 to-pink-200 text-2xl font-semibold text-pink-600">
                        EV
                    </div>

                    <h3 className="text-2xl font-semibold text-black">Eduarda Vieira</h3>
                    <p className="mt-1 text-sm text-black">Estudante de Engenharia de Software</p>
                    <p className="text-sm font-semibold text-black">PUC Minas</p>

                    <div className="mt-5 flex flex-wrap justify-center gap-2">
                        <IconBox
                            icon={GithubLogoIcon}
                            bgColor="bg-pink-100 hover:bg-pink-200"
                            iconColor="text-pink-500"
                            size={18}
                            href="https://github.com/eduardavieira-dev"
                            className="h-8 w-8 rounded-md"
                        />
                        <IconBox
                            icon={LinkedinLogoIcon}
                            bgColor="bg-pink-100 hover:bg-pink-200"
                            iconColor="text-pink-500"
                            size={18}
                            href="https://www.linkedin.com/in/eduarda-vieira-gon%C3%A7alves-01a584297/"
                            className="h-8 w-8 rounded-md"
                        />
                        <IconBox
                            icon={InstagramLogoIcon}
                            bgColor="bg-pink-100 hover:bg-pink-200"
                            iconColor="text-pink-500"
                            size={18}
                            href="https://www.instagram.com/eduardavieira.dev/"
                            className="h-8 w-8 rounded-md"
                        />
                        <IconBox
                            icon={GlobeIcon}
                            bgColor="bg-pink-100 hover:bg-pink-200"
                            iconColor="text-pink-500"
                            size={18}
                            href="https://portifolio-eduardavieira.vercel.app/"
                            className="h-8 w-8 rounded-md"
                        />
                    </div>
                </div>

                <div>
                    <p className="mb-6 text-lg leading-relaxed text-gray-700">
                        Desenvolvedora frontend apaixonada por design, UX e tecnologias web
                        modernas. Acredita que a tecnologia deve ser acessível e bonita.
                    </p>

                    <h4 className="mb-3 text-xl font-semibold text-black">Áreas de interesse</h4>
                    <div className="mb-6 flex flex-wrap gap-2">
                        {interests.map((interest) => (
                            <Pills key={interest} text={interest} variant="interestEduarda" />
                        ))}
                    </div>

                    <h4 className="mb-3 text-xl font-semibold text-black">Stack de Tecnologias</h4>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((technology) => (
                            <Pills key={technology} text={technology} variant="technology" />
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}
