import React, { Component } from 'react';
import style from './style.module.css';

// SECTION 12.2 - Formulários no React
export class Form extends Component {
  constructor() {
    super();
    this.state = {
      reactFavorite: '',
      email: '',
      name: '',
      age: 0,
      watchLive: true,
      selectTheme: '',
    };
    // LINK https://pt-br.reactjs.org/docs/uncontrolled-components.html#the-file-input-tag
    this.fileInput = React.createRef();
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(`Selected file - ${this.fileInput.current.files[0].name}`);
  }

  handleTextAreaChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    // NOTE event | event.target.value | event.target.value | event.target.checked
    // O evento sem a declaração () no render é passado implicitamente o evento e o desestructuring ocorre no parametro

    /* NOTE Sempre, SEMPRE, SEMPRE!
        Crie events handlers genéricos para evitar repetição de código e incentivar a reutilização */
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Formulário</h1>
        <form onSubmit={this.handleSubmit}>
          {/* NOTE Uso de state na aplicação
                    o value é atribuido o state com a mesma propriedade name,
                    e o eventListener associado com camelCase
        */}
          <fieldset>
            <legend>Informações do convidado:</legend>
            <label htmlFor='reactFavorite'>
              Diga qual é a melhor parte de React!
              <textarea
                onChange={this.handleTextAreaChange}
                name='reactFavorite'
                id='reactFavorite'
                value={this.state.reactFavorite}
              ></textarea>
            </label>

            <label htmlFor='email'>
              {' '}
              Insira seu e-mail
              <input type='email' name='email' id='email' />
            </label>

            <label htmlFor='name'>
              {' '}
              Insira seu nome
              <input type='text' name='name' id='name' />
            </label>

            <label htmlFor='age'>
              {' '}
              Insira sua idade
              <input type='number' name='age' id='age' />
            </label>
          </fieldset>
          <fieldset>
            <legend>Informações sobre o evento:</legend>
          <label htmlFor='watchLive'>
            Irá assistir a live ao-vivo?
            <input type='checkbox' name='watchLive' id='watchLive' />
          </label>

          <label htmlFor='selectTheme'>
            Vote no tema a ser abordado
            <select name='selectTheme' id='selectTheme'>
              <option value='state'>State</option>
              <option value='events'>Events</option>
              <option value='props'>Props</option>
              <option value='hooks'>Hooks</option>
            </select>
          </label>
          </fieldset>

          <fieldset>
            <legend>Upload de Colaboração:</legend>
            <input type='file' ref={this.fileInput} />
          </fieldset>
          <button>Confirmar</button>
        </form>
      </div>
    );
  }
}
// !SECTION

export default Form;
