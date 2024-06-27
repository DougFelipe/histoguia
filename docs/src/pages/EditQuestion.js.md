# Componente de Edição de Questões

## Arquivo: `EditQuestion.js`

Este arquivo define o componente `EditQuestion`, que gerencia a interface de edição de questões no aplicativo.

### Importações

- **React e Hooks**: Importa `React` e o hook `useState` da biblioteca React.
- **Componentes de Edição e Administração**:
  - `EditQuestionForm`: Importa o formulário de edição de questões (`EditQuestion`).
  - `AdmSidebar`: Importa o componente da barra lateral de administração (`MenuAdm`).

### Definição do Componente EditQuestion

O componente `EditQuestion` é uma função que gerencia o estado de visibilidade da barra lateral e renderiza a interface de edição de questões.

#### Estado do Componente

- **`isSidebarOpen`**: Estado booleano que controla a visibilidade da barra lateral.
- **`setIsSidebarOpen`**: Função para atualizar o estado `isSidebarOpen`.

### Funções

- **`handleToggleSidebar`**: Função que recebe um parâmetro `isOpen` e atualiza o estado `isSidebarOpen` de acordo.

### Estrutura do Componente

- **Container Principal**: Div principal com classes para layout flexível e estilização de fundo.
- **AdmSidebar**: Componente de barra lateral que aceita uma prop `onToggle` para controle de visibilidade.
- **Conteúdo Principal**: Div que cresce conforme o espaço disponível, com transições suaves de margem dependendo do estado da barra lateral, e com layout flexível para centralização e alinhamento.
  - **EditQuestionForm**: Componente de formulário de edição de questões, centralizado na tela e ajustado para responsividade.

### Classes de Estilização

- **Flexbox e Layout**: Utiliza classes do Tailwind CSS para layout flexível, alinhamento e responsividade.
  - **Responsividade**: Ajustes de estilo para dispositivos móveis utilizando prefixos como `md`.

### Exportação

- **Exportação Padrão**: O componente `EditQuestion` é exportado como o padrão do módulo, permitindo sua importação e uso em outras partes do aplicativo.

### Finalidade do Componente EditQuestion

O componente `EditQuestion` proporciona uma interface de usuário para editar questões, integrando uma barra lateral de administração com um formulário de edição centralizado e responsivo.

Esta documentação descreve a funcionalidade e o propósito do arquivo `EditQuestion.js`, explicando como ele gerencia a interface de edição de questões, incluindo a barra lateral e o formulário de edição.
