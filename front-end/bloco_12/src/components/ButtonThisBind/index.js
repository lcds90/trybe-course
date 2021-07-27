import React, { Component } from 'react';
// SECTION Vinculando funções com this e bind
export class ButtonThisBind extends Component {
  // NOTE class em Javascript irá possuir o construtor, quando declarado super(), significa reescrever o método e garantir o funcionamento de funções nativas do React.
  constructor() {
    super();
    console.info('Componente <ButtonThisBind /> sendo construida...');
    this.handleClick = this.handleClick.bind(this); // NOTE Essa função começara a enxergar o this do escopo da classe
  }

  // NOTE Para referenciar essa função é necessário adicionar o this ao onClick
  handleClick() {
    console.log(this); // NOTE Sem o bind esse this será undefined, pois é uma limitação da linguagem e necessita dessa 'ligação'.
    console.log('clicou!');
  }

  render() {
    const handleClickArrowFunction = () => {
        // NOTE Para acesso ao this sem o bind podemos utilizar um arrow function, porém há uma informação de menos performance
        console.log(this);
        console.log('clicou com =>');
    };
    console.info(`Objeto this no render(): `, this);
    return (
      <div>
        <h2>This e Bind</h2>
        <button onClick={this.handleClick}>Botão</button>
        <button onClick={handleClickArrowFunction}>
          Botão sem Bind com Arrow Function
        </button>
      </div>
    );
  }
}
// !SECTION

export default ButtonThisBind;
