# Componente de Login

## Arquivo: `login.js`

Este arquivo define o componente `Login`, que gerencia a interface de autenticação do usuário no aplicativo.

### Importações

- **React e Hooks**: Importa `React` e o hook `useState` da biblioteca React.
- **Navegação**: Importa `Link` e `useNavigate` da biblioteca `react-router-dom` para navegação e links internos.
- **Icon**: Importa o componente `Icon` para exibir ícones de redes sociais.

### Definição do Componente Login

O componente `Login` é uma função que gerencia o estado do campo de entrada do usuário e a navegação com base na autenticação. Renderiza a interface de login com campos de entrada e botões de ação.

#### Estado do Componente

- **`user`**: Estado que armazena o valor do campo de entrada de email.

### Funções

- **`handleSubmit`**: Função que trata o envio do formulário de login. Redireciona para a página de administração (`/admAlunos`) se o email for `admin@gmail.com`, caso contrário, redireciona para a página inicial (`/home`).
- **`handleChange`**: Função que atualiza o estado `user` conforme o usuário digita no campo de email.

### Estrutura do Componente

- **Container Principal**: Div principal com classes para layout flexível e estilização.
  - **Título do Formulário**: Cabeçalho que exibe o nome "Histo Guia" com estilização específica.
  - **Formulário de Login**: Elemento `form` que contém os campos de entrada e o botão de login:
    - **Campo de Email**: Input para digitação do email do usuário, com estilização e placeholder.
    - **Campo de Senha**: Input para digitação da senha do usuário, com estilização e placeholder.
    - **Link de Esqueci a Senha**: Link para recuperação de senha.
    - **Botão de Login**: Botão de envio do formulário com estilização específica.
  - **Texto Alternativo**: Parágrafo que exibe "Or sign up with" com estilização específica.
  - **Ícones de Redes Sociais**: Div que agrupa os ícones de login social (Google, Apple, Facebook) utilizando o componente `Icon`.
  - **Link de Registro**: Link para a página de registro, visível apenas em dispositivos móveis.

### Classes de Estilização

- **Layout e Estilização**: Utiliza classes do Tailwind CSS para layout flexível, alinhamento e responsividade.
  - **Estilo do Formulário**: Classes para estilizar o formulário de login, incluindo cores de fundo, bordas arredondadas, padding e foco.
  - **Estilo dos Campos de Entrada**: Classes para estilizar os campos de entrada, incluindo padding, borda e foco.
  - **Estilo dos Botões e Links**: Classes para estilizar o botão de login e os links, incluindo cores, alinhamento e efeitos de hover.
  - **Estilo dos Ícones**: Classes para estilizar os ícones de redes sociais, incluindo tamanho e espaçamento.

### Exportação

- **Exportação Padrão**: O componente `Login` é exportado como o padrão do módulo, permitindo sua importação e uso em outras partes do aplicativo.

### Finalidade do Componente Login

O componente `Login` proporciona uma interface de usuário para autenticação, permitindo ao usuário digitar suas credenciais, recuperar senha, utilizar login social e navegar para a página de registro.

Esta documentação descreve a funcionalidade e o propósito do arquivo `login.js`, explicando como ele gerencia a autenticação do usuário, incluindo os estados, as funções de manipulação e a estrutura de exibição.
