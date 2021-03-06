import React from 'react';
import style from './style.module.css';

// SECTION Renderização condicional / atualização de arrays
class DadJoke extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    };
  }

  componentDidMount() {
    this.fetchJoke();
  }

  async fetchJoke() {
    this.setState(
      { loading: true }, // Primeiro parâmetro da setState()!
      async () => {
        const requestHeaders = { headers: { Accept: 'application/json' } };
        const requestReturn = await fetch(
          'https://icanhazdadjoke.com/',
          requestHeaders,
        );
        const requestObject = await requestReturn.json();
        this.setState({
          loading: false,
          jokeObj: requestObject,
        });
      },
    );
  }

  saveJoke() {
    this.setState(({ storedJokes, jokeObj }) => ({
      storedJokes: [...storedJokes, jokeObj],
    }));
    this.fetchJoke();
  }

  renderJokeElement() {
    const { state: { jokeObj: { joke } }, saveJoke } = this;
    return (
      <div>
        <p>{ joke }</p>
        <button type="button" onClick={saveJoke}>
          Salvar piada!
        </button>
      </div>
    );
  }

  render() {
    const { renderJokeElement, state } = this;
    const { storedJokes, loading } = state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div className={style.container}>
        <span>
          {storedJokes.map(({ id, joke }) => (
            <p key={id}>{joke}</p>
          ))}
        </span>

        <div>{loading ? loadingElement : renderJokeElement()}</div>
      </div>
    );
  }
}
// !SECTION

export default DadJoke;
