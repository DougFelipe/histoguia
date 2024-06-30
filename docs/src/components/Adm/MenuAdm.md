# Componente de Barra Lateral de Administração

## Arquivo: `MenuAdm.js`

Este arquivo define o componente `AdmSidebar`, que gerencia a barra lateral de administração no aplicativo.

### Importações

- **React e Hooks**: Importa `React` e o hook `useState` da biblioteca React.
- **Recursos**:
  - `Avatar`: Importa a imagem de avatar padrão (`Avatar.png`).

### Definição do Componente AdmSidebar

O componente `AdmSidebar` é uma função que gerencia o estado de visibilidade da barra lateral e renderiza a interface da barra lateral de administração.

#### Propriedades do Componente

- **`onToggle`**: Função recebida como prop para notificar quando a barra lateral é aberta ou fechada.

#### Estado do Componente

- **`isOpen`**: Estado booleano que controla a visibilidade da barra lateral.
- **`setIsOpen`**: Função para atualizar o estado `isOpen`.

### Funções

- **`toggleSidebar`**: Função que alterna o estado de visibilidade da barra lateral e chama a função `onToggle`.

### Estrutura do Componente

- **Botão de Alternância**: Botão para abrir e fechar a barra lateral, contendo um ícone de hambúrguer.
- **Container da Barra Lateral**: Div principal que se transforma conforme o estado `isOpen`, deslizando para dentro ou fora da tela.
  - **Cabeçalho da Barra Lateral**: Div que contém a imagem de avatar do usuário e um botão de fechar.
  - **Navegação**: Elemento `nav` contendo links para diferentes seções da administração:
    - **Início**: Link para a página inicial de administração.
    - **Alunos**: Link para a página de administração de alunos.
    - **Estatísticas**: Link para a página de estatísticas.
    - **Banco de Questões**: Link para a página do banco de questões.
  - **Sair**: Link para sair da conta, localizado na parte inferior da barra lateral.

### Classes de Estilização

- **Flexbox e Layout**: Utiliza classes do Tailwind CSS para layout flexível e alinhamento.
  - **Estilo da Barra Lateral**: Classes para estilizar a barra lateral, incluindo cores, sombras e transições.
  - **Estilo dos Botões**: Classes para estilizar os botões de alternância e navegação, incluindo ícones e efeitos de hover.
  - **Responsividade**: Ajustes de estilo para dispositivos móveis utilizando prefixos como `md`.

### Exportação

- **Exportação Padrão**: O componente `AdmSidebar` é exportado como o padrão do módulo, permitindo sua importação e uso em outras partes do aplicativo.

### Finalidade do Componente AdmSidebar

O componente `AdmSidebar` proporciona uma barra lateral de navegação para a administração do aplicativo, permitindo acesso rápido a diferentes seções administrativas e facilitando a navegação do usuário.

Esta documentação descreve a funcionalidade e o propósito do arquivo `MenuAdm.js`, explicando como ele gerencia a barra lateral de administração, incluindo a alternância de visibilidade e a navegação entre diferentes seções.
