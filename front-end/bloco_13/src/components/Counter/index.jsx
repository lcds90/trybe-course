/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React from 'react';
import style from './style.module.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      shouldRender: false,
    };
    console.log('construtor');
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(_nextProps, _nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(_prevProps, _prevState) {
    console.log('componentDidUpdate');
  }

  handleClick(_e) {
    this.setState((state) => ({
      counter: state.counter + 1,
      shouldRender: true,
    }));
  }

  render() {
    const {
      handleClick,
      state: { counter, shouldRender },
    } = this;
    console.log('render');
    return (
      <div className={style.container}>
        <h1 className={style.counterTitle}>Contador</h1>
        <p>
          Quando o componente é inserido no DOM,
          {' '}
          <b>sem o clique no botão Soma</b>
          ,
          {' '}
          <br />
          aparecerão as seguintes mensagens no console do seu browser
          {' '}
          <br />
        </p>
        <i>
          <ul className={style.listLifeCylces}>
            <li className={style.listLifeCylcesItem}>constructor</li>
            <li className={style.listLifeCylcesItem}>render</li>
            <li className={style.listLifeCylcesItem}>componentDidMount</li>
          </ul>
        </i>
        <p>
          A ordem dos chamados refletem a execução dos ciclo de vida do
          componente.
        </p>
        <button type="button" className={style.counterButton} onClick={handleClick}>+ 1</button>
        <p className={style.counter}>{counter}</p>
        {shouldRender && (
          <>
            <p>Ao clicar no botão aparecerão os ciclos de vida:</p>
            <i>
              <ul className={style.listLifeCylces}>
                <li className={style.listLifeCylcesItem}>shouldComponentUpdate</li>
                <li className={style.listLifeCylcesItem}>render</li>
                <li className={style.listLifeCylcesItem}>componentDidUpdate</li>
              </ul>
            </i>
            <p>
              O método render é executado novamente,
              pois quando há atualização de states ou props, o componente é renderizado novamente.
              {' '}
              <br />
              Podemos impedir a renderização retornando
              {' '}
              <b>false</b>
              {' '}
              em shouldComponentUpdate,
              pois o estado é atualizado somente a partir desse ponto sendo possível
              realizar uma lógica de comparação para sua atualização.
              {' '}
              <br />
              Nos métodos
              {' '}
              <i>shouldComponentUpdate e componentDidUpdate</i>
              {' '}
              podemos acessar states ou props próximos e anteriores
            </p>
          </>
        )}
      </div>
    );
  }
}

export default Counter;
