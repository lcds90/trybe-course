# Bloco 13 - Ciclo de Vida de Componentes e React Router

[Deploy](https://lcds-trybe-bloco12.vercel.app/)
| [Diagrama com Ciclo de Vidas](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
| [Documentação - Onde realizar requisições](https://pt-br.reactjs.org/docs/faq-ajax.html)
## Ciclo de Vida do Componente - Lifecycle

As fases do componentes são referentes aos seus comportamentos durante a aplicação que o desenvolvedor pode aplicar da forma que lhe convém, pois lembre-se saber manipular a forma como a interação ocorre com o usuário é essencial para evitar disperdício de recursos, além de garantir a assincronicidade correta na lógica executada, seja de uma API ou alguma função interna.

### Fases

Um componente react possue 3 fases de vida
- ***Montagem***: Inserção no DOM
- ***Atualização***: Atualização em eventos, state ou props
- ***Desmontagem***: Saindo da tela

#### Criação do componente
- _Inicialização_
    - ***Constructor()***: Recebe as props e define o estado
- _Montagem_
    - ***Render***: Renderiza o componente, inserindo-o no DOM
    - Criação dos componentes filhos diretos
    - ***componentDidMount()***: Dispara uma ou mais ações após o componente ser inserido no DOM
        - Útil para início de _requisições_ ou _timers_.

#### Atualização do componente
- _Atualização_
    - ***shouldComponentUpdate()***: Dispara quando há 
        - novas props
        - setState() é invocado
    - A função tem como responsabilidade autorizar a atualização do component, podendo ser
        - true: Segue para a fase de montagem
        - false: Componente não é atualizado
- _Montagem_ 
    - ***Render()***: Disparado novamente
        - Renderiza componente novamente no dom
        - Envio das novas props para componentes filhos diretos
    - ***componentDidUpdate()***: Dispara ações assim que ocorre a atualização do componente.

#### Desmontagem do componente
- _Desmontagem_ 
    - ***componentWillUnmount()***: Dispara ações antes do componente ser desmontado
        - Ideal para _timers_ e _listeners_
        - Não utilize _setState_, não inicie **nada** aqui.

### NUNCA
Quando se faz atualização do estado no componente, nunca atualize o objeto pelo this direto, utilize o setState para definição correta do assicronismo no React
