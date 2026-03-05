# 🧪 Guia de Testes - Dev Resources

Este documento explica como os testes foram configurados e como usá-los no projeto.

## 📚 Índice

- [Tipos de Testes](#tipos-de-testes)
- [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Jest - Testes Unitários e de Integração](#jest---testes-unitários-e-de-integração)
- [Playwright - Testes E2E](#playwright---testes-e2e)
- [Mocks - O que são e como usar](#mocks---o-que-são-e-como-usar)
- [Boas Práticas](#boas-práticas)
- [Troubleshooting](#troubleshooting)

---

## Tipos de Testes

### 🔬 Testes Unitários (Jest)

- **O que testam:** Uma única função ou componente, isolado de suas dependências
- **Velocidade:** Muito rápidos (milissegundos)
- **Quando usar:** Para lógica de negócio, hooks, funções utilitárias
- **Exemplo:** Testar se o `useFavorites` adiciona corretamente um favorito

### 🔗 Testes de Integração (Jest)

- **O que testam:** Múltiplos componentes trabalhando juntos
- **Velocidade:** Rápidos (segundos)
- **Quando usar:** Para verificar se componentes se comunicam corretamente
- **Exemplo:** Testar se a busca filtra os cards na página de indicações

### 🌐 Testes E2E (Playwright)

- **O que testam:** A aplicação completa em um navegador real
- **Velocidade:** Mais lentos (segundos a minutos)
- **Quando usar:** Para fluxos críticos do usuário
- **Exemplo:** Navegar pela aplicação, preencher formulários, verificar resultados

---

## Estrutura de Arquivos

```
dev-resources/
├── e2e/                          # Testes E2E (Playwright)
│   ├── navigation.spec.ts        # Testes de navegação
│   ├── indications.spec.ts       # Testes da página de indicações
│   ├── guestbook.spec.ts         # Testes do guestbook
│   └── theme-i18n.spec.ts        # Testes de tema e idioma
│
├── src/
│   ├── __mocks__/                # Mocks globais
│   │   └── fileMock.ts           # Mock para arquivos estáticos
│   │
│   ├── test-utils/               # Utilitários de teste
│   │   └── index.tsx             # Helpers, mocks de providers
│   │
│   ├── hooks/
│   │   └── __tests__/            # Testes de hooks globais
│   │       └── useGuestbook.test.ts
│   │
│   ├── components/
│   │   └── Title/
│   │       └── __tests__/
│   │           └── Title.test.tsx
│   │
│   └── app/
│       ├── indications/
│       │   ├── __tests__/
│       │   │   └── Indications.integration.test.tsx
│       │   └── _hooks/
│       │       └── __tests__/
│       │           └── useFavorites.test.ts
│       │
│       └── guestbook/
│           └── _components/
│               ├── GuestbookForm/
│               │   └── __tests__/
│               │       └── GuestbookForm.test.tsx
│               └── GuestbookCard/
│                   └── __tests__/
│                       └── GuestbookCard.test.tsx
│
├── jest.config.ts                # Configuração do Jest
├── jest.setup.ts                 # Setup global do Jest
├── playwright.config.ts          # Configuração do Playwright
├── test-results/                 # Resultados dos testes E2E
├── playwright-report/            # Relatório HTML do Playwright
└── coverage/                     # Relatório de cobertura do Jest
```

---

## Scripts Disponíveis

### Jest (Testes Unitários/Integração)

```bash
# Executa todos os testes uma vez
npm test

# Executa em modo watch (re-executa quando arquivos mudam)
npm run test:watch

# Executa com relatório de cobertura
npm run test:coverage

# Executa em modo CI (otimizado para pipelines)
npm run test:ci
```

### Playwright (Testes E2E)

```bash
# Executa todos os testes E2E
npm run test:e2e

# Abre interface visual do Playwright
npm run test:e2e:ui

# Executa em modo debug (passo a passo)
npm run test:e2e:debug

# Abre o relatório HTML
npm run test:e2e:report
```

### Todos os Testes

```bash
# Executa Jest + Playwright
npm run test:all
```

---

## Jest - Testes Unitários e de Integração

### Anatomia de um Teste

```typescript
// describe: agrupa testes relacionados
describe('useFavorites Hook', () => {
    // beforeEach: executa antes de cada teste
    beforeEach(() => {
        localStorage.clear();
    });

    // it ou test: define um teste individual
    it('deve adicionar um favorito', () => {
        // ARRANGE (Preparar)
        const { result } = renderHook(() => useFavorites());

        // ACT (Agir)
        act(() => {
            result.current.toggleFavorite(1);
        });

        // ASSERT (Verificar)
        expect(result.current.isFavorite(1)).toBe(true);
    });
});
```

### Matchers Comuns

```typescript
// Igualdade
expect(value).toBe(1); // Igualdade estrita (===)
expect(value).toEqual({ a: 1 }); // Igualdade profunda
expect(value).toBeTruthy(); // Verdadeiro
expect(value).toBeFalsy(); // Falso

// Negação
expect(value).not.toBe(2);

// Arrays
expect(array).toContain(item);
expect(array).toHaveLength(3);

// DOM (jest-dom)
expect(element).toBeInTheDocument();
expect(element).toBeVisible();
expect(element).toHaveTextContent('Hello');
expect(input).toHaveValue('test');
expect(button).toBeDisabled();
```

### Testando Hooks

```typescript
import { renderHook, act } from '@testing-library/react';

const { result } = renderHook(() => useMyHook());

// Acessar valores do hook
console.log(result.current.value);

// Chamar funções do hook (dentro de act)
act(() => {
    result.current.setValue(newValue);
});
```

### Testando Componentes

```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Renderizar
render(<MyComponent prop="value" />);

// Buscar elementos
screen.getByRole('button', { name: /submit/i });
screen.getByText(/hello/i);
screen.getByPlaceholderText('Digite aqui');

// Simular interações
const user = userEvent.setup();
await user.click(button);
await user.type(input, 'texto');
```

---

## Playwright - Testes E2E

### Anatomia de um Teste E2E

```typescript
import { test, expect } from '@playwright/test';

test.describe('Página de Indicações', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/indications');
    });

    test('deve filtrar por busca', async ({ page }) => {
        // ARRANGE
        const searchInput = page.getByRole('searchbox');

        // ACT
        await searchInput.fill('React');

        // ASSERT
        await expect(page.getByText('React')).toBeVisible();
    });
});
```

### Locators Comuns

```typescript
// Por role (acessibilidade) - PREFERIDO
page.getByRole('button', { name: /submit/i });
page.getByRole('link', { name: 'Home' });
page.getByRole('textbox', { name: /email/i });

// Por texto
page.getByText('Click me');

// Por placeholder
page.getByPlaceholder('Search...');

// Por test-id
page.getByTestId('submit-button');

// Por seletor CSS (último recurso)
page.locator('.my-class');
page.locator('#my-id');
```

### Ações

```typescript
// Navegação
await page.goto('/about');
await page.reload();
await page.goBack();

// Interações
await button.click();
await input.fill('texto');
await input.clear();
await select.selectOption('value');

// Esperas
await page.waitForLoadState('networkidle');
await page.waitForTimeout(1000); // Use com moderação!
```

### Assertions

```typescript
// Visibilidade
await expect(element).toBeVisible();
await expect(element).toBeHidden();

// Texto
await expect(element).toHaveText('Hello');
await expect(element).toContainText('ell');

// Atributos
await expect(input).toHaveValue('test');
await expect(element).toHaveAttribute('href', '/about');

// URL
await expect(page).toHaveURL(/.*about/);
await expect(page).toHaveTitle('My Title');
```

---

## Mocks - O que são e como usar

### O que é um Mock?

Um **mock** é uma versão "fake" de uma dependência. É como um dublê de cinema:
o dublê parece o ator, mas você controla o que ele faz.

### Por que usar Mocks?

1. **Isolamento** - Testar apenas UMA coisa por vez
2. **Velocidade** - Mocks são instantâneos
3. **Controle** - Você decide o que retornar
4. **Confiabilidade** - Não depende de serviços externos

### Tipos de Mocks no Projeto

#### 1. Mock de Módulos (jest.mock)

```typescript
// Substitui o módulo inteiro por uma versão fake
jest.mock('@/services/guestbook', () => ({
    getGuestbookEntries: jest.fn(),
    createGuestbookEntry: jest.fn(),
}));

// No teste, você controla o retorno
mockGetGuestbookEntries.mockResolvedValue([{ id: 1, name: 'Test', message: 'Hello' }]);
```

#### 2. Mock de Funções (jest.fn)

```typescript
// Cria uma função fake que você pode inspecionar
const mockOnSubmit = jest.fn();

// Passa para o componente
render(<Form onSubmit={mockOnSubmit} />);

// Verifica se foi chamada
expect(mockOnSubmit).toHaveBeenCalledWith('name', 'message');
expect(mockOnSubmit).toHaveBeenCalledTimes(1);
```

#### 3. Mock de APIs do Browser

```typescript
// No jest.setup.ts, mockamos APIs que jsdom não tem

// localStorage
const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn(),
};

// matchMedia
window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    addEventListener: jest.fn(),
}));
```

#### 4. Mock de Providers (Context)

```typescript
// Quando um componente usa useContext, precisamos providenciar o contexto

function MockI18nProvider({ children }) {
    return (
        <I18nContext.Provider value={mockValues}>
            {children}
        </I18nContext.Provider>
    );
}

// Cria um render customizado
function renderWithProviders(ui) {
    return render(ui, { wrapper: MockI18nProvider });
}
```

---

## Boas Práticas

### ✅ Faça

1. **Teste comportamento, não implementação**

    ```typescript
    // ✅ BOM - testa o que o usuário vê
    expect(screen.getByText('Sucesso!')).toBeInTheDocument();

    // ❌ RUIM - testa detalhes internos
    expect(component.state.isSuccess).toBe(true);
    ```

2. **Use queries semânticas (by role)**

    ```typescript
    // ✅ BOM
    screen.getByRole('button', { name: /submit/i });

    // ❌ RUIM
    screen.getByTestId('submit-btn');
    ```

3. **Organize com AAA (Arrange-Act-Assert)**

    ```typescript
    it('deve fazer algo', () => {
        // ARRANGE - preparar
        render(<Component />);

        // ACT - agir
        fireEvent.click(button);

        // ASSERT - verificar
        expect(result).toBe(expected);
    });
    ```

4. **Limpe estado entre testes**
    ```typescript
    beforeEach(() => {
        jest.clearAllMocks();
        localStorage.clear();
    });
    ```

### ❌ Evite

1. **Testar bibliotecas de terceiros**
2. **Testar estilos CSS diretamente**
3. **Depender de timing específico**
4. **Usar IDs ou classes para selecionar elementos**

---

## Troubleshooting

### O teste está passando localmente mas falhando no CI

- Verifique se há dependência de dados mockados consistentes
- Adicione `await waitFor()` para operações assíncronas
- Use `test.retry(2)` no Playwright para testes flaky

### Cannot find module '@/...'

- Verifique se `moduleNameMapper` no `jest.config.ts` está correto
- Verifique se `tsconfig.json` tem os paths configurados

### act() warning

- Envolva mudanças de estado em `act()`
- Use `await waitFor()` para operações assíncronas

### Elemento não encontrado

- Use `screen.debug()` para ver o DOM renderizado
- Verifique se o elemento precisa de async (`findBy*` vs `getBy*`)
- Verifique se os providers estão configurados

### Testes E2E muito lentos

- Use `test.describe.parallel()` para executar em paralelo
- Reutilize autenticação com `storageState`
- Reduza `waitForTimeout()` e use auto-wait

---

## Próximos Passos

1. **Adicionar mais testes** à medida que novas funcionalidades são criadas
2. **Configurar CI/CD** com GitHub Actions para rodar testes automaticamente
3. **Definir coverage threshold** para manter qualidade
4. **Implementar visual regression** com screenshots do Playwright

---

_Documentação criada para o projeto Dev Resources_
