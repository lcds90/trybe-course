# Bloco 12 - Componentes com Estado, Eventos e Formulários

## Componentes com Estado e Eventos

A intenção do bloco é aprofundar o conhecimento com o conceito de estado.
Um estado representa um momento do componente dinâmico, é o momento de algo que pode vir a mudar, uma informação que queremos preservar enquanto o componente interage com quem o usa.
O estado é o que dá dinamismo á aplicação e o React facilita todo o trabalho que teriamos com javascript puro.

### Estado / State
Lugar onde é guardado informações que devem persistir no componente enquanto a tela não for fechada ou atualizada. 
Cada componente tem seu próprio estado e ele <b>NÃO ENXERGA</b> os estados dos componentes.

### This / Bind

O this no React tudo o que representa o componente, podendo ser um componente de classe ou funcional.
As funções dentro do escopo da classe precisam ser invocadas com o `this` e em seu construtor serem atreladas com um `bind` para poder ter acesso ao `this do componente`.
A primeira função executada no componente é o `constructor()` e a partir dele declaramos as funções que fazem parte do escopo da classe. E para adicionar lógica extra ao componente é necessário invocar o super.
É possível utilizar uma arrow function para utilização do this na classe sem a necessidade do bind porém há garantias de menos performance na aplicação.

### Unindo estados e eventos

Jamais faça algo como this.state = { ... }, faça somente no constructor, pois a forma que o React funciona é assícrona, ele não pode garantir que o state será atualizado pois há uma fila de pendências.
Quando é utilizado um arrow function no setState, podemos passar dois parametros sendo o primeiro `estadoAnterior` e `props` do componente, é uma garantia que antes de ocorrer a atualização, os estados do componente foram retornados.

### Props vs States

#### Props
Forma de passar componentes de pai para filho, valores fixos que o componente recebe.

#### State
Reservado para dados que o componente controla, guarda valores do componente.

## Links Úteis
- [State dos Componentes](https://pt-br.reactjs.org/docs/faq-state.html)
- [Estado e Ciclo de Vida](https://pt-br.reactjs.org/docs/state-and-lifecycle.html)
- [Manipulando Eventos](https://pt-br.reactjs.org/docs/handling-events.html)
- [Synthetic Event](https://pt-br.reactjs.org/docs/events.html)
- [How to become a pro with React setState() in 10 minutes](https://www.freecodecamp.org/news/get-pro-with-react-setstate-in-10-minutes-d38251d1c781/)
- [React JS Tutorial - State](https://www.youtube.com/watch?v=4ORZ1GmjaMc)
- [React + this + bind](https://medium.com/tableless/https-medium-com-tableless-react-this-bind-so-sei-que-e-assim-73e75f2adbd3)
- [Binding vs Arrow Function](https://stackoverflow.com/a/56311840)