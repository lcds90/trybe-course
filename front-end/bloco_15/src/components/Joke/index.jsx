import React, {Component} from 'react';

// SECTION Bloco 15 - Mocking Modules
class Joke extends Component {
    constructor() {
        super();
        this.state = {
          joke: '',
        }
      }
    
      componentDidMount() {
        const API_URL = 'https://icanhazdadjoke.com/';
        fetch(API_URL, { headers: { Accept: 'application/json' } })
          .then((response) => response.json())
          .then((data) => this.setState({ joke: data.joke }));
      }
    
      render() {
        return (
          <div className="App">
            {this.state.joke}
          </div>
        );
      }
}
// !SECTION

export default Joke;