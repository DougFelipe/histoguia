# Componente de Status

## Arquivo: `Status.js`

Este arquivo define o componente `Status`, que exibe o status de um item com estilos diferentes baseados no status recebido como prop.

### Importações

- **React e Hooks**: Importa `React`, `useState` e `useEffect` da biblioteca React.

### Definição do Componente Status

O componente `Status` é uma função que gerencia o estado de estilo baseado no status recebido via props e renderiza o status com a cor e o fundo apropriados.

#### Propriedades do Componente

- **`status`**: Prop recebida pelo componente que define o status do item. Pode ser `Active`, `Offline` ou `Wait`.

#### Estado do Componente

- **`status`**: Estado que armazena a classe de estilo baseada no status.

### Funções

- **`handleStatus`**: Função que define a classe de estilo (`text` e `background`) baseada no valor do status recebido via props:
  - **Active**: Define `text-[#409261] bg-[#E9FFEF]`.
  - **Offline**: Define `text-[#3F3748] bg-[#E4E4E4]`.
  - **Wait**: Define `text-[#D98634] bg-[#FFF2DD]`.

### Hooks

- **`useEffect`**: Chama a função `handleStatus` sempre que o valor do status recebido via props mudar.

### Estrutura do Componente

- **Container Principal**: Div principal que contém o elemento span.
  - **Span de Status**: Span que exibe o status com a classe de estilo definida, contendo:
    - **Ícone de Status**: Ícone de círculo que precede o texto do status.
    - **Texto do Status**: Texto do status recebido via props.

### Classes de Estilização

- **Classes Dinâmicas**: Utiliza classes do Tailwind CSS dinâmicas baseadas no valor do estado `status` para definir a cor do texto e o fundo.
- **Layout Flexível**: Utiliza classes do Tailwind CSS para layout flexível e alinhamento dos itens dentro do span.

### Exportação

- **Exportação Padrão**: O componente `Status` é exportado como o padrão do módulo, permitindo sua importação e uso em outras partes do aplicativo.

### Finalidade do Componente Status

O componente `Status` proporciona uma interface visual para exibir o status de um item com estilos específicos, facilitando a identificação visual dos diferentes estados (`Active`, `Offline`, `Wait`).

Esta documentação descreve a funcionalidade e o propósito do arquivo `Status.js`, explicando como ele gerencia a exibição do status com estilos dinâmicos baseados nas props recebidas.
