# Componente de Círculo de Progresso

## Arquivo: `ProgressCircle.js`

Este arquivo define o componente `ProgressCircle`, que renderiza um círculo de progresso utilizando SVG.

### Importações

- **React**: Importa `React` da biblioteca React.

### Definição do Componente ProgressCircle

O componente `ProgressCircle` é uma função que aceita uma prop `progress` para determinar a porcentagem de progresso a ser exibida no círculo.

### Props

- **`progress`**: Número que indica a porcentagem de progresso a ser exibida.

### Constantes e Cálculos

- **`radius`**: Raio do círculo.
- **`stroke`**: Largura do traçado.
- **`normalizedRadius`**: Raio normalizado, ajustado pela largura do traçado.
- **`circumference`**: Circunferência do círculo, calculada como `normalizedRadius * 2 * Math.PI`.
- **`strokeDashoffset`**: Offset do traçado, calculado com base na prop `progress` para determinar a parte do círculo preenchida.

### Posições do Texto

- **`textTopPosition`**: Posição do texto no topo do círculo.
- **`textProgressPositionX`**: Posição X do texto de progresso.
- **`textProgressPositionY`**: Posição Y do texto de progresso.

### Estrutura do Componente

- **Container Principal**: Div principal com classes para layout, estilização e centralização.
  - **SVG**: Elemento `svg` que contém o círculo de progresso:
    - **Definições de Gradiente**: Definições para um gradiente linear aplicado ao traçado do círculo.
    - **Circle Element**: Elemento `circle` que desenha o círculo de progresso:
      - Utiliza o gradiente definido para o traçado.
      - Configurações de traçado para determinar a circunferência e o offset do traçado com transição suave.
    - **Text Element**: Elemento `text` que exibe a porcentagem de progresso no centro do círculo:
      - Posições X e Y baseadas nas constantes calculadas.
      - Estilização do texto com fonte e cor branca.
      - Transformação para rotacionar o texto inversamente ao SVG.

### Classes de Estilização

- **Layout e Estilização**: Utiliza classes do Tailwind CSS para layout flexível, alinhamento e estilização.
  - **Estilo do SVG**: Classes para definir o tamanho e a responsividade do SVG.
  - **Estilo do Círculo**: Classes para estilizar o círculo, incluindo o gradiente e a transição do traçado.
  - **Estilo do Texto**: Classes para estilizar o texto de progresso, incluindo tamanho da fonte e cor.

### Exportação

- **Exportação Padrão**: O componente `ProgressCircle` é exportado como o padrão do módulo, permitindo sua importação e uso em outras partes do aplicativo.

### Finalidade do Componente ProgressCircle

O componente `ProgressCircle` proporciona uma interface de usuário para exibir visualmente o progresso em formato circular, utilizando um SVG animado e estilizado com um gradiente.

Esta documentação descreve a funcionalidade e o propósito do arquivo `ProgressCircle.js`, explicando como ele gerencia a exibição do progresso circular, incluindo a estrutura, os estados e as classes de estilização utilizadas.
