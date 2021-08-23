// App.js
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Email, Joke, Title } from './components';
function App() {
  return (
    <div className="App">
      <Title
        logo={logo}
        title="Bloco 15 - RTL (React Testing Library)"
        link="https://github.com/lcds90/trybe-course"
        textLink="Repositório"
      />
      <main>
      <h2>Passos iniciais</h2>
        <Email />
        <div>
        <h2>Mocks e Inputs</h2>
          <Joke />
        </div>
      </main>
    </div>
  );
}

export default App;