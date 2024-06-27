# Configuração do Tailwind CSS

## Arquivo: `tailwind.config.js`

Este arquivo contém as configurações personalizadas do Tailwind CSS para o projeto de estudo de histologia. 

### Diretórios Monitorados

A propriedade `content` especifica os arquivos que o Tailwind deve monitorar para gerar os estilos CSS:

```javascript
content: [
  "./src/**/*.{js,jsx,ts,tsx}",
]
```
### Tema Personalizado

#### Cores

Adiciona cores personalizadas ao tema do Tailwind:

- `light-purple`: Hex `#B2B3F1` - Utilizada para elementos que necessitam de uma aparência suave.
- `primary`: Hex `#130338` - A cor principal do projeto, usada para destaque.
- `customPurple`: Hex `#130338` - Um alias para a cor principal, facilita a manutenção.

#### Tipografia

Define a família de fontes personalizada:
```javascript
fontFamily: {
  custom: ['Inter SemiBold', 'sans-serif'],
}
```
A fonte `Inter SemiBold` é utilizada como fonte padrão para manter uma aparência consistente.

### Breakpoints para Responsividade

Define os pontos de quebra para layouts responsivos:

- `sm`: `640px` - Aplicado a telas pequenas, como smartphones.
- `md`: `768px` - Aplicado a dispositivos de tamanho médio, como tablets.
- `lg`: `1024px` - Aplicado a telas grandes, como laptops.
- `xl`: `1280px` - Aplicado a telas extra grandes, como monitores de desktop.

### Plugins

Atualmente, não há plugins adicionais configurados:

plugins: []
