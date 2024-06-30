# Componente de Página do Usuário

## Arquivo: `UserPage.js`

Este arquivo define o componente `UserPage`, que gerencia a interface de exibição dos dados detalhados de um aluno no aplicativo.

### Importações

- **React e Hooks**: Importa `React` e o hook `useState` da biblioteca React.
- **Navegação**: Importa os hooks `useNavigate` e `useLocation` da biblioteca `react-router-dom` para navegação programática e acesso à localização atual.
- **Componentes de Interface**:
  - `Sidebar`: Importa o componente da barra lateral de navegação (`Menu`).

### Definição do Componente UserPage

O componente `UserPage` é uma função que gerencia o estado de visibilidade da barra lateral e renderiza a interface de exibição dos dados de um aluno.

#### Estado do Componente

- **`isSidebarOpen`**: Estado booleano que controla a visibilidade da barra lateral.
- **`setIsSidebarOpen`**: Função para atualizar o estado `isSidebarOpen`.

#### Navegação e Localização

- **`navigate`**: Função para navegar programaticamente entre as páginas.
- **`location`**: Função para acessar a localização atual e obter os dados do aluno passado pela navegação.

### Funções

- **`handleBackClick`**: Função para navegar de volta para a página de administração de alunos (`/admAlunos`).
- **`handleToggleSidebar`**: Função que alterna o estado de visibilidade da barra lateral e chama a função `onToggle`.

### Estrutura do Componente

- **Container Principal**: Div principal com classes para layout flexível e estilização de fundo.
- **Sidebar**: Componente de barra lateral que aceita uma prop `onToggle` para controle de visibilidade.
- **Conteúdo Principal**: Div que cresce conforme o espaço disponível, com transições suaves de margem dependendo do estado da barra lateral, e com layout flexível para centralização e alinhamento.
  - **Seção de Perfil do Aluno**: Div para agrupar os dados do aluno, contendo:
    - **Imagem de Perfil**: Imagem do perfil do aluno, exibida de forma circular.
    - **Campos de Dados**: Campos para exibir os dados do aluno, incluindo nome, sobrenome, email, telefone, data de nascimento, curso, universidade e matrícula.
    - **Botão Voltar**: Botão para navegar de volta para a página de administração de alunos.

### Classes de Estilização

- **Flexbox e Layout**: Utiliza classes do Tailwind CSS para layout flexível, alinhamento e responsividade.
  - **Estilo dos Campos de Dados**: Classes para estilizar os campos de dados do aluno, incluindo padding, borda e foco.
  - **Estilo do Botão Voltar**: Classes para estilizar o botão de voltar, incluindo cores, borda e efeitos de hover.

### Exportação

- **Exportação Padrão**: O componente `UserPage` é exportado como o padrão do módulo, permitindo sua importação e uso em outras partes do aplicativo.

### Finalidade do Componente UserPage

O componente `UserPage` proporciona uma interface de usuário para visualizar os dados detalhados de um aluno, integrando uma barra lateral de navegação e exibindo os dados do aluno de forma organizada e estilizada.

Esta documentação descreve a funcionalidade e o propósito do arquivo `UserPage.js`, explicando como ele gerencia a interface de exibição dos dados de um aluno, incluindo a barra lateral, os campos de dados e o botão de navegação.
