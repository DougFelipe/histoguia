# Componente de Barra de Pesquisa de Alunos

## Arquivo: `SearchBarAluno.js`

Este arquivo define o componente `SearchBarAluno`, que gerencia a interface de busca e filtragem de alunos no aplicativo.

### Importações

- **React e Hooks**: Importa `React`, `useState` e `useEffect` da biblioteca React.
- **Dados**: Importa a lista de alunos (`alunos`).
- **Componentes e Recursos**:
  - `Status`: Importa o componente de status (`Status`).
  - `Delete`: Importa o ícone de delete (`delete.svg`).
  - `Info`: Importa o ícone de informação (`info.svg`).
  - `Filter`: Importa o ícone de filtro (`download-cloud.svg`).
- **Navegação**: Importa o hook `useNavigate` da biblioteca `react-router-dom` para navegação programática.

### Definição do Componente SearchBarAluno

O componente `SearchBarAluno` é uma função que gerencia o estado de busca, filtragem por status e visibilidade dos resultados. Renderiza a interface de pesquisa de alunos.

#### Estado do Componente

- **`query`**: Estado que armazena o termo de busca.
- **`status`**: Estado que armazena o status selecionado para filtragem.
- **`results`**: Estado que armazena os resultados da busca.
- **`hidden`**: Estado que controla a visibilidade do menu de filtros.
- **`items`**: Estado que armazena a lista de alunos importada.

### Funções

- **`handleInputChange`**: Atualiza o estado `query` e filtra os resultados conforme o termo de busca.
- **`handleClick`**: Alterna a visibilidade do menu de filtros.
- **`handleStatusClick`**: Filtra os resultados conforme o status selecionado.
- **`pageInfo`**: Navega para a página de detalhes do aluno selecionado.
- **`deleteAluno`**: Remove o aluno selecionado da lista de resultados.

### Estrutura do Componente

- **Container Principal**: Div principal com classes para layout flexível e estilização.
  - **Input de Busca**: Input para digitação do termo de busca, com ícone de busca.
  - **Botão de Filtro**: Botão para abrir o menu de filtros, contendo ícone de filtro.
  - **Menu de Filtros**: Div que contém as opções de filtro por status, visível conforme o estado `hidden`.
  - **Resultados da Busca**: Div que renderiza os resultados filtrados, incluindo:
    - **Cabeçalho da Tabela**: Linha de cabeçalho para desktop, oculta em dispositivos móveis.
    - **Linhas de Resultados**: Linhas que exibem os dados dos alunos, incluindo imagem de perfil, nome, status, email, data de nascimento, e botões de ação (informação e delete).

### Classes de Estilização

- **Flexbox e Layout**: Utiliza classes do Tailwind CSS para layout flexível, alinhamento e responsividade.
  - **Estilo do Input**: Classes para estilizar o input de busca, incluindo padding, borda e foco.
  - **Estilo do Botão de Filtro**: Classes para estilizar o botão de filtro, incluindo cores, borda e cursor.
  - **Estilo dos Resultados**: Classes para estilizar os resultados da busca, incluindo cores, padding e responsividade.

### Exportação

- **Exportação Padrão**: O componente `SearchBarAluno` é exportado como o padrão do módulo, permitindo sua importação e uso em outras partes do aplicativo.

### Finalidade do Componente SearchBarAluno

O componente `SearchBarAluno` proporciona uma interface de usuário para pesquisar e filtrar alunos no aplicativo, integrando funcionalidades de busca, filtragem por status e navegação para detalhes do aluno.

Esta documentação descreve a funcionalidade e o propósito do arquivo `SearchBarAluno.js`, explicando como ele gerencia a interface de pesquisa de alunos, incluindo os estados de busca e filtragem, as funções de manipulação e a estrutura de exibição dos resultados.
