import { render, screen } from '@testing-library/react';
import App from './App';


describe('Tela de inserção de e-mail', () => {
  it('Verificando RTL', () => {
    render(<App />);
    const linkElement = screen.getByText(/RTL/i);
    expect(linkElement).toBeInTheDocument();
  });
})
