import React, { Component } from 'react';
import style from './style.module.css';

// SECTION Unindo componentes com estados e eventos
export class ButtonState extends Component {
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

export default ButtonState;
