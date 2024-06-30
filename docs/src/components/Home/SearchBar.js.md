# Componente de Barra de Pesquisa

## Arquivo: `SearchBar.js`

Este arquivo define o componente `SearchBar`, que permite aos usuários pesquisar e visualizar diferentes temas disponíveis no aplicativo.

### Importações

- **React e Hooks**: Importa `React`, `useState` e `useEffect` da biblioteca React.
- **Imagens dos Temas**: Importa várias imagens relacionadas aos temas, como `EpitelioSimples`, `EpitelioEstratificado`, `TecidoConjuntivoDito`, `TecidoConjuntivoDenso`, `TecidoMuscularEstriado`, `TecidoMuscularLiso`, `TecidoNervoso` e `CartilagemHialina`.
- **Componentes de Ícones**: Importa os componentes `CompleteIcon`, `PartialSVGImage`, `BlockedIcon` e `NotStartedIcon` para exibir o status dos temas.

### Definição do Componente SearchBar

O componente `SearchBar` é uma função que gerencia o estado da pesquisa e dos resultados filtrados, e renderiza a interface da barra de pesquisa e dos resultados.

#### Estado do Componente

- **`query`**: Estado que armazena o termo de busca.
- **`results`**: Estado que armazena os resultados da busca filtrada.

### Temas

Define um array de objetos chamado `temas`, onde cada objeto representa um tema com as seguintes propriedades:
- `nome`: Nome do tema.
- `img`: Caminho da imagem do tema.
- `status`: Status do tema (`Não iniciado`, `Bloqueado`, `Completo` ou um número representando a porcentagem de conclusão).
- `link`: URL de navegação para o tema.

### Funções

- **`useEffect`**: Inicializa os resultados da pesquisa com todos os temas ao montar o componente.
- **`handleInputChange`**: Atualiza o estado `query` e filtra os resultados conforme o termo de busca.
- **`renderStatusComponent`**: Retorna o componente de ícone apropriado com base no status do tema.

### Estrutura do Componente

- **Container Principal**: Div principal com classes para layout flexível e estilização.
  - **Input de Busca**: Input para digitação do termo de busca, com ícone de busca.
  - **Resultados da Pesquisa**: Div que renderiza os resultados filtrados em um layout de grade responsivo:
    - **Cartão de Tema**: Div que exibe informações sobre o tema, incluindo imagem, nome e status.

### Classes de Estilização

- **Flexbox e Layout**: Utiliza classes do Tailwind CSS para layout flexível, alinhamento e responsividade.
  - **Estilo do Input**: Classes para estilizar o input de busca, incluindo padding, borda e foco.
  - **Estilo dos Resultados**: Classes para estilizar os cartões de resultados, incluindo cores, sombras e bordas arredondadas.

### Exportação

- **Exportação Padrão**: O componente `SearchBar` é exportado como o padrão do módulo, permitindo sua importação e uso em outras partes do aplicativo.

### Finalidade do Componente SearchBar

O componente `SearchBar` proporciona uma interface de usuário para pesquisar e visualizar diferentes temas no aplicativo, integrando funcionalidades de busca, filtragem e exibição dos status dos temas.

Esta documentação descreve a funcionalidade e o propósito do arquivo `SearchBar.js`, explicando como ele gerencia a interface de pesquisa de temas, incluindo os estados de busca e filtragem, as funções de manipulação e a estrutura de exibição dos resultados.
