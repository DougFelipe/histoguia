# Componente de Nova Questão

## Arquivo: `NewQuestion.js`

Este arquivo define o componente `NewQuestion`, que gerencia a interface de criação de novas questões no aplicativo.

### Importações

- **React e Hooks**: Importa `React` e o hook `useState` da biblioteca React.
- **Componentes de Questão e Administração**:
  - `NewQuestionForm`: Importa o formulário para criar novas questões (`NewQuestion`).
  - `AdmSidebar`: Importa o componente da barra lateral de administração (`MenuAdm`).

### Definição do Componente NewQuestion

O componente `NewQuestion` é uma função que gerencia o estado de visibilidade da barra lateral e renderiza a interface de criação de novas questões.

#### Estado do Componente

- **`isSidebarOpen`**: Estado booleano que controla a visibilidade da barra lateral.
- **`setIsSidebarOpen`**: Função para atualizar o estado `isSidebarOpen`.

### Funções

- **`handleToggleSidebar`**: Função que recebe um parâmetro `isOpen` e atualiza o estado `isSidebarOpen` de acordo.

### Estrutura do Componente

- **Container Principal**: Div principal com classes para layout flexível e estilização de fundo.
- **AdmSidebar**: Componente de barra lateral que aceita uma prop `onToggle` para controle de visibilidade.
- **Conteúdo Principal**: Div que cresce conforme o espaço disponível, com transições suaves de margem dependendo do estado da barra lateral, e com layout flexível para centralização e alinhamento.
  - **Formulário de Nova Questão**: Div para agrupar o formulário de nova questão, contendo o componente `NewQuestionForm`.

### Classes de Estilização

- **Flexbox e Layout**: Utiliza classes do Tailwind CSS para layout flexível, alinhamento e responsividade.
  - **Responsividade**: Ajustes de estilo para dispositivos móveis utilizando prefixos como `md`.

### Exportação

- **Exportação Padrão**: O componente `NewQuestion` é exportado como o padrão do módulo, permitindo sua importação e uso em outras partes do aplicativo.

### Finalidade do Componente NewQuestion

O componente `NewQuestion` proporciona uma interface de usuário para criar novas questões no aplicativo, integrando uma barra lateral de administração com um formulário de criação centralizado e responsivo.

Esta documentação descreve a funcionalidade e o propósito do arquivo `NewQuestion.js`, explicando como ele gerencia a interface de criação de novas questões, incluindo a barra lateral e o formulário de criação.
