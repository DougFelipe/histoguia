# Componente de Configuração do Quiz

## Arquivo: `quizSetup.js`

Este arquivo define o componente `QuizSetup`, que gerencia a interface de configuração do quiz no aplicativo.

### Importações

- **React e Hooks**: Importa `React` e o hook `useState` da biblioteca React.
- **Componentes de Interface**:
  - `Sidebar`: Importa o componente da barra lateral de navegação (`Menu`).
  - `Control`: Importa o componente de controle de quiz (`controls`).
  - `SelectableRectangles`: Importa o componente de seleção de retângulos (`selectableRectangle`).
  - `CheckboxOptions`: Importa o componente de opções com checkboxes (`checkboxOptions`).

### Definição do Componente QuizSetup

O componente `QuizSetup` é uma função que gerencia o estado de visibilidade da barra lateral e renderiza a interface de configuração do quiz.

#### Estado do Componente

- **`isSidebarOpen`**: Estado booleano que controla a visibilidade da barra lateral.
- **`setIsSidebarOpen`**: Função para atualizar o estado `isSidebarOpen`.

### Funções

- **`handleToggleSidebar`**: Função que recebe um parâmetro `isOpen` e atualiza o estado `isSidebarOpen` de acordo.

### Estrutura do Componente

- **Container Principal**: Div principal com classes para layout flexível e estilização de fundo.
- **Sidebar**: Componente de barra lateral que aceita uma prop `onToggle` para controle de visibilidade.
- **Conteúdo Principal**: Div que cresce conforme o espaço disponível, com transições suaves de margem dependendo do estado da barra lateral, e com layout flexível para centralização e alinhamento.
  - **Seleção de Retângulos**: Componente `SelectableRectangles` para permitir a seleção de opções de configuração do quiz.
  - **Controles de Quiz**: Componente `Control` para gerenciar opções adicionais de configuração.
  - **Opções de Checkbox**: Componente `CheckboxOptions` para selecionar configurações específicas do quiz.
  - **Botão Iniciar Quiz**: Link estilizado para iniciar o quiz, redirecionando o usuário para a página do quiz.

### Classes de Estilização

- **Flexbox e Layout**: Utiliza classes do Tailwind CSS para layout flexível, alinhamento e responsividade.
  - **Responsividade**: Ajustes de estilo para dispositivos móveis utilizando prefixos como `md`.
  - **Estilo do Botão**: Classe para estilizar o botão de iniciar quiz, incluindo cores, padding e efeitos de hover.

### Exportação

- **Exportação Padrão**: O componente `QuizSetup` é exportado como o padrão do módulo, permitindo sua importação e uso em outras partes do aplicativo.

### Finalidade do Componente QuizSetup

O componente `QuizSetup` proporciona uma interface de usuário para configurar as opções do quiz antes de iniciá-lo, integrando uma barra lateral de navegação com componentes interativos para seleção de opções e controle de configurações.

Esta documentação descreve a funcionalidade e o propósito do arquivo `quizSetup.js`, explicando como ele gerencia a interface de configuração do quiz, incluindo a barra lateral e os componentes interativos.
