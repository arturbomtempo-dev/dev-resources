import type { Project } from '../types';

export const projects: Project[] = [
    {
        id: 1,
        title: 'DevResources',
        description:
            'Collaborative platform for curating development resources and continuous learning.',
        longDescription:
            'DevResources is a collaborative educational platform developed during the fourth semester of the Software Engineering course at PUC Minas, in the Software Development Laboratory discipline. The project functions as a centralized repository of carefully selected resources, tools, courses and materials designed to assist both beginner students and experienced professionals in the development field. Through an intuitive and well-structured interface, the platform facilitates the discovery and sharing of quality content, demonstrating principles of collaboration, scalability and user-centered design.',
        imageUrl:
            'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/dev-resources/home.png',
        imageAlt: 'DevResources home page',
        repositoryUrl: 'https://github.com/arturbomtempo-dev/dev-resources',
        demoUrl: 'https://devresources-artur-eduarda.vercel.app/',
        tags: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Supabase', 'Jest', 'Playwright', 'i18n'],
        featured: true,
        authorIds: [1, 2],
        screenshots: [
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/dev-resources/home.png',
                caption: 'Home page with curated resources for developers',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/dev-resources/indications.png',
                caption: 'Indications section with community-selected resources',
            },
            {
                imageUrl:
                    '/about.png',
                caption: 'About section with project and developer information',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/dev-resources/projects.png',
                caption: 'Portfolio of collaborative team projects',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/dev-resources/experiences.png',
                caption: 'Detailed history of professional and academic experiences',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/dev-resources/guestbook.png',
                caption: 'Community guestbook with testimonials',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/dev-resources/contact.png',
                caption: 'Contact page for direct communication',
            },
        ],
    },
    {
        id: 2,
        title: 'Studio Ghibli API',
        description:
            'Interactive educational project to learn API consumption and state management with React.',
        longDescription:
            'Developed as educational material for a React workshop, this project exemplifies the fundamental concepts of API consumption and state management in web development. The application presents a visual and interactive catalog of films and directors from Studio Ghibli, allowing users to explore detailed information about their masterpieces. Through a modern and responsive interface, the project serves as a practical foundation for beginners to understand key React concepts, consolidating theoretical learning into a real and engaging experience.',
        imageUrl:
            'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/studio-ghibli-api/hero-section.png',
        imageAlt: 'Studio Ghibli API project hero section',
        repositoryUrl: 'https://github.com/arturbomtempo-dev/react-app-workshop',
        demoUrl: 'https://studio-ghibli-react.vercel.app/',
        tags: ['React.js', 'Tailwind CSS', 'TypeScript'],
        featured: false,
        authorIds: [1, 2],
        screenshots: [
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/studio-ghibli-api/hero-section.png',
                caption: 'Hero section with project presentation',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/studio-ghibli-api/directos-and-films-section.png',
                caption: 'Directors and Studio Ghibli films section',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/studio-ghibli-api/films.png',
                caption: 'Detailed film catalog with comprehensive information',
            },
        ],
    },
    {
        id: 3,
        title: 'Christmas 2024',
        description:
            'Interactive Christmas experience with intelligent chatbot integration and immersive website.',
        longDescription:
            'A special project developed to offer a unique and personalized Christmas experience through the integration of an intelligent chatbot with a dedicated website. The application combines modern technologies to create a conversational platform that interacts with users, delivering personalized Christmas messages and engaging themed content. The thoughtful design and technical implementation create an immersive journey that celebrates the festive season in an innovative way.',
        imageUrl:
            'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/christmas-2024/section-01.png',
        imageAlt: 'Christmas 2024 project chatbot',
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
                caption: 'Conversational chatbot interface',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/christmas-2024/section-01.png',
                caption: 'First section of Christmas page',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/christmas-2024/section-02.png',
                caption: 'Second section with themed content',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/christmas-2024/section-03.png',
                caption: 'Third section of experience',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/christmas-2024/section-04.png',
                caption: 'Fourth section of the project',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/christmas-2024/section-05.png',
                caption: 'Fifth section concluding the experience',
            },
        ],
    },
    {
        id: 4,
        title: 'Craft API',
        description: 'Interactive Minecraft element explorer with custom API and immersive design.',
        longDescription:
            "Developed in the Framework discipline of the Web and Mobile Development technical course, this project consolidates advanced learning about API consumption, state management with React Hooks, and full-stack development with Node.js and Express. The application allows exploring and querying detailed information about mobs, equipment, and ores from Minecraft through an API developed specifically for the project. The visual interface, inspired by the game's pixelated aesthetic, offers an immersive experience that combines functionality with contextual design, making information discovery intuitive and enjoyable.",
        imageUrl:
            'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/craft-api/mobs.png',
        imageAlt: 'Craft API mobs section',
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
                caption: 'Craft explorer home page',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/craft-api/mobs.png',
                caption: 'Interactive Minecraft mobs catalog',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/craft-api/equipment.png',
                caption: 'Complete game equipment listing',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/craft-api/ores.png',
                caption: 'Ores section with detailed information',
            },
        ],
    },
    {
        id: 5,
        title: "Artur Bomtempo's Portfolio",
        description:
            'Modern professional portfolio presenting career path, skills and projects clearly and responsively.',
        longDescription:
            "The latest version of a personal portfolio developed with React and modern technologies, presenting a careful synthesis of professional trajectory, technical skills, and completed projects. The platform was built with emphasis on performance, responsiveness, and accessibility, reflecting both the developer's technical abilities and aesthetic sense. The clean and intuitive design facilitates navigation and information discovery, creating a professional and modern impression that clearly communicates the developer's vision and values.",
        imageUrl:
            'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/portfolio/home.png',
        imageAlt: 'Artur Bomtempo portfolio home page',
        repositoryUrl: 'https://github.com/arturbomtempo-dev/portfolio',
        demoUrl: 'https://www.arturbomtempo.dev/',
        tags: ['React.js', 'Tailwind CSS', 'TypeScript', 'i18n'],
        featured: false,
        authorIds: [1],
        screenshots: [
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/portfolio/home.png',
                caption: 'Home page with professional presentation',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/portfolio/about.png',
                caption: 'About section with experience and trajectory',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/portfolio/projects.png',
                caption: 'Portfolio of completed projects',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/portfolio/content.png',
                caption: 'Content and additional details',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/portfolio/contact.png',
                caption: 'Contact page and professional networks',
            },
        ],
    },
    {
        id: 6,
        title: "Eduarda Vieira's Portfolio",
        description:
            'Professional portfolio presenting academic, professional experiences and technical skills.',
        longDescription:
            'A professional portfolio developed to share and present academic and professional experiences, as well as technical skills and development trajectory of Eduarda Vieira. The platform offers a comprehensive view of areas of practice, technologies mastered, and experiences gained, facilitating professional connections and collaboration opportunities. Developed with the most modern web technologies, the portfolio reflects technical quality and design attention, creating a professional space that communicates competence and dedication.',
        imageUrl:
            '/home-duda.png',
        imageAlt: 'Eduarda Vieira portfolio hero',
        repositoryUrl: 'https://github.com/eduardavieira-dev/Portfolio',
        demoUrl: 'https://portfolio-eduardavieira.vercel.app/',
        tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
        featured: false,
        authorIds: [2],
        screenshots: [
            {
                imageUrl:
                    '/home-duda.png',
                caption: 'Hero section with introduction',
            },
            {
                imageUrl:
                    '/about-duda.png',
                caption: 'About section with professional experience',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/eduarda-vieira-portfolio/projects.png',
                caption: 'Completed projects',
            },
            {
                imageUrl:
                    '/skills-duda.png',
                caption: 'Technical skills mastered',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/eduarda-vieira-portfolio/experiences.png',
                caption: 'Experience history',
            },
            {
                imageUrl:
                    'https://arturbomtempo-dev.github.io/artur-bomtempo-cdn/assets/images/projects/eduarda-vieira-portfolio/contact.png',
                caption: 'Contact page and professional networks',
            },
        ],
    },
];

export const getAllProjects = (): Project[] => projects;

export const getFeaturedProjects = (): Project[] => projects.filter((project) => project.featured);

export const getProjectById = (id: number): Project | undefined =>
    projects.find((project) => project.id === id);
