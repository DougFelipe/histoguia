# Componente de Página de Login

## Arquivo: `loginPage.js`

Este arquivo define o componente `LoginPage`, que gerencia a interface da página de login do aplicativo.

### Importações

- **Componentes de Login**:
  - `Login`: Importa o componente de login (`login`).
  - `Register`: Importa o componente de registro (`register`).

### Definição do Componente LoginPage

O componente `LoginPage` é uma função que renderiza a interface de login e registro na tela.

### Estrutura do Componente

- **Container Principal**: Div principal com classes para layout flexível e estilização de fundo.
  - **Classes de Layout e Estilização**:
    - `w-full h-screen`: Define largura total e altura da tela inteira.
    - `bg-[#130338]`: Define a cor de fundo.
    - `flex justify-center items-center`: Utiliza Flexbox para centralizar os elementos.
    - `max-md:w-[340px] max-md:h-[852px]`: Define a largura e altura para dispositivos móveis.
  - **Componentes Filhos**:
    - `Register`: Componente de registro, que está oculto em telas pequenas.
    - `Login`: Componente de login.

### Exportação

- **Exportação Padrão**: O componente `LoginPage` é exportado como o padrão do módulo, permitindo sua importação e uso em outras partes do aplicativo.

### Finalidade do Componente LoginPage

O componente `LoginPage` proporciona a interface de usuário para login e registro no aplicativo, integrando componentes dedicados para cada funcionalidade e utilizando classes de estilização para assegurar um layout responsivo e centrado.

Esta documentação descreve a funcionalidade e o propósito do arquivo `loginPage.js`, explicando como ele gerencia a interface de login e registro, incluindo a estrutura do layout e os componentes principais.
