# README Técnico - Verbum

## 1. Objetivo Técnico do Projeto

Este projeto é uma aplicação mobile desenvolvida como **projeto de estudo** com foco em:

- **Expo**: Dominar o framework, toolchain e APIs nativas unificadas
- **React Native**: Compreender renderização nativa, componentes e ciclo de vida
- **TypeScript**: Aplicar tipagem estática em contexto mobile, reduzindo erros em runtime
- **Expo Router**: Entender file-based routing e navegação declarativa
- **Arquitetura Mobile**: Aprender organização de código, separação de responsabilidades e padrões de estado
- **Uso Consciente de IA**: Praticar desenvolvimento assistido mantendo compreensão do código gerado

O domínio de conteúdo (ensino bíblico/Novo Testamento) é apenas um **contexto ilustrativo**. A prioridade é técnica e arquitetural, não funcional.

**O que se espera validar:**

- Capacidade de estruturar um app mobile escalável desde o início
- Compreensão de fluxo de dados e navegação em apps React Native
- Aplicação de TypeScript em cenários reais de desenvolvimento
- Uso eficiente de ferramentas modernas (Expo Router, Reanimated, etc.)

## 2. Escopo do MVP (Técnico)

### Funcionalidades Técnicas a Implementar

1. **Estrutura de Navegação**

   - Navegação hierárquica: Home → Roadmap → Módulo → Capítulo → Lição
   - Stack navigation para fluxo linear de aprendizado
   - Tab navigation para acesso rápido a seções principais
   - Navegação programática baseada em progresso do usuário

2. **Gerenciamento de Estado**

   - Estado local para UI (useState, useReducer)
   - Context API para progresso global do usuário
   - Persistência local simples (AsyncStorage) para progresso
   - Estado derivado para cálculos de progresso

3. **Estrutura de Dados**

   - Modelos TypeScript para Roadmap, Módulo, Capítulo, Lição
   - Dados mockados em arquivos TypeScript
   - Tipos estritos para garantir consistência
   - Validação básica de estrutura de dados

4. **Componentes Reutilizáveis**

   - Componentes de UI base (cards, buttons, progress indicators)
   - Componentes temáticos (ThemedText, ThemedView)
   - Componentes de lição (explicação, quiz, feedback)
   - Layout components (containers, sections)

5. **Fluxo de Progresso**
   - Rastreamento sequencial de conclusão
   - Bloqueio de lições não concluídas
   - Cálculo de progresso por módulo e global
   - Feedback visual de progresso

### Problemas que o MVP Resolve

- **Organização de conteúdo hierárquico**: Como estruturar dados e navegação para roadmap → módulos → capítulos → lições
- **Progresso sequencial**: Como garantir que usuário só avance após conclusão
- **Estado persistente**: Como manter progresso entre sessões sem backend
- **Navegação complexa**: Como gerenciar múltiplos níveis de navegação de forma clara
- **Tipagem de dados**: Como garantir type-safety em estruturas de dados aninhadas

## 3. Fora do Escopo

### Explicitamente Não Incluído no MVP

1. **Backend e Infraestrutura**

   - Sem servidor, API ou banco de dados remoto
   - Sem autenticação ou gerenciamento de usuários
   - Sem sincronização de dados entre dispositivos
   - Sem analytics ou telemetria

2. **Funcionalidades Avançadas**

   - Push notifications
   - Deep linking complexo (apenas básico se necessário)
   - Modo offline avançado (dados sempre locais no MVP)
   - Compartilhamento social
   - Gamificação além do progresso básico

3. **Otimizações Prematuras**

   - Code splitting avançado
   - Lazy loading de rotas (pode ser adicionado depois)
   - Otimizações de performance específicas
   - Testes automatizados (fora do escopo inicial de aprendizado)

4. **Conteúdo Dinâmico**
   - Sem geração dinâmica de conteúdo
   - Sem atualizações remotas de conteúdo
   - Todo conteúdo é estático e mockado

## 4. Stack Tecnológica

### Core Framework

**Expo (~54.0.30)**

- **Papel**: Framework e toolchain completo para React Native
- **Por quê**: Simplifica desenvolvimento, build e deploy. Fornece APIs nativas unificadas e permite desenvolvimento cross-platform sem configuração complexa
- **Uso no projeto**: Gerenciamento de projeto, APIs nativas (haptics, status bar, etc.), build e desenvolvimento

**React Native (0.81.5)**

- **Papel**: Framework base para desenvolvimento mobile nativo
- **Por quê**: Permite desenvolvimento com React para iOS e Android usando componentes nativos
- **Uso no projeto**: Base de todos os componentes e interações

**React (19.1.0)**

- **Papel**: Biblioteca de UI declarativa
- **Por quê**: Hooks, componentes funcionais, gerenciamento de estado
- **Uso no projeto**: Estrutura de componentes, hooks customizados, Context API

**TypeScript (~5.9.2)**

- **Papel**: Superset do JavaScript com tipagem estática
- **Por quê**: Reduz erros em runtime, melhora DX com autocomplete, documenta código através de tipos
- **Uso no projeto**: Tipagem de props, estados, dados mockados, funções e hooks

### Navegação

**Expo Router (~6.0.21)**

- **Papel**: Sistema de roteamento baseado em arquivos (file-based routing)
- **Por quê**: Similar ao Next.js, reduz boilerplate, facilita organização, type-safe routes
- **Uso no projeto**: Estrutura de rotas em `app/`, navegação declarativa, deep linking básico

**React Navigation (v7)**

- **Papel**: Biblioteca de navegação (usada internamente pelo Expo Router)
- **Por quê**: Stack, Tab e outros navigators, integração nativa
- **Uso no projeto**: Stack Navigator para fluxo de aprendizado, Tab Navigator para acesso rápido

### UI e Animações

**React Native Reanimated (~4.1.1)**

- **Papel**: Biblioteca de animações performáticas
- **Por quê**: Animações na UI thread, melhor performance, worklets
- **Uso no projeto**: Animações de transição, feedback visual, micro-interações

**Expo Image (~3.0.11)**

- **Papel**: Componente de imagem otimizado
- **Por quê**: Cache automático, placeholders, melhor performance que Image padrão
- **Uso no projeto**: Exibição de imagens de conteúdo (quando necessário)

**Expo Haptics (~15.0.8)**

- **Papel**: Feedback háptico
- **Por quê**: Melhora UX com feedback tátil em interações importantes
- **Uso no projeto**: Feedback ao completar lições, respostas de quiz

### Desenvolvimento

**ESLint + Expo Config**

- **Papel**: Linter para qualidade de código
- **Por quê**: Mantém consistência, detecta problemas comuns
- **Uso no projeto**: Validação de código durante desenvolvimento

**Path Aliases (`@/*`)**

- **Papel**: Imports absolutos
- **Por quê**: Evita imports relativos longos (`../../../`), melhora legibilidade
- **Uso no projeto**: Todos os imports usam `@/` para referenciar raiz do projeto

## 5. Arquitetura Geral do App

### Visão de Alto Nível

O app segue uma arquitetura **component-based** com separação clara de responsabilidades:

```
┌─────────────────────────────────────────┐
│         Presentation Layer              │
│  (Screens, Components, Navigation)      │
└─────────────────┬───────────────────────┘
                  │
┌─────────────────▼───────────────────────┐
│         Business Logic Layer             │
│  (Hooks, Context, State Management)     │
└─────────────────┬───────────────────────┘
                  │
┌─────────────────▼───────────────────────┐
│           Data Layer                     │
│  (Mock Data, Types, Models)              │
└─────────────────────────────────────────┘
```

### Separação de Responsabilidades

1. **Presentation Layer** (`app/`, `components/`)

   - Telas (screens) como componentes React
   - Componentes de UI reutilizáveis
   - Lógica de apresentação apenas

2. **Business Logic Layer** (`hooks/`, `context/`, `utils/`)

   - Hooks customizados para lógica compartilhada
   - Context API para estado global (progresso)
   - Funções utilitárias e cálculos

3. **Data Layer** (`data/`, `types/`, `models/`)
   - Dados mockados
   - Tipos TypeScript
   - Modelos de dados e validações

### Fluxo de Dados no MVP

```
Mock Data → Context/Hooks → Components → User Interaction → State Update → UI Update
```

**Fluxo específico de progresso:**

1. Usuário completa lição
2. Hook atualiza estado local
3. Context atualiza progresso global
4. AsyncStorage persiste progresso
5. UI reflete mudança (desbloqueio de próxima lição)

## 6. Estrutura de Pastas Planejada

```
verbum/
├── app/                          # Expo Router - file-based routing
│   ├── _layout.tsx              # Root layout (Stack Navigator)
│   ├── (tabs)/                  # Grupo de rotas (Tab Navigator)
│   │   ├── _layout.tsx          # Tab Navigator config
│   │   ├── index.tsx            # Home/Overview screen
│   │   └── progress.tsx         # Progress screen (opcional)
│   ├── roadmap/                 # Roadmap flow
│   │   ├── _layout.tsx          # Stack Navigator para roadmap
│   │   ├── index.tsx            # Lista de módulos
│   │   └── [moduleId]/          # Dynamic route para módulo
│   │       ├── index.tsx        # Detalhes do módulo
│   │       └── [chapterId]/     # Dynamic route para capítulo
│   │           ├── index.tsx    # Lista de lições do capítulo
│   │           └── [lessonId]/ # Dynamic route para lição
│   │               └── index.tsx # Tela da lição
│   └── modal.tsx                # Modal route (exemplo)
│
├── components/                   # Componentes reutilizáveis
│   ├── ui/                      # Componentes de UI base
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── progress-bar.tsx
│   │   └── quiz/
│   │       ├── question.tsx
│   │       └── answer.tsx
│   ├── lesson/                   # Componentes específicos de lição
│   │   ├── explanation.tsx
│   │   ├── quiz.tsx
│   │   └── feedback.tsx
│   ├── roadmap/                  # Componentes de roadmap
│   │   ├── module-card.tsx
│   │   ├── chapter-list.tsx
│   │   └── lesson-item.tsx
│   ├── themed-text.tsx          # Componente temático (existente)
│   └── themed-view.tsx          # Componente temático (existente)
│
├── hooks/                        # Custom hooks
│   ├── use-color-scheme.ts      # Hook de tema (existente)
│   ├── use-theme-color.ts       # Hook de cores (existente)
│   ├── use-progress.ts          # Hook para gerenciar progresso
│   └── use-lesson.ts            # Hook para lógica de lição
│
├── context/                      # Context API
│   └── progress-context.tsx     # Context de progresso global
│
├── data/                         # Dados mockados
│   ├── roadmap.ts               # Estrutura completa do roadmap
│   └── lessons/                 # Conteúdo das lições
│       ├── module-1/
│       │   └── chapter-1/
│       │       └── lesson-1.ts
│
├── types/                        # Tipos TypeScript
│   ├── roadmap.ts               # Tipos de roadmap, módulo, capítulo
│   ├── lesson.ts                # Tipos de lição, quiz, explicação
│   └── progress.ts              # Tipos de progresso
│
├── utils/                        # Funções utilitárias
│   ├── progress.ts              # Cálculos de progresso
│   └── navigation.ts            # Helpers de navegação
│
├── constants/                    # Constantes
│   └── theme.ts                 # Cores e temas (existente)
│
└── assets/                       # Recursos estáticos
    └── images/
```

### Papel de Cada Pasta

- **`app/`**: Define rotas e estrutura de navegação. Expo Router mapeia arquivos para rotas automaticamente
- **`components/`**: Componentes React reutilizáveis, organizados por domínio (ui, lesson, roadmap)
- **`hooks/`**: Lógica reutilizável encapsulada em hooks
- **`context/`**: Estado global compartilhado (progresso do usuário)
- **`data/`**: Dados mockados e estáticos do roadmap
- **`types/`**: Definições TypeScript para type-safety
- **`utils/`**: Funções puras e helpers
- **`constants/`**: Valores constantes (cores, configurações)

### Relação Expo Router ↔ Telas ↔ Domínio

- **Expo Router** (`app/`) define a estrutura de navegação
- **Telas** (`app/*.tsx`) são componentes React que renderizam UI
- **Domínio** (`data/`, `types/`) define a estrutura de dados do roadmap
- **Componentes** (`components/`) são usados pelas telas para renderizar UI
- **Hooks/Context** conectam dados ao estado e às telas

## 7. Fluxo de Navegação (Alto Nível)

### Estrutura Hierárquica

```
Home
  └── Roadmap
      └── Módulo 1
          └── Capítulo 1
              └── Lição 1.1
                  └── [Conclusão] → Desbloqueia Lição 1.2
```

### Fluxo do Usuário

1. **Home Screen** (`app/(tabs)/index.tsx`)

   - Visão geral do progresso
   - Acesso rápido ao roadmap
   - Estatísticas básicas (opcional)

2. **Roadmap Screen** (`app/roadmap/index.tsx`)

   - Lista de todos os módulos
   - Indicadores de progresso por módulo
   - Módulos bloqueados/desbloqueados

3. **Módulo Screen** (`app/roadmap/[moduleId]/index.tsx`)

   - Lista de capítulos do módulo
   - Progresso do módulo
   - Navegação para capítulos

4. **Capítulo Screen** (`app/roadmap/[moduleId]/[chapterId]/index.tsx`)

   - Lista de lições do capítulo
   - Lições bloqueadas/desbloqueadas
   - Navegação para lições

5. **Lição Screen** (`app/roadmap/[moduleId]/[chapterId]/[lessonId]/index.tsx`)
   - Conteúdo da lição (explicação + quiz)
   - Interação do usuário
   - Feedback e conclusão
   - Navegação para próxima lição (se desbloqueada)

### Regras de Navegação

- **Progresso Sequencial**: Usuário só pode acessar próxima lição após concluir a atual
- **Desbloqueio Automático**: Conclusão de lição desbloqueia automaticamente a próxima
- **Navegação para Trás**: Sempre permitida (voltar para módulo, capítulo, etc.)
- **Estado Persistente**: Progresso salvo localmente, mantido entre sessões

### Relação Roadmap ↔ Lições ↔ Progresso

- **Roadmap** é a estrutura de dados (módulos → capítulos → lições)
- **Lições** são as unidades de aprendizado (explicação + quiz)
- **Progresso** rastreia quais lições foram concluídas
- **Navegação** é determinada pelo progresso (lições bloqueadas não são acessíveis)

## 8. Princípios de Código e Boas Práticas

### Clareza > Abstração Precoce

- **Evitar**: Criar abstrações complexas antes de ter casos de uso reais
- **Prefira**: Código direto e legível, mesmo que repetitivo inicialmente
- **Refatore**: Quando padrões emergirem naturalmente, então abstrair

### Simplicidade no MVP

- **Estado Local Primeiro**: Use `useState` antes de Context, Redux, etc.
- **Componentes Pequenos**: Funções de responsabilidade única
- **Dados Mockados**: Não criar infraestrutura complexa para dados que são estáticos

### Código Legível e Evolutivo

- **Nomes Descritivos**: `handleLessonComplete` > `handleClick`
- **Tipos Explícitos**: Sempre tipar props, retornos, estados
- **Comentários Quando Necessário**: Explicar "por quê", não "o quê"
- **Estrutura Consistente**: Seguir padrões estabelecidos no projeto

### Evitar Complexidade Desnecessária

- **Sem Over-engineering**: Não criar arquitetura complexa para MVP simples
- **Sem Otimização Prematura**: Resolver problemas de performance quando aparecerem
- **Sem Dependências Desnecessárias**: Avaliar se nova lib é realmente necessária

### Padrões Específicos do Projeto

1. **Componentes Funcionais**: Sempre usar function components, não classes
2. **Hooks para Lógica**: Extrair lógica complexa para hooks customizados
3. **TypeScript Strict**: Aproveitar type-safety, evitar `any`
4. **Path Aliases**: Sempre usar `@/` para imports absolutos
5. **Componentes Temáticos**: Usar `ThemedText` e `ThemedView` para consistência visual

## 9. Uso Consciente de IA (Cursor / Vibe Coding)

### Como a IA Deve Ser Usada

**✅ Uso Apropriado:**

- **Geração de Boilerplate**: Componentes, tipos, estruturas repetitivas
- **Sugestões de Implementação**: Quando você sabe o que quer, mas não como fazer
- **Resolução de Erros**: Debugging de erros específicos com contexto claro
- **Refatoração**: Melhorar código existente mantendo funcionalidade
- **Explicação de Conceitos**: Entender como bibliotecas/frameworks funcionam

**❌ Limites do Uso:**

- **Decisões Arquiteturais**: Você deve entender e decidir a arquitetura
- **Substituir Aprendizado**: Não aceitar código sem compreender
- **Ignorar Documentação**: IA complementa, não substitui docs oficiais
- **Código Não Revisado**: Sempre revisar e entender código gerado antes de usar

### Importância de Compreender Todo Código Aceito

1. **Revisão Obrigatória**: Todo código gerado deve ser lido e compreendido
2. **Perguntas**: Se não entender algo, perguntar ou pesquisar antes de aceitar
3. **Refatoração**: Se código gerado não seguir padrões do projeto, refatorar
4. **Aprendizado**: Usar código gerado como oportunidade de aprendizado, não atalho

### Workflow Recomendado

1. **Definir Objetivo**: Saber o que você quer alcançar
2. **Pedir Implementação**: Solicitar código específico com contexto
3. **Revisar Código**: Ler e entender cada linha
4. **Adaptar se Necessário**: Ajustar para padrões do projeto
5. **Testar**: Verificar funcionamento
6. **Documentar**: Se necessário, adicionar comentários explicativos

### Red Flags

- Aceitar código sem ler
- Copiar código de exemplos sem adaptar
- Ignorar erros de tipo ou lint
- Usar padrões diferentes dos estabelecidos no projeto
- Adicionar dependências sem avaliar necessidade

## 10. Roadmap Técnico de Aprendizado

### Fase 1: Fundamentos e Estrutura (Atual)

**Objetivo**: Estabelecer base sólida do projeto

- [x] Setup do projeto Expo
- [x] Estrutura básica de pastas
- [x] Navegação com Expo Router (tabs básicas)
- [x] Sistema de temas (light/dark)
- [ ] Estrutura de dados do roadmap (tipos TypeScript)
- [ ] Dados mockados básicos

**Aprendizado**: Expo Router, TypeScript em contexto mobile, estrutura de projetos

### Fase 2: Navegação Hierárquica

**Objetivo**: Implementar navegação roadmap → módulos → capítulos → lições

- [ ] Estrutura de rotas dinâmicas (`[moduleId]`, `[chapterId]`, `[lessonId]`)
- [ ] Stack navigation para fluxo de aprendizado
- [ ] Passagem de parâmetros entre rotas
- [ ] Navegação programática baseada em progresso

**Aprendizado**: Dynamic routes, nested navigation, parâmetros de rota

### Fase 3: Gerenciamento de Estado

**Objetivo**: Implementar progresso e estado da aplicação

- [ ] Context API para progresso global
- [ ] Hooks customizados para lógica de progresso
- [ ] Persistência local com AsyncStorage
- [ ] Cálculo de progresso (módulo, capítulo, global)

**Aprendizado**: Context API, hooks customizados, persistência local, estado derivado

### Fase 4: Componentes e UI

**Objetivo**: Criar componentes reutilizáveis e telas funcionais

- [ ] Componentes de roadmap (module-card, chapter-list, lesson-item)
- [ ] Componentes de lição (explanation, quiz, feedback)
- [ ] Componentes de UI base (button, card, progress-bar)
- [ ] Telas completas do fluxo de aprendizado

**Aprendizado**: Component composition, props drilling vs context, reutilização

### Fase 5: Lógica de Negócio

**Objetivo**: Implementar regras de progresso e desbloqueio

- [ ] Lógica de conclusão de lição
- [ ] Sistema de desbloqueio sequencial
- [ ] Validação de progresso
- [ ] Feedback ao usuário (haptics, animações)

**Aprendizado**: Business logic em React, validação, feedback UX

### Fase 6: Refinamento e Otimização

**Objetivo**: Melhorar performance e experiência

- [ ] Otimização de re-renders (React.memo, useMemo)
- [ ] Animações com Reanimated
- [ ] Lazy loading de rotas (se necessário)
- [ ] Tratamento de erros

**Aprendizado**: Performance em React Native, animações, error handling

### Fase 7: Qualidade e Manutenibilidade (Opcional)

**Objetivo**: Estabelecer práticas de qualidade

- [ ] Testes unitários de hooks e utils
- [ ] Testes de componentes (opcional)
- [ ] Documentação de código
- [ ] Linting e formatação automatizada

**Aprendizado**: Testing em React Native, manutenibilidade de código
