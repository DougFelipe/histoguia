# Componente de Histórico

## Arquivo: `Historic.js`

Este arquivo define o componente `Historic`, que gerencia a interface de exibição do histórico de usuários no aplicativo.

### Importações

- **React e Hooks**: Importa `React` e o hook `useState` da biblioteca React.
- **Componentes de Interface**:
  - `Sidebar`: Importa o componente da barra lateral de navegação (`Menu`).
  - `Table`: Importa o componente de tabela para exibir os dados do histórico (`Table`).
- **Recursos**:
  - `avatar`: Importa a imagem de avatar utilizada na tabela (`Avatar.png`).

### Definição do Componente Historic

O componente `Historic` é uma função que gerencia o estado de visibilidade da barra lateral e renderiza a interface de histórico de usuários.

#### Estado do Componente

- **`isSidebarOpen`**: Estado booleano que controla a visibilidade da barra lateral.
- **`setIsSidebarOpen`**: Função para atualizar o estado `isSidebarOpen`.

### Funções

- **`handleToggleSidebar`**: Função que recebe um parâmetro `isOpen` e atualiza o estado `isSidebarOpen` de acordo.

### Dados

- **`data`**: Um array de objetos contendo informações de usuários, incluindo nome, username, imagem, status, email e data de nascimento. Esses dados são passados como prop para o componente `Table`.

### Estrutura do Componente

- **Container Principal**: Div principal com classes para layout flexível e estilização de fundo.
- **Sidebar**: Componente de barra lateral que aceita uma prop `onToggle` para controle de visibilidade.
- **Conteúdo Principal**: Div que cresce conforme o espaço disponível, com transições suaves de margem dependendo do estado da barra lateral, e com layout flexível para centralização e alinhamento.
  - **Seção de Histórico**: Div para agrupar o conteúdo do histórico, contendo:
    - **Título**: Um span com o texto "Histórico", estilizado com uma classe personalizada.
    - **Table**: Componente de tabela que recebe os dados dos usuários como prop e exibe-os de forma estruturada.

### Classes de Estilização

- **Flexbox e Layout**: Utiliza classes do Tailwind CSS para layout flexível, alinhamento e responsividade.
  - **Responsividade**: Ajustes de estilo para dispositivos móveis utilizando prefixos como `md`.

### Exportação

- **Exportação Padrão**: O componente `Historic` é exportado como o padrão do módulo, permitindo sua importação e uso em outras partes do aplicativo.

### Finalidade do Componente Historic

O componente `Historic` proporciona uma interface de usuário para visualizar o histórico de usuários no aplicativo, integrando uma barra lateral de navegação com um componente de tabela para exibição detalhada dos dados dos usuários.

Esta documentação descreve a funcionalidade e o propósito do arquivo `Historic.js`, explicando como ele gerencia a interface de histórico de usuários, incluindo a barra lateral e o componente de tabela.
