# Componente de Imagem SVG Parcial

## Arquivo: `PartialSVGImage.js`

Este arquivo define o componente `PartialSVGImage`, que renderiza uma imagem SVG parcial com base em uma porcentagem fornecida.

### Importações

- **React**: Importa `React` da biblioteca React.

### Definição do Componente PartialSVGImage

O componente `PartialSVGImage` é uma função que aceita uma prop `percentage` para determinar a parte da imagem SVG a ser exibida.

### Props

- **`percentage`**: Número que indica a porcentagem da imagem a ser exibida.

### Estrutura do Componente

- **Container Principal**: Div principal com classes para layout e estilização.
  - **SVG**: Elemento `svg` que contém os elementos gráficos:
    - **Path Elements**: Vários elementos `path` que definem o desenho do SVG.
    - **Filter Definitions**: Definições de filtro para aplicar sombras internas ao SVG.
    - **Mask Definitions**: Definições de máscara para exibir apenas a parte da imagem com base na porcentagem:
      - **Rect Element**: Elemento `rect` que define a área da máscara com largura baseada na prop `percentage`.
    - **Image Element**: Elemento `image` que referencia o arquivo SVG e aplica a máscara definida.

### Classes de Estilização

- **Layout e Estilização**: Utiliza classes do Tailwind CSS para layout flexível, alinhamento e estilização.

### Detalhes do SVG

- **Elementos Path**: Desenham as formas do SVG, incluindo círculos e outros detalhes gráficos.
- **Filtros**: Aplicam sombras internas aos elementos do SVG para um efeito visual aprimorado.
- **Máscara**: Utiliza um retângulo branco com largura variável baseada na prop `percentage` para exibir apenas a parte correspondente da imagem SVG.

### Exportação

- **Exportação Padrão**: O componente `PartialSVGImage` é exportado como o padrão do módulo, permitindo sua importação e uso em outras partes do aplicativo.

### Finalidade do Componente PartialSVGImage

O componente `PartialSVGImage` proporciona uma interface de usuário para exibir uma imagem SVG parcial, ajustando dinamicamente a parte visível com base em uma porcentagem fornecida.

Esta documentação descreve a funcionalidade e o propósito do arquivo `PartialSVGImage.js`, explicando como ele gerencia a exibição da imagem SVG parcial, incluindo a estrutura, os estados e as classes de estilização utilizadas.
