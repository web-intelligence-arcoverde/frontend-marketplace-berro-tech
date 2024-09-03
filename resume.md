### **1.1. O que é React?**

- React é uma biblioteca JavaScript para construção de interfaces, ela permite criar UIs interativas e dinâmicas

### **1.3. Vantagens e Desvantagens do React**

- **Vantagens:**
  - **Componentização:** Desenvolvimento baseado em componentes reutilizáveis e modulares.
  - **Virtual DOM:** Atualizações eficientes da interface de usuário, melhorando o desempenho.
  - **Comunidade Ativa:** Grande ecossistema de ferramentas, bibliotecas e suporte comunitário.
  - **Cross-Platform:** Capacidade de desenvolver para web e mobile com React Native.
  - **Facilidade de Integração:** Pode ser integrado em projetos existentes, mesmo que parcialmente.

### **1.4. Como Funciona o Virtual DOM**

- **Conceito:** O Virtual DOM é uma representação em memória da DOM real, permitindo que o React calcule de maneira eficiente as mudanças necessárias na interface do usuário.
- **Processo:** Quando o estado de um componente muda, o React cria um novo Virtual DOM e o compara com o anterior. Ele então aplica as mudanças necessárias à DOM real de maneira otimizada.
- **Vantagens do Virtual DOM:**
  - **Eficiência:** Reduz o número de manipulações reais na DOM, o que melhora o desempenho.
  - **Consistência:** Garante que a interface de usuário permaneça consistente mesmo com atualizações frequentes.
- **Exemplo Prático:** Mostrar um exemplo visual de como o Virtual DOM funciona, comparando uma atualização de interface usando o DOM tradicional e o Virtual DOM.

### **3.2. Componentes e Props**

    - **Tipos de Componentes:**
        - **Componentes Funcionais:** São funções JavaScript que retornam JSX. Desde a introdução dos Hooks, eles se tornaram o padrão para construir componentes, devido à sua simplicidade e eficiência.
        - **Componentes de Classe:** São classes ES6 que estendem `React.Component` e incluem um método `render()`. Embora ainda sejam usados, os componentes funcionais são mais comuns nas aplicações modernas.

- **Ciclo de Vida dos Componentes:**

  - **Componentes de Classe:** O ciclo de vida de um componente de classe inclui métodos como `componentDidMount`, `componentDidUpdate`, e `componentWillUnmount` para gerenciar efeitos colaterais.
  - **Componentes Funcionais:** Os componentes funcionais gerenciam efeitos colaterais usando o Hook `useEffect`.

  ### **4.1. Como o React Renderiza Componentes**

- **Renderização Inicial:**
  - **O que acontece na renderização inicial?** Quando um componente é renderizado pela primeira vez, o React cria uma representação virtual da interface, conhecida como **Virtual DOM**.
  - **O Virtual DOM:** É uma cópia leve e in-memory da árvore DOM real. O React usa o Virtual DOM para calcular as mudanças necessárias antes de atualizá-las no DOM real.
  - **Processo de Renderização:**
    1. **Componente é Montado:** O componente é montado no Virtual DOM quando é renderizado pela primeira vez.
    2. **Criação dos Elementos:** O JSX é transformado em objetos JavaScript que representam os elementos DOM.
    3. **Renderização no DOM Real:** O Virtual DOM é comparado com o DOM real, e as mudanças são aplicadas de forma eficiente.
- **Renderização de Componentes Funcionais:**
  - **Componentes Funcionais:** Componentes funcionais executam uma função e retornam JSX, que o React renderiza.
  - **Reconciliação (Reconciliation):** O processo de reconciliação é onde o React compara as diferenças entre o Virtual DOM e o DOM real, aplicando apenas as mudanças necessárias.
  - **https://dev.to/nascimento_/virtual-dom-algoritmo-de-reconciliacao-performance-1ilg**

### **4.4. Reconciliation e o Virtual DOM**

- **O Processo de Reconciliation:**
  - **O que é Reconciliation?** É o processo que o React usa para determinar quais partes da interface do usuário precisam ser atualizadas.
  - **Comparação de Árvores:** O React compara a nova árvore do Virtual DOM com a anterior, identificando as diferenças (chamadas de "diffing").
  - **Algoritmo de Reconciliation:**
    1. **Identificação de Mudanças:** O React identifica as mudanças na estrutura do Virtual DOM, como adição, remoção ou modificação de elementos.
    2. **Atualização Seletiva:** Apenas os elementos que mudaram são atualizados no DOM real.
    3. **Chaves (Keys) em Listas:** O uso de `keys` em listas ajuda o React a identificar elementos únicos, melhorando a eficiência do algoritmo de reconciliation.

## Principais Diferenças:

### Objetivo:

- `useCallback` é usado para memorizar funções.
- `useMemo` é usado para memorizar o valor retornado de uma função.
- `memo` é usado para memorizar a renderização de um componente funcional.

### Aplicação:

- `useCallback` é aplicado dentro de um componente funcional para memorizar uma função específica.
- `useMemo` é aplicado dentro de um componente funcional para memorizar um valor específico.
- `memo` é aplicado ao redor de um componente funcional para otimizar sua renderização.

### Dependências:

- `useCallback` depende de uma lista de dependências que determinam quando a função deve ser recriada.
- `useMemo` depende de uma lista de dependências que determinam quando o valor memoizado deve ser recalculado.
- `memo` depende de uma comparação superficial de props para determinar se o componente deve ser re-renderizado.

## Quando usar cada um:

- **`useCallback`**: Use quando precisa passar uma função para um componente filho que pode ser memorizado, ou quando a função é uma dependência em outro hook.
- **`useMemo`**: Use para evitar a recalculação de valores que são caros para computar e que não precisam ser recalculados a cada renderização.
- **`memo`**: Use para evitar renderizações desnecessárias de componentes funcionais que recebem props que não mudam com frequência.

# 5. Estado (State) e Ciclo de Vida

### **5.1. Hooks de Estado (`useState`)**

- **Introdução ao `useState`:**
  - **O que é?** `useState` é um hook que permite adicionar e gerenciar o estado em componentes funcionais.
  - **Como funciona:** Retorna um array com dois elementos: o estado atual e uma função para atualizá-lo.

### **5.2. Hooks de Efeitos (`useEffect`)**

- **Introdução ao `useEffect`:**
  - **O que é?** `useEffect` é um hook que permite executar efeitos colaterais em componentes funcionais, como operações assíncronas, manipulação de DOM e assinaturas.
  - **Como funciona:** Aceita uma função de efeito e uma lista de dependências. A função é executada após a renderização e sempre que as dependências mudam.
