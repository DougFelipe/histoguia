# Estilos Personalizados do Aplicativo

## Arquivo: `app.css`

Este arquivo contém os estilos CSS personalizados para o aplicativo de estudo de histologia, incluindo definições de fontes, cores, animações e estilos específicos para elementos HTML.

### Estilos Globais

- `body`: Define a cor de fundo global do corpo do documento como `#F1F0F3`.

### Fontes Personalizadas

Definição de várias fontes personalizadas utilizando `@font-face`:

- **Inter Regular**
  - Fonte: 'Inter Regular'
  - Caminho: './assets/fonts/Inter-Regular.ttf'
  - Formato: 'truetype'
  
- **Inter Light**
  - Fonte: 'Inter Light'
  - Caminho: './assets/fonts/Inter-Light.ttf'
  - Formato: 'truetype'
  
- **Inter Medium**
  - Fonte: 'Inter Medium'
  - Caminho: './assets/fonts/Inter-Medium.ttf'
  - Formato: 'truetype'
  
- **Inter SemiBold**
  - Fonte: 'Inter SemiBold'
  - Caminho: './assets/fonts/Inter-SemiBold.ttf'
  - Formato: 'truetype'

### Classes de Fontes

Classes CSS para aplicar as fontes personalizadas:

- `.font-inter-semi`: Utiliza a fonte 'Inter SemiBold' com fallback para 'sans-serif'.
- `.font-inter-medium`: Utiliza a fonte 'Inter Medium' com fallback para 'sans-serif'.
- `.font-inter-light`: Utiliza a fonte 'Inter Light' com fallback para 'sans-serif'.
- `.font-inter-regular`: Utiliza a fonte 'Inter Regular' com fallback para 'sans-serif'.

### Estilos do Aplicativo

- `.App`: Define o texto centralizado.
- `.App-logo`: Define a altura do logotipo e desativa eventos de ponteiro.
- `.App-header`: Define o cabeçalho do aplicativo com fundo `#140b2a`, altura mínima de 100vh, e estilos de layout flexível.
- `.App-link`: Define a cor dos links como `#61dafb`.

### Animações

- **App-logo-spin**: Animação para girar o logotipo do aplicativo infinitamente em 20s de forma linear.

### Estilos Especiais

- `.testando` e `.color-important`: Definem a cor do texto como branca utilizando `!important` para sobrepor outros estilos.

### Media Queries

- Utiliza a media query `(prefers-reduced-motion: no-preference)` para aplicar a animação de rotação do logotipo do aplicativo quando a preferência de movimento reduzido não estiver ativada.

### Estilos Personalizados para o Input Range

Estilos para o elemento de entrada do tipo range (deslizante):

- **Estilo do Thumb**:
  - Define o tamanho, a cor de fundo, a borda e o cursor para navegadores WebKit, Mozilla e Microsoft.
  
- **Estilo do Slider**:
  - Define o estilo da faixa deslizante, incluindo altura, cor de fundo, bordas e elementos pseudo.

- **Pseudo-elementos**:
  - Utilizados para estilizar a parte preenchida do deslizante para diferentes navegadores.

### Variável Customizada

- `.range-slider`: Utiliza a variável `--slider-fill` para determinar o preenchimento da faixa deslizante.

Esta documentação descreve a funcionalidade e o propósito dos estilos definidos no arquivo `app.css`, além de explicar como eles são utilizados para personalizar a aparência e o comportamento dos elementos no aplicativo.
