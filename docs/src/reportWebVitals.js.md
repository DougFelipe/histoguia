# Função de Relatório de Web Vitals

## Arquivo: `reportWebVitals.js`

Este arquivo contém a definição da função `reportWebVitals`, que é utilizada para medir e relatar métricas de performance web, conhecidas como Web Vitals.

### Descrição da Função

A função `reportWebVitals` aceita um argumento `onPerfEntry`, que deve ser uma função. Se `onPerfEntry` for fornecido e for uma instância de Function, a função importa dinamicamente o módulo `web-vitals` e utiliza suas funções para obter várias métricas de performance.

### Importação Condicional

Dentro da função `reportWebVitals`, se `onPerfEntry` for uma função válida, o módulo `web-vitals` é importado de forma assíncrona. Esse módulo fornece várias funções para medir métricas de performance:

- `getCLS`: Cumulative Layout Shift - Medida da estabilidade visual.
- `getFID`: First Input Delay - Medida da interatividade.
- `getFCP`: First Contentful Paint - Medida do tempo de renderização do conteúdo.
- `getLCP`: Largest Contentful Paint - Medida do tempo de carregamento do maior elemento visível.
- `getTTFB`: Time to First Byte - Medida do tempo até o primeiro byte de resposta do servidor.

### Utilização das Métricas

Cada uma dessas funções (`getCLS`, `getFID`, `getFCP`, `getLCP`, `getTTFB`) é chamada com o argumento `onPerfEntry`. Essas chamadas permitem que a função fornecida (`onPerfEntry`) receba os valores das métricas de performance quando elas são medidas.

### Exportação da Função

A função `reportWebVitals` é exportada como a exportação padrão do módulo, permitindo sua importação e utilização em outras partes do aplicativo.

### Estrutura da Função

1. **Definição**: A função `reportWebVitals` é definida com um parâmetro `onPerfEntry`.
2. **Validação**: Verifica se `onPerfEntry` é fornecido e é uma instância de Function.
3. **Importação**: Importa o módulo `web-vitals` de forma assíncrona.
4. **Chamadas de Métricas**: Chama as funções de medição de métricas com `onPerfEntry` como argumento.

### Propósito

O principal objetivo da função `reportWebVitals` é permitir que o aplicativo registre e analise métricas de performance web essenciais, ajudando a monitorar e melhorar a experiência do usuário.

### Exemplo de Uso

Para utilizar a função `reportWebVitals`, você deve passar uma função que lidará com as entradas de performance