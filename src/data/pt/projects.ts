import type { Project } from '../types';

export const projects: Project[] = [
    {
        id: 1,
        title: 'DevResources',
        description:
            'Plataforma colaborativa de curadoria de recursos para desenvolvimento de software e aprendizado contínuo.',
        longDescription:
            'DevResources é uma plataforma educacional colaborativa desenvolvida durante o quarto período do curso de Engenharia de Software na PUC Minas, na disciplina de Laboratório de Desenvolvimento de Software. O projeto funciona como um repositório centralizado de recursos, ferramentas, cursos e materiais selecionados para auxiliar desde estudantes iniciantes até profissionais experientes da área de desenvolvimento. Através de uma interface intuitiva e bem estruturada, a plataforma facilita a descoberta e o compartilhamento de conteúdo de qualidade, demonstrando os princípios de colaboração, escalabilidade e design focado no usuário.',
        imageUrl:
            'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/dev-resources/home.png',
        imageAlt: 'Página inicial do DevResources',
        repositoryUrl: 'https://github.com/arturbomtempo-dev/dev-resources',
        demoUrl: 'https://devresources-artur-eduarda.vercel.app/',
        tags: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Supabase', 'Jest', 'Playwright', 'i18n'],
        featured: true,
        authorIds: [1, 2],
        screenshots: [
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/dev-resources/home.png',
                caption: 'Página inicial com curadoria de recursos para desenvolvedores',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/dev-resources/indications.png',
                caption: 'Seção de indicações com recursos selecionados pela comunidade',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/dev-resources/about.png',
                caption: 'Seção sobre o projeto e os desenvolvedores',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/dev-resources/projects.png',
                caption: 'Portfólio de projetos colaborativos da equipe',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/dev-resources/experiences.png',
                caption: 'Histórico detalhado de experiências profissionais e acadêmicas',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/dev-resources/guestbook.png',
                caption: 'Livro de visitas da comunidade com depoimentos',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/dev-resources/contact.png',
                caption: 'Página de contato para comunicação direta',
            },
        ],
    },
    {
        id: 2,
        title: 'Studio Ghibli API',
        description:
            'Projeto educacional interativo para aprender consumo de APIs e gerenciamento de estado com React.',
        longDescription:
            'Desenvolvido como material didático para um workshop de React, este projeto exemplifica os fundamentos essenciais do consumo de APIs e gerenciamento de estado no desenvolvimento web. A aplicação apresenta um catálogo visual e interativo de filmes e diretores do Studio Ghibli, permitindo aos usuários explorar informações detalhadas sobre suas obras-primas. Através de uma interface moderna e responsiva, o projeto serve como base prática para que iniciantes compreendam conceitos-chave do React, consolidando aprendizados teóricos em uma experiência real e envolvente.',
        imageUrl:
            'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/studio-ghibli-api/hero-section.png',
        imageAlt: 'Hero section do projeto Studio Ghibli API',
        repositoryUrl: 'https://github.com/arturbomtempo-dev/react-app-workshop',
        demoUrl: 'https://studio-ghibli-react.vercel.app/',
        tags: ['React.js', 'Tailwind CSS', 'TypeScript'],
        featured: false,
        authorIds: [1, 2],
        screenshots: [
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/studio-ghibli-api/hero-section.png',
                caption: 'Hero section com apresentação do projeto',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/studio-ghibli-api/directos-and-films-section.png',
                caption: 'Seção de diretores e filmes do Studio Ghibli',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/studio-ghibli-api/films.png',
                caption: 'Catálogo detalhado de filmes com informações',
            },
        ],
    },
    {
        id: 3,
        title: 'Christmas 2024',
        description:
            'Experiência interativa de Natal com integração de chatbot inteligente e website imersivo.',
        longDescription:
            'Projeto especial desenvolvido com o objetivo de oferecer uma experiência natalina única e personalizada através da integração de um chatbot inteligente com um website dedicado. A aplicação combina tecnologias modernas para criar uma plataforma conversacional que interage com os usuários, entregando mensagens de Natal personalizadas e conteúdo temático envolvente. O design cuidadoso e a implementação técnica criam uma jornada imersiva que celebra a época festiva de forma inovadora.',
        imageUrl:
            'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/christmas-2024/chatbot.png',
        imageAlt: 'ChatBot do projeto Christmas 2024',
        repositoryUrl: 'https://github.com/eduardavieira-dev/Christmas24?tab=readme-ov-file',
        demoUrl:
            'https://artur-eduarda-bomtempo-pmo18.chat.blip.ai/?appKey=Y2hyaXMzOjk5YTQxNjVjLTNlYmMtNGY4OS04MDAyLTBhNDdkMTMzYTY3ZA%3D%3D&_gl=1*18au3ou*_gcl_au*OTE2Mzc1MjU2LjE3MzA4OTQ3MTQ.*_ga*MjM5NzcwNjY0LjE3MjI0Mzc1NTg.*_ga_8GVWK8YMGL*MTczNTA1NDQwOC4xMS4xLjE3MzUwNTk4MDQuMTEuMC41Nzc1OTg0MTg',
        tags: ['Blip', 'TypeScript', 'Node.js', 'Express.js', 'HTML', 'CSS', 'JavaScript'],
        featured: false,
        authorIds: [1, 2],
        screenshots: [
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/christmas-2024/chatbot.png',
                caption: 'Interface do chatbot conversacional',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/christmas-2024/section-01.png',
                caption: 'Primeira seção da página de Natal',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/christmas-2024/section-02.png',
                caption: 'Segunda seção com conteúdo temático',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/christmas-2024/section-03.png',
                caption: 'Terceira seção da experiência',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/christmas-2024/section-04.png',
                caption: 'Quarta seção do projeto',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/christmas-2024/section-05.png',
                caption: 'Quinta seção finalizando a experiência',
            },
        ],
    },
    {
        id: 4,
        title: 'Craft API',
        description:
            'Explorador interativo de elementos do Minecraft com API personalizada e design imersivo.',
        longDescription:
            'Desenvolvido na disciplina de Framework do curso técnico de Desenvolvimento Web e Mobile, este projeto consolida o aprendizado avançado sobre consumo de APIs, gerenciamento de estado com React Hooks e desenvolvimento full-stack com Node.js e Express. A aplicação permite explorar e consultar informações detalhadas sobre mobs, equipamentos e minérios do Minecraft através de uma API desenvolvida especificamente para o projeto. A interface visual, inspirada na estética pixelada do jogo, oferece uma experiência imersiva que combina funcionalidade com design contextual, tornando a descoberta de informações intuitiva e agradável.',
        imageUrl:
            'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/craft-api/mobs.png',
        imageAlt: 'Seção de mobs do projeto Craft API',
        repositoryUrl: 'https://github.com/arturbomtempo-dev/craft-api',
        demoUrl: 'https://craft-api.vercel.app/',
        tags: [
            'React.js',
            'JavaScript',
            'TypeScript',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Swagger',
        ],
        featured: false,
        authorIds: [1],
        screenshots: [
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/craft-api/hero.png',
                caption: 'Página inicial do explorador Craft',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/craft-api/mobs.png',
                caption: 'Catálogo interativo de mobs do Minecraft',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/craft-api/equipment.png',
                caption: 'Listagem completa de equipamentos do jogo',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/craft-api/ores.png',
                caption: 'Seção de minérios com informações detalhadas',
            },
        ],
    },
    {
        id: 5,
        title: 'Portfólio de Artur Bomtempo',
        description:
            'Portfólio profissional moderno que apresenta trajetória, habilidades e projetos de forma clara e responsiva.',
        longDescription:
            'A versão mais recente do portfólio pessoal desenvolvido com React e tecnologias modernas, apresentando uma síntese cuidadosa da trajetória profissional, competências técnicas e projetos realizados. A plataforma foi construída com ênfase em performance, responsividade e acessibilidade, refletindo tanto as capacidades técnicas quanto o senso estético do desenvolvedor. O design limpo e intuitivo facilita a navegação e a descoberta de informações, criando uma impressão profissional e moderna que comunica claramente a visão e os valores do desenvolvedor.',
        imageUrl:
            'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/portfolio/home.png',
        imageAlt: 'Página inicial do portfólio de Artur Bomtempo',
        repositoryUrl: 'https://github.com/arturbomtempo-dev/portfolio',
        demoUrl: 'https://www.arturbomtempo.dev/',
        tags: ['React.js', 'Tailwind CSS', 'TypeScript', 'i18n'],
        featured: false,
        authorIds: [1],
        screenshots: [
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/portfolio/home.png',
                caption: 'Página inicial com apresentação profissional',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/portfolio/about.png',
                caption: 'Seção sobre experiência e trajetória',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/portfolio/projects.png',
                caption: 'Portfólio de projetos realizados',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/portfolio/content.png',
                caption: 'Conteúdo e detalhes adicionais',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/portfolio/contact.png',
                caption: 'Página de contato e redes profissionais',
            },
        ],
    },
    {
        id: 6,
        title: 'Portfólio de Eduarda Vieira',
        description:
            'Portfólio profissional que apresenta experiências acadêmicas, profissionais e habilidades técnicas.',
        longDescription:
            'Portfólio profissional desenvolvido para compartilhar e apresentar as experiências acadêmicas e profissionais, bem como as competências técnicas e trajetória de desenvolvimento de Eduarda Vieira. A plataforma oferece uma visão abrangente das áreas de atuação, tecnologias dominadas e experiências vivenciadas, facilitando conexões profissionais e oportunidades de colaboração. Desenvolvido com as tecnologias web mais modernas, o portfólio reflete qualidade técnica e atenção ao design, criando um espaço profissional que comunica competência e dedicação.',
        imageUrl:
            'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/eduarda-vieira-portfolio/hero.png',
        imageAlt: 'Hero do portfólio de Eduarda Vieira',
        repositoryUrl: 'https://github.com/eduardavieira-dev/Portfolio',
        demoUrl: 'https://portfolio-eduardavieira.vercel.app/',
        tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
        featured: false,
        authorIds: [2],
        screenshots: [
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/eduarda-vieira-portfolio/hero.png',
                caption: 'Seção hero com apresentação',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/eduarda-vieira-portfolio/about.png',
                caption: 'Seção sobre experiência profissional',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/eduarda-vieira-portfolio/projects.png',
                caption: 'Projetos desenvolvidos',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/eduarda-vieira-portfolio/skills.png',
                caption: 'Habilidades técnicas dominadas',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/eduarda-vieira-portfolio/experiences.png',
                caption: 'Histórico de experiências',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/eduarda-vieira-portfolio/contact.png',
                caption: 'Página de contato e redes profissionais',
            },
        ],
    },
];

export const getAllProjects = (): Project[] => projects;

export const getFeaturedProjects = (): Project[] => projects.filter((project) => project.featured);

export const getProjectById = (id: number): Project | undefined =>
    projects.find((project) => project.id === id);
