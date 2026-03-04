import { render, RenderOptions, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { ReactElement, ReactNode } from 'react';

export const mockTranslations = {
    nav: {
        home: 'Home',
        indications: 'Indicacoes',
        about: 'Sobre',
        projects: 'Projetos',
        experiences: 'Experiencias',
        guestbook: 'Guestbook',
        contact: 'Contato',
    },
    footer: {
        copyright: '2024 Dev Resources',
        madeWith: 'Feito com',
        by: 'por',
    },
    common: {
        loading: 'Carregando...',
        error: 'Erro',
        notFound: 'Nao encontrado',
        backToHome: 'Voltar para o inicio',
    },
    home: {
        hero: {
            title: 'Dev',
            titleAccent: 'Resources',
            titleEnd: '',
            description: 'Curadoria de recursos tecnicos',
            exploreButton: 'Explorar',
            learnMoreButton: 'Saiba mais',
        },
        sections: {
            title: 'Secoes',
            subtitle: 'Explore as secoes',
        },
        features: [],
    },
    indications: {
        title: 'Indicacoes',
        subtitle: 'Recursos selecionados',
        search: {
            placeholder: 'Buscar...',
        },
        filters: {
            all: 'Todos',
            category: 'Categoria',
            author: 'Autor',
            favorites: 'Favoritos',
        },
        categories: {},
        pagination: {
            previous: 'Anterior',
            next: 'Proximo',
            page: 'Pagina',
            of: 'de',
        },
        noResults: 'Nenhum resultado encontrado',
    },
    about: {
        title: 'Sobre',
        subtitle: 'Conheca o projeto',
    },
    projects: {
        title: 'Projetos',
        subtitle: 'Nossos projetos',
    },
    experiences: {
        title: 'Experiencias',
        subtitle: 'Nossas experiencias',
    },
    contact: {
        title: 'Contato',
        subtitle: 'Entre em contato',
        form: {
            name: 'Nome',
            email: 'Email',
            message: 'Mensagem',
            submit: 'Enviar',
        },
        toast: {
            success: 'Mensagem enviada!',
            error: 'Erro ao enviar',
        },
    },
    guestbook: {
        title: 'Guestbook',
        subtitle: 'Deixe sua mensagem',
        form: {
            name: 'Nome',
            message: 'Mensagem',
            submit: 'Enviar',
            namePlaceholder: 'Seu nome',
            messagePlaceholder: 'Sua mensagem',
        },
        toast: {
            success: 'Mensagem adicionada!',
            error: 'Erro ao adicionar',
            fillAllFields: 'Preencha todos os campos',
        },
        entries: {
            title: 'Mensagens',
            loading: 'Carregando...',
            error: 'Erro ao carregar',
            empty: 'Nenhuma mensagem ainda',
        },
    },
};

export const mockData = {
    team: [
        { id: 1, name: 'Artur', role: 'Dev', avatar: '/avatar.png' },
        { id: 2, name: 'Eduarda', role: 'Dev', avatar: '/avatar.png' },
    ],
    aboutMembers: [],
    projects: [
        {
            id: 1,
            title: 'Projeto Teste',
            description: 'Descricao do projeto',
            image: '/project.png',
            tags: ['React', 'TypeScript'],
            github: 'https://github.com/test',
            demo: 'https://demo.com',
        },
    ],
    indications: [
        {
            id: 1,
            title: 'React Docs',
            description: 'Documentacao oficial do React',
            url: 'https://react.dev',
            category: 'documentation',
            indicatedBy: 'Artur',
            tags: ['react', 'docs'],
        },
        {
            id: 2,
            title: 'TypeScript Handbook',
            description: 'Guia oficial do TypeScript',
            url: 'https://typescript.org',
            category: 'documentation',
            indicatedBy: 'Eduarda',
            tags: ['typescript', 'docs'],
        },
        {
            id: 3,
            title: 'Tailwind CSS',
            description: 'Framework CSS utility-first',
            url: 'https://tailwindcss.com',
            category: 'tools',
            indicatedBy: 'Artur',
            tags: ['css', 'framework'],
        },
    ],
    experiences: {
        items: [],
    },
    links: [],
};

interface MockI18nProviderProps {
    children: ReactNode;
    locale?: 'pt' | 'en';
}

const MockI18nContext = React.createContext<{
    locale: 'pt' | 'en';
    setLocale: jest.Mock;
    t: typeof mockTranslations;
    data: typeof mockData;
}>({
    locale: 'pt',
    setLocale: jest.fn(),
    t: mockTranslations,
    data: mockData,
});

export function MockI18nProvider({ children, locale = 'pt' }: MockI18nProviderProps) {
    return (
        <MockI18nContext.Provider
            value={{
                locale,
                setLocale: jest.fn(),
                t: mockTranslations,
                data: mockData,
            }}
        >
            {children}
        </MockI18nContext.Provider>
    );
}

export const mockUseI18n = () => React.useContext(MockI18nContext);

interface AllProvidersProps {
    children: ReactNode;
}

function AllProviders({ children }: AllProvidersProps) {
    return <MockI18nProvider>{children}</MockI18nProvider>;
}

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
    locale?: 'pt' | 'en';
}

export function renderWithProviders(
    ui: ReactElement,
    options?: CustomRenderOptions
): RenderResult & { user: ReturnType<typeof userEvent.setup> } {
    const { locale = 'pt', ...renderOptions } = options || {};

    const Wrapper = ({ children }: { children: ReactNode }) => (
        <MockI18nProvider locale={locale}>{children}</MockI18nProvider>
    );

    const user = userEvent.setup();

    return {
        user,
        ...render(ui, { wrapper: Wrapper, ...renderOptions }),
    };
}

export * from '@testing-library/react';
export { userEvent };

export const waitFor = async (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const createMockGuestbookEntry = (overrides = {}) => ({
    id: Math.random().toString(36).substring(7),
    name: 'Test User',
    message: 'Test message',
    created_at: new Date().toISOString(),
    ...overrides,
});

export const createMockIndication = (overrides = {}) => ({
    id: Math.floor(Math.random() * 1000),
    title: 'Test Indication',
    description: 'Test description',
    url: 'https://test.com',
    category: 'documentation',
    indicatedBy: 'Test Author',
    tags: ['test'],
    ...overrides,
});