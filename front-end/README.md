# Bloco 16 - Redux

## Dia 1 - Introdução

Bloco inicial para explicar fundamentos do Redux, sem a utilização no React.

### Peças do Redux

#### Store
O compartilhamento de estados ocorre nessa lugar sendo representado por um objeto Javascript.

#### Action
Objeto que representa alguma mudança/alteração para ocorrer no State. Podem ser representadas como regras de negócio para mudanças previsíveis e com responsabilidade definida corretamente.

#### Reducer
Função que recebe o estado atual, a corrente e retorna um novo estado a partir delas.
Tem como responsabilidade decidir o que acontecerá com o estado dado uma ação. Eles seguem as regras dando pelas Actions para manipulação da store.