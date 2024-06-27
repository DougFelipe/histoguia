# Configuração das Rotas do Aplicativo React

## Arquivo: `RoutesApp.jsx`

Este arquivo contém a configuração das rotas do aplicativo de estudo de histologia, utilizando React Router.

### Importações

O arquivo importa os seguintes módulos e componentes:

- `React` - Biblioteca principal do React.
- `BrowserRouter as Router`, `Routes`, `Route` - Componentes do React Router para configurar a navegação.
- `LoginPage` - Página de login.
- `Home` - Página inicial.
- `QuizQuestion` - Página de perguntas do quiz.
- `QuizSetup` - Página de configuração do quiz.
- `Register` - Componente de registro.
- `AdmAlunos` - Página de administração de alunos.
- `UserProfile` - Página de perfil do usuário.
- `Historic` - Página de histórico.
- `QuestionBank` - Página de banco de questões.
- `Conclusion` - Componente de conclusão do quiz.
- `NewQuestion` - Página para adicionar nova questão.
- `EditQuestion` - Página para editar uma questão existente.
- `Estatistic` - Página de estatísticas.

### Definição das Rotas

A função `RoutesApp` define as rotas do aplicativo usando o componente `Router` e `Routes` do React Router:

- `/` - Rota para a página de login (`LoginPage`).
- `/home` - Rota para a página inicial (`Home`).
- `/quiz` - Rota para a página de perguntas do quiz (`QuizQuestion`).
- `/quizSetup` - Rota para a página de configuração do quiz (`QuizSetup`).
- `/register` - Rota para o componente de registro (`Register`).
- `/admAlunos` - Rota para a página de administração de alunos (`AdmAlunos`).
- `/profile` - Rota para a página de perfil do usuário (`UserProfile`).
- `/historic` - Rota para a página de histórico (`Historic`).
- `/questionBank` - Rota para a página de banco de questões (`QuestionBank`).
- `/conclusion` - Rota para o componente de conclusão do quiz (`Conclusion`).
- `/newQuestion` - Rota para adicionar uma nova questão (`NewQuestion`).
- `/editQuestion/:id` - Rota para editar uma questão existente, identificada pelo `id` (`EditQuestion`).
- `/estatistic` - Rota para a página de estatísticas (`Estatistic`).

### Estrutura do Componente

O componente `RoutesApp` é uma função que retorna a configuração das rotas dentro do componente `Router`. Cada rota é definida com o componente correspondente e o caminho (`path`) onde deve ser acessada.

### Exportação

O componente `RoutesApp` é exportado como o padrão do módulo, permitindo sua importação e uso em outras partes do aplicativo.