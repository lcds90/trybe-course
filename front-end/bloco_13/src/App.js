import logo from './logo.svg';
import './App.css';
import { Counter, Joke, Title, RickAndMorty } from './components';

function App() {
  return (
    <div className='App'>
      <Title
        logo={logo}
        title='Bloco 13 - Ciclo de Vida de Componentes e React Router'
        link='https://github.com/lcds90/trybe-course'
        textLink='Repositório'
      />
      <main>
        <Counter />
        <hr />
        <Joke />
        <hr />
        <RickAndMorty />
      </main>
    </div>
  );
}

export default App;
