# Componente Banco de Questões

## Arquivo: `QuestionBank.js`

Este arquivo define o componente `QuestionBank`, que gerencia a interface do banco de questões no aplicativo.

### Importações

- **React e Hooks**: Importa `React` e o hook `useState` da biblioteca React.
- **Componentes de Questão e Administração**:
  - `QuestionTable`: Importa o componente da tabela de questões (`QuestionTable`).
  - `AdmSidebar`: Importa o componente da barra lateral de administração (`MenuAdm`).

### Definição do Componente QuestionBank

O componente `QuestionBank` é uma função que gerencia o estado de visibilidade da barra lateral e renderiza a interface do banco de questões.

#### Estado do Componente

- **`isSidebarOpen`**: Estado booleano que controla a visibilidade da barra lateral.
- **`setIsSidebarOpen`**: Função para atualizar o estado `isSidebarOpen`.

### Funções

- **`handleToggleSidebar`**: Função que recebe um parâmetro `isOpen` e atualiza o estado `isSidebarOpen` de acordo.

### Estrutura do Componente

- **Container Principal**: Div principal com classes para layout flexível e estilização de fundo.
- **AdmSidebar**: Componente de barra lateral que aceita uma prop `onToggle` para controle de visibilidade.
- **Conteúdo Principal**: Div que cresce conforme o espaço disponível, com transições suaves de margem dependendo do estado da barra lateral, e com layout flexível para centralização e alinhamento.
  - **Tabela de Questões**: Div para agrupar o componente de tabela de questões, contendo o componente `QuestionTable`.

### Classes de Estilização

- **Flexbox e Layout**: Utiliza classes do Tailwind CSS para layout flexível, alinhamento e responsividade.
  - **Responsividade**: Ajustes de estilo para dispositivos móveis utilizando prefixos como `md`.

### Exportação

- **Exportação Padrão**: O componente `QuestionBank` é exportado como o padrão do módulo, permitindo sua importação e uso em outras partes do aplicativo.

### Finalidade do Componente QuestionBank

O componente `QuestionBank` proporciona uma interface de usuário para gerenciar e visualizar o banco de questões no aplicativo, integrando uma barra lateral de administração com uma tabela de questões centralizada e responsiva.

Esta documentação descreve a funcionalidade e o propósito do arquivo `QuestionBank.js`, explicando como ele gerencia a interface do banco de questões, incluindo a barra lateral e o componente de tabela de questões.
