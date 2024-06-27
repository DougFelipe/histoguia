# Componente de Administração de Alunos

## Arquivo: `AdmAlunos.js`

Este arquivo define o componente `AdmAlunos`, que gerencia a interface de administração de alunos no aplicativo.

### Importações

- **React e Hooks**: Importa `React` e o hook `useState` da biblioteca React.
- **Componentes de Administração**:
  - `AdmSidebar`: Importa o componente da barra lateral de administração (`MenuAdm`).
  - `SearchBarAluno`: Importa o componente de barra de pesquisa de alunos.

### Definição do Componente AdmAlunos

O componente `AdmAlunos` é uma função que gerencia o estado de visibilidade da barra lateral e renderiza a interface de administração de alunos.

#### Estado do Componente

- **`isSidebarOpen`**: Estado booleano que controla a visibilidade da barra lateral.
- **`setIsSidebarOpen`**: Função para atualizar o estado `isSidebarOpen`.

### Funções

- **`handleToggleSidebar`**: Função que recebe um parâmetro `isOpen` e atualiza o estado `isSidebarOpen` de acordo.

### Estrutura do Componente

- **Container Principal**: Div principal com classes para layout flexível e estilização de fundo.
- **AdmSidebar**: Componente de barra lateral que aceita uma prop `onToggle` para controle de visibilidade.
- **Conteúdo Principal**: Div que cresce conforme o espaço disponível, com transições suaves de margem dependendo do estado da barra lateral.
  - **Título**: Parágrafo centralizado com o texto "Alunos".
  - **SearchBarAluno**: Componente de barra de pesquisa para alunos, centralizado na tela.

### Classes de Estilização

- **Flexbox e Layout**: Utiliza classes do Tailwind CSS para layout flexível, alinhamento e responsividade.
  - **Responsividade**: Ajustes de estilo para dispositivos móveis utilizando prefixos como `max-md`.

### Exportação

- **Exportação Padrão**: O componente `AdmAlunos` é exportado como o padrão do módulo, permitindo sua importação e uso em outras partes do aplicativo.

### Finalidade do Componente AdmAlunos

O componente `AdmAlunos` proporciona uma interface de usuário para gerenciar e pesquisar alunos, integrando uma barra lateral de administração com uma área principal de conteúdo que responde à visibilidade da barra lateral.

Esta documentação descreve a funcionalidade e o propósito do arquivo `AdmAlunos.js`, explicando como ele gerencia a interface de administração de alunos, incluindo a barra lateral e a barra de pesquisa.
