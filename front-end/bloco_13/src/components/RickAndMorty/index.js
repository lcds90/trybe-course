import React, { Component } from 'react';
import style from './style.module.css';

class RickAndMorty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ characters: data.results });
      });
  };

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    const { characters } = this.state;

    return (
      <section className={style.appRickyAndMorty}>
        <h1>Ricky and Morty Characters:</h1>
        <article className={style.body}>
          {characters.map((character) => {
            return (
              <div className={style.container} key={character.name}>
                <p>{character.name}</p>
                <div className={style.imageCharacter}>
                    <img className={style.image} src={character.image} alt={character.name} />
                </div>
              </div>
            );
          })}
        </article>
      </section>
    );
  }
}

export default RickAndMorty;
