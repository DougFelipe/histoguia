# Componente de Perfil do Usuário

## Arquivo: `UserProfile.js`

Este arquivo define o componente `UserProfile`, que gerencia a interface de visualização e edição do perfil do usuário no aplicativo.

### Importações

- **React e Hooks**: Importa `React` e os hooks `useState` da biblioteca React.
- **Navegação**: Importa o hook `useNavigate` da biblioteca `react-router-dom` para navegação programática.
- **Componentes de Interface**:
  - `Sidebar`: Importa o componente da barra lateral de navegação (`Menu`).
- **Recursos**:
  - `Avatar`: Importa a imagem de avatar padrão (`Avatar.png`).
  - `FontAwesomeIcon` e `faEdit`: Importa o ícone de edição da biblioteca FontAwesome.

### Definição do Componente UserProfile

O componente `UserProfile` é uma função que gerencia o estado de edição do perfil, dados do usuário, visibilidade da barra lateral e mensagens de sucesso/erro. Renderiza a interface de perfil do usuário com funcionalidade de edição.

#### Estado do Componente

- **`isEditing`**: Estado booleano que controla se o perfil está em modo de edição.
- **`userData`**: Estado que armazena os dados do usuário.
- **`formData`**: Estado que armazena os dados do formulário de edição.
- **`isSidebarOpen`**: Estado booleano que controla a visibilidade da barra lateral.
- **`showSuccessMessage`**: Estado booleano que controla a exibição da mensagem de sucesso.
- **`showErrorMessage`**: Estado booleano que controla a exibição da mensagem de erro.

### Funções

- **`formatDate`**: Formata a data de nascimento do formato `YYYY-MM-DD` para `DD/MM/YYYY`.
- **`parseDate`**: Converte a data de nascimento do formato `DD/MM/YYYY` para `YYYY-MM-DD`.
- **`handleEditClick`**: Ativa o modo de edição.
- **`handleInputChange`**: Atualiza os valores do formulário conforme o usuário edita os campos.
- **`handleImageChange`**: Atualiza a imagem do perfil quando o usuário seleciona uma nova imagem.
- **`handleFormSubmit`**: Valida e salva os dados do formulário, exibe mensagens de sucesso ou erro.
- **`handleCancelClick`**: Cancela a edição e restaura os dados originais do usuário.
- **`handleToggleSidebar`**: Atualiza o estado da barra lateral com base no parâmetro `isOpen`.

### Estrutura do Componente

- **Container Principal**: Div principal com classes para layout flexível e estilização de fundo.
- **Sidebar**: Componente de barra lateral que aceita uma prop `onToggle` para controle de visibilidade.
- **Conteúdo Principal**: Div que cresce conforme o espaço disponível, com transições suaves de margem dependendo do estado da barra lateral, e com layout flexível para centralização e alinhamento.
  - **Mensagens de Feedback**: Exibe mensagens de sucesso ou erro conforme o estado.
  - **Seção de Perfil**: Div para agrupar os campos de perfil do usuário, contendo:
    - Imagem do perfil com funcionalidade de upload.
    - Formulário de edição de perfil com campos para nome, sobrenome, email, telefone, data de nascimento, curso, universidade e matrícula.
    - Botões de cancelar e salvar.

### Classes de Estilização

- **Flexbox e Layout**: Utiliza classes do Tailwind CSS para layout flexível, alinhamento e responsividade.
  - **Responsividade**: Ajustes de estilo para dispositivos móveis utilizando prefixos como `md`.
  - **Estilo dos Botões**: Classes para estilizar os botões de cancelar e salvar, incluindo cores, padding e efeitos de hover.

### Exportação

- **Exportação Padrão**: O componente `UserProfile` é exportado como o padrão do módulo, permitindo sua importação e uso em outras partes do aplicativo.

### Finalidade do Componente UserProfile

O componente `UserProfile` proporciona uma interface de usuário para visualizar e editar o perfil do usuário, integrando uma barra lateral de navegação com funcionalidade de edição de perfil, upload de imagem e exibição de mensagens de feedback.

Esta documentação descreve a funcionalidade e o propósito do arquivo `UserProfile.js`, explicando como ele gerencia a interface de perfil do usuário, incluindo a barra lateral, o formulário de edição e as mensagens de feedback.
