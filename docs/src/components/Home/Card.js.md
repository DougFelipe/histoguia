# Componente de Cartão Resumo

## Arquivo: `Card.js`

Este arquivo define o componente `Card`, que exibe um resumo semanal das atividades do usuário no aplicativo.

### Importações

- **React**: Importa `React` da biblioteca React.
- **ProgressCircle**: Importa o componente `ProgressCircle` para exibir o progresso circular das questões corretas.

### Definição do Componente Card

O componente `Card` é uma função que renderiza um cartão com informações sobre o desempenho semanal do usuário.

### Estrutura do Componente

- **Container Principal**: Div principal com classes para layout, estilização e responsividade.
  - **Título do Resumo**: Span que exibe o título "Resumo da sua semana" com estilização específica.
  - **Conteúdo do Cartão**: Div que agrupa as informações principais do cartão:
    - **Seção de Resumo de Questões**: Div que contém duas sub-divs, cada uma exibindo informações sobre o total de questões respondidas e o total de subtemas abordados:
      - **Total de Questões Respondidas**: Div com fundo roxo escuro, texto centralizado e estilização específica, exibindo o total de 36 questões respondidas.
      - **Total de Subtemas Abordados**: Div similar à anterior, exibindo o total de 6 subtemas abordados.
    - **Seção de Progresso**: Div que contém o círculo de progresso das questões corretas:
      - **Título do Progresso**: Div com posicionamento absoluto, texto centralizado e estilização específica, exibindo "Questões Corretas".
      - **Componente ProgressCircle**: Renderiza o componente `ProgressCircle` com um progresso de 90%.

### Classes de Estilização

- **Layout e Estilização**: Utiliza classes do Tailwind CSS para layout flexível, alinhamento, cores e padding.
  - **Responsividade**: Ajustes de estilo para dispositivos móveis e tamanhos específicos utilizando prefixos como `md`.
  - **Estilo do Cartão**: Classes para estilizar o cartão, incluindo cores de fundo, bordas arredondadas e espaçamento.
  - **Estilo do Texto**: Classes para estilizar o texto, incluindo fontes, tamanhos e cores.

### Exportação

- **Exportação Padrão**: O componente `Card` é exportado como o padrão do módulo, permitindo sua importação e uso em outras partes do aplicativo.

### Finalidade do Componente Card

O componente `Card` proporciona uma interface de usuário para exibir um resumo das atividades semanais do usuário, incluindo o total de questões respondidas, subtemas abordados e um progresso visual das questões corretas.

Esta documentação descreve a funcionalidade e o propósito do arquivo `Card.js`, explicando como ele gerencia a exibição do resumo semanal do usuário, incluindo a estrutura, os estados e as classes de estilização utilizadas.
