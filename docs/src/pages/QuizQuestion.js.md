# Componente de Questões do Quiz

## Arquivo: `QuizQuestion.js`

Este arquivo define o componente `QuizQuestion`, que gerencia a interface de exibição e interação com as questões do quiz no aplicativo.

### Importações

- **React e Hooks**: Importa `React` e os hooks `useState` da biblioteca React.
- **Navegação**: Importa o hook `useNavigate` da biblioteca `react-router-dom` para navegação programática.
- **Componentes de Interface**:
  - `Sidebar`: Importa o componente da barra lateral de navegação (`Menu`).
  - `PaginationComponent`: Importa o componente de paginação para navegação entre questões.
- **Recursos**:
  - `Circle`: Importa o ícone de círculo (`Ellipse 3.svg`).
  - `Verify`: Importa o ícone de verificação (`material-symbols_check-small-rounded.svg`).

### Dados das Questões

Define um array de objetos chamado `questions`, onde cada objeto representa uma questão do quiz, contendo a pergunta, as opções de resposta, a resposta correta e o feedback.

### Definição do Componente QuizQuestion

O componente `QuizQuestion` é uma função que gerencia o estado de seleção de opções, visibilidade da barra lateral, página atual, feedback de resposta, texto do botão e contagem de acertos. Renderiza a interface de questões do quiz.

#### Estado do Componente

- **`selectedOption`**: Estado que armazena a opção selecionada pelo usuário.
- **`isSidebarOpen`**: Estado booleano que controla a visibilidade da barra lateral.
- **`currentPage`**: Estado que armazena a página atual do quiz.
- **`feedback`**: Estado booleano que controla a exibição do feedback após a resposta.
- **`buttonText`**: Estado que armazena o texto do botão de submissão.
- **`acertos`**: Estado que armazena a contagem de respostas corretas.

### Funções

- **`handleToggleSidebar`**: Função que recebe um parâmetro `isOpen` e atualiza o estado `isSidebarOpen`.
- **`handleOptionChange`**: Função que atualiza o estado `selectedOption` com a opção selecionada.
- **`handleSubmit`**: Função que gerencia a lógica de submissão da resposta, atualização de feedback e navegação entre questões.
- **`handlePageChange`**: Função que atualiza a página atual do quiz.

### Estrutura do Componente

- **Container Principal**: Div principal com classes para layout flexível e estilização de fundo.
- **Sidebar**: Componente de barra lateral que aceita uma prop `onToggle` para controle de visibilidade.
- **Conteúdo Principal**: Div que cresce conforme o espaço disponível, com transições suaves de margem dependendo do estado da barra lateral, e com layout flexível para centralização e alinhamento.
  - **Questão Atual**: Div para exibir a questão atual, contendo:
    - Imagem ilustrativa da questão.
    - Pergunta do quiz.
  - **Formulário de Resposta**: Formulário para selecionar e submeter a resposta, contendo:
    - Opções de resposta renderizadas dinamicamente a partir das questões.
    - Feedback de resposta após submissão.
    - Botão de submissão.
  - **Componente de Paginação**: Componente para navegação entre as questões.

### Classes de Estilização

- **Flexbox e Layout**: Utiliza classes do Tailwind CSS para layout flexível, alinhamento e responsividade.
  - **Responsividade**: Ajustes de estilo para dispositivos móveis utilizando prefixos como `md`.

### Exportação

- **Exportação Padrão**: O componente `QuizQuestion` é exportado como o padrão do módulo, permitindo sua importação e uso em outras partes do aplicativo.

### Finalidade do Componente QuizQuestion

O componente `QuizQuestion` proporciona uma interface de usuário para interagir com as questões do quiz, incluindo seleção de respostas, exibição de feedback e navegação entre diferentes questões do quiz.

Esta documentação descreve a funcionalidade e o propósito do arquivo `QuizQuestion.js`, explicando como ele gerencia a interface de questões do quiz, incluindo a barra lateral, o formulário de respostas e o componente de paginação.
