# Componente de Registro

## Arquivo: `register.js`

Este arquivo define o componente `Register`, que gerencia a interface de registro de novos usuários no aplicativo.

### Importações

- **React e Hooks**: Importa `React` e o hook `useState` da biblioteca React.
- **Input**: Importa o componente de entrada de dados (`Input`).
- **Axios**: Importa a biblioteca `axios` para fazer requisições HTTP.

### Definição do Componente Register

O componente `Register` é uma função que gerencia o estado do formulário de registro e renderiza a interface de registro de novos usuários.

#### Estado do Componente

- **`formData`**: Estado que armazena os dados do formulário de registro, incluindo nome, sobrenome, email, senha, telefone, data de nascimento, curso, matrícula e universidade.

### Funções

- **`handleChange`**: Atualiza o estado `formData` conforme os campos do formulário são preenchidos.
- **`handleSubmit`**: Envia os dados do formulário para o servidor ao submeter o formulário, usando `axios` para fazer uma requisição POST à API de registro de usuários.

### Estrutura do Componente

- **Container Principal**: Div principal com classes para layout flexível e estilização.
  - **Título**: Elemento `h1` para o título "Register".
  - **Formulário de Registro**: Elemento `form` que contém os campos de entrada e o botão de envio.
    - **Campos de Entrada**: Componentes `Input` para nome, sobrenome, email e senha.
    - **Botão de Envio**: Input do tipo `submit` estilizado como botão para submeter o formulário.

### Classes de Estilização

- **Flexbox e Layout**: Utiliza classes do Tailwind CSS para layout flexível, alinhamento e responsividade.
  - **Estilo do Container**: Classes para estilizar o container principal, incluindo cores, dimensões e alinhamento.
  - **Estilo do Título**: Classes para estilizar o título, incluindo cores, fontes e espaçamento.
  - **Estilo dos Campos de Entrada**: Classes para estilizar os campos de entrada, incluindo padding, borda e foco.
  - **Estilo do Botão de Envio**: Classes para estilizar o botão de envio, incluindo cores, padding, fontes e borda.

### Exportação

- **Exportação Padrão**: O componente `Register` é exportado como o padrão do módulo, permitindo sua importação e uso em outras partes do aplicativo.

### Finalidade do Componente Register

O componente `Register` proporciona uma interface de usuário para registrar novos usuários no aplicativo, integrando campos de entrada para dados pessoais e um botão para submeter o formulário de registro.

Esta documentação descreve a funcionalidade e o propósito do arquivo `register.js`, explicando como ele gerencia a interface de registro de novos usuários, incluindo os estados do formulário, as funções de manipulação e a estrutura de exibição dos campos de entrada e do botão de envio.
