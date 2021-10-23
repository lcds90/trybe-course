import React, { Component } from 'react';
import style from './style.module.css';

// SECTION 12.1 - Componentes com estados e eventos

// SECTION Unindo componentes com estados e eventos
class ButtonState extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      buttonOne: 0,
      buttonTwo: 0,
      buttonThree: 0,
    };
  }

  // NOTE Após conseguir o acesso com o bind, a função consegue ter acesso ao this da classe e localizar o state do componente
  async handleClick(e) {
    // NOTE Jamais faça algo como this.state = { ... }, faça somente no constructor
    // NOTE O prefixo underline indica que não irá utilizar
    // NOTE É feito de callback para garantir o valor anterior tenha retornado antes de realizar alguma mudança, assim como um then...
    await this.setState((estadoAnterior, _props) => ({
      [e.target.name]: estadoAnterior[e.target.name] + 1,
    }));
    const valueFromState = this.state[e.target.name];
    if(valueFromState % 2 === 0) e.target.className = style.even;
    else e.target.className = style.odd;
    console.log(e);
    console.log(this.state);
  }

  render() {
    const { buttonOne, buttonTwo, buttonThree } = this.state;
    return (
      <div>
        <h2>Unindo estados e eventos</h2>
        <div className={style.clicksContainer}>
          Número de cliques
          <button name='buttonOne' onClick={this.handleClick}>
            {buttonOne}
          </button>
        </div>
        <div className={style.clicksContainer}>
          Número de cliques
          <button name='buttonTwo' onClick={this.handleClick}>
            {buttonTwo}
          </button>
        </div>
        <div className={style.clicksContainer}>
          Número de cliques
          <button name='buttonThree' onClick={this.handleClick}>
            {buttonThree}
          </button>
        </div>
      </div>
    );
  }
}
// !SECTION
// SECTION Vinculando funções com this e bind

class ButtonThisBind extends Component {
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
// !SECTION

export { ButtonState, ButtonThisBind };
