# Componente de Estatísticas

## Arquivo: `Estatistic.js`

Este arquivo define o componente `Estatistic`, que gerencia a interface de exibição de estatísticas no aplicativo.

### Importações

- **React e Hooks**: Importa `React` e o hook `useState` da biblioteca React.
- **Componentes de Interface**:
  - `Sidebar`: Importa o componente da barra lateral de navegação (`Menu`).
  - `Card`: Importa o componente de cartão para exibir informações resumidas.
  - `LineChart`: Importa o componente de gráfico de linha para exibir dados estatísticos.

### Definição do Componente Estatistic

O componente `Estatistic` é uma função que gerencia o estado de visibilidade da barra lateral e renderiza a interface de estatísticas.

#### Estado do Componente

- **`isSidebarOpen`**: Estado booleano que controla a visibilidade da barra lateral.
- **`setIsSidebarOpen`**: Função para atualizar o estado `isSidebarOpen`.

### Funções

- **`handleToggleSidebar`**: Função que recebe um parâmetro `isOpen` e atualiza o estado `isSidebarOpen` de acordo.

### Estrutura do Componente

- **Container Principal**: Div principal com classes para layout flexível e estilização de fundo.
- **Sidebar**: Componente de barra lateral que aceita uma prop `onToggle` para controle de visibilidade.
- **Conteúdo Principal**: Div que cresce conforme o espaço disponível, com transições suaves de margem dependendo do estado da barra lateral, e com layout flexível para centralização e alinhamento.
  - **Seção de Estatísticas**: Div para agrupar o conteúdo de estatísticas, contendo:
    - **Card**: Componente de cartão para exibir informações estatísticas resumidas.
    - **LineChart**: Componente de gráfico de linha para visualização de dados detalhados.

### Classes de Estilização

- **Flexbox e Layout**: Utiliza classes do Tailwind CSS para layout flexível, alinhamento e responsividade.
  - **Responsividade**: Ajustes de estilo para dispositivos móveis utilizando prefixos como `md`.

### Exportação

- **Exportação Padrão**: O componente `Estatistic` é exportado como o padrão do módulo, permitindo sua importação e uso em outras partes do aplicativo.

### Finalidade do Componente Estatistic

O componente `Estatistic` proporciona uma interface de usuário para visualizar estatísticas do aplicativo, integrando uma barra lateral de navegação com componentes de cartão e gráfico de linha para exibição de dados.

Esta documentação descreve a funcionalidade e o propósito do arquivo `Estatistic.js`, explicando como ele gerencia a interface de estatísticas, incluindo a barra lateral e os componentes de visualização de dados.
