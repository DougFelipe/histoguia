# Componente Home

## Arquivo: `Home.js`

Este arquivo define o componente `Home`, que gerencia a interface principal da página inicial do aplicativo.

### Importações

- **React e Hooks**: Importa `React` e o hook `useState` da biblioteca React.
- **Componentes de Interface**:
  - `Sidebar`: Importa o componente da barra lateral de navegação (`Menu`).
  - `SearchBar`: Importa o componente de barra de pesquisa (`SearchBar`).
  - `HorizontalScroll`: Importa o componente de rolagem horizontal (`HorizontalScroll`).
  - `LineChart`: Importa o componente de gráfico de linha (`LineChart`).
  - `Card`: Importa o componente de cartão (`Card`).

### Definição do Componente Home

O componente `Home` é uma função que gerencia o estado de visibilidade da barra lateral e renderiza a interface principal da página inicial.

#### Estado do Componente

- **`isSidebarOpen`**: Estado booleano que controla a visibilidade da barra lateral.
- **`setIsSidebarOpen`**: Função para atualizar o estado `isSidebarOpen`.

### Funções

- **`handleToggleSidebar`**: Função que recebe um parâmetro `isOpen` e atualiza o estado `isSidebarOpen` de acordo.

### Estrutura do Componente

- **Container Principal**: Div principal com classes para layout flexível e estilização de fundo.
- **Sidebar**: Componente de barra lateral que aceita uma prop `onToggle` para controle de visibilidade.
- **Conteúdo Principal**: Div que cresce conforme o espaço disponível, com transições suaves de margem dependendo do estado da barra lateral, e com layout flexível para centralização e alinhamento.
  - **Seção de Cartões e Gráficos**: Div para agrupar componentes de cartão e gráfico, contendo:
    - **Card**: Componente de cartão para exibir informações resumidas.
    - **LineChart**: Componente de gráfico de linha para visualização de dados.
  - **Link para Estatísticas**: Link estilizado que direciona o usuário para a página de estatísticas.
  - **Seção de Pesquisa**: Div para agrupar o componente de barra de pesquisa, centralizado na tela e ajustado para responsividade.

### Classes de Estilização

- **Flexbox e Layout**: Utiliza classes do Tailwind CSS para layout flexível, alinhamento e responsividade.
  - **Responsividade**: Ajustes de estilo para dispositivos móveis utilizando prefixos como `md`.

### Exportação

- **Exportação Padrão**: O componente `Home` é exportado como o padrão do módulo, permitindo sua importação e uso em outras partes do aplicativo.

### Finalidade do Componente Home

O componente `Home` proporciona a interface principal da página inicial do aplicativo, integrando uma barra lateral de navegação com componentes de cartão, gráfico e barra de pesquisa para exibição de informações e funcionalidades principais.

Esta documentação descreve a funcionalidade e o propósito do arquivo `Home.js`, explicando como ele gerencia a interface da página inicial, incluindo a barra lateral e os componentes principais.
