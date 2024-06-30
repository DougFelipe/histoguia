# Componente de Tabela

## Arquivo: `Table.js`

Este arquivo define o componente `Table`, que exibe dados tabulares e permite ordenação por data.

### Importações

- **React e Hooks**: Importa `React` e o hook `useState` da biblioteca React.
- **FontAwesomeIcon**: Importa o componente `FontAwesomeIcon` da biblioteca `@fortawesome/react-fontawesome`.
- **Ícones**: Importa os ícones `faSortUp` e `faSortDown` da biblioteca `@fortawesome/free-solid-svg-icons`.

### Dados

Define um array de objetos chamado `data`, onde cada objeto representa uma linha da tabela com as seguintes propriedades:
- `date`: Data das questões.
- `questions`: Número de questões.
- `correct`: Número de respostas corretas.
- `incorrect`: Número de respostas incorretas.

### Definição do Componente Table

O componente `Table` é uma função que gerencia o estado da ordenação e dos dados da tabela, e renderiza a interface da tabela.

#### Estado do Componente

- **`sortOrder`**: Estado que armazena a ordem de ordenação (`asc` ou `desc`).
- **`tableData`**: Estado que armazena os dados da tabela.

### Funções

- **`toggleSortOrder`**: Alterna a ordem de ordenação entre `asc` e `desc` e chama a função `sortData` para ordenar os dados.
- **`formatDate`**: Formata uma string de data para o formato `DD/MM/YYYY`.
- **`sortData`**: Ordena os dados da tabela com base na ordem de ordenação (`asc` ou `desc`).

### Estrutura do Componente

- **Container Principal**: Div principal com classes para layout responsivo e estilização.
  - **Tabela**: Elemento `table` que exibe os dados tabulares, contendo:
    - **Cabeçalho da Tabela**: Elemento `thead` que define os títulos das colunas e inclui o botão de ordenação na coluna de data.
    - **Corpo da Tabela**: Elemento `tbody` que renderiza as linhas da tabela com os dados formatados.

### Classes de Estilização

- **Flexbox e Layout**: Utiliza classes do Tailwind CSS para layout flexível, alinhamento e responsividade.
  - **Estilo da Tabela**: Classes para estilizar a tabela, incluindo bordas, padding, cores e foco.
  - **Estilo dos Botões**: Classes para estilizar o botão de ordenação, incluindo ícones e efeitos de hover.
  - **Cores dos Resultados**: Classes para estilizar os textos dos resultados (`text-green-500` para corretos e `text-red-500` para incorretos).

### Exportação

- **Exportação Padrão**: O componente `Table` é exportado como o padrão do módulo, permitindo sua importação e uso em outras partes do aplicativo.

### Finalidade do Componente Table

O componente `Table` proporciona uma interface de usuário para exibir e ordenar dados tabulares de questões, incluindo a data, o número de questões, o número de acertos e o número de erros.

Esta documentação descreve a funcionalidade e o propósito do arquivo `Table.js`, explicando como ele gerencia a exibição e ordenação dos dados da tabela, incluindo os estados de ordenação, as funções de manipulação e a estrutura de exibição dos dados.
