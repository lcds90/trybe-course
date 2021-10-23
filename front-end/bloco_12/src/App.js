import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import { ButtonThisBind, ButtonState } from './components/Button';
import Form from './components/Form';

function App() {
  return (
    <div className='App'>
      <Title
        logo={logo}
        title='Bloco 12 - Componentes com Estado, Eventos e Formulários'
        link='https://github.com/lcds90/trybe-course'
        textLink='Repositório'
      />
      <main>
        <ButtonThisBind />
        <ButtonState />
        <Form />
      </main>
    </div>
  );
}

export default App;
