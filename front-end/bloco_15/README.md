# Bloco 15 - RTL (React Testing Library)


[Cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet/) | [Lista de Queries](https://testing-library.com/docs/dom-testing-library/api-queries) | [Jest DOM](https://github.com/testing-library/jest-dom)

## Primeiros Passos

O arquivo `src/setupTests.js` essa importação fornece para nossos testes o que chamamos de custom jest matchers 

### Renderização

Para simulação de renderização do componente é utilizado render(), tendo como parametro o componente desejado para renderizar.

### Seletors/Queries

São métodos para indicar o RTL de algum elemento específico e poder realizar os testes.
[Lista com tipos](https://testing-library.com/docs/queries/about/#types-of-queries)

Prioridade

#### Reflete experiência visual / que há interação do usuário
1. getByRole
1. getByLabelText
1. getByPlaceholderText
1. getByText
1. getByDisplayValue

#### Semanticas

1. geyByAltText
1. getByTitle

#### Test IDs

1. getByTestId - eventos dinamicos

### Testando Eventos

Utiliza o fire event, [lista com eventos disponíveis](https://github.com/testing-library/dom-testing-library/blob/main/src/event-map.js) 