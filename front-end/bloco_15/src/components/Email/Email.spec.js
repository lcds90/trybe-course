import { render, fireEvent } from '@testing-library/react';
import ValidEmail from '../ValidEmail';
import Email from './';


describe('Tela de inserção de e-mail', () => {
  it('Verificando se existe o campo Email.', () => {
    const { getByLabelText } = render(<Email />);
    const inputEmail = getByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
  });
  
  it('Verificando se existe um botão', () => {
    const { getByTestId } = render(<Email />);
    const btn = getByTestId('id-send');
    expect(btn).toBeInTheDocument();
    expect(btn.type).toBe('button');
    expect(btn).toHaveValue('Enviar');
  });
  
  it('Verificando se existe dois botões', () => {
    const { getAllByRole } = render(<Email />);
    const buttons = getAllByRole('button');
    expect(buttons.length).toBe(2);
  });

  it('Verificando se o botão e o campo email estão funcionando.', () => {
    const { getByTestId, getByLabelText } = render(<Email />);
  
    const EMAIL_USER = 'email@email.com';
  
    const textEmail = getByTestId('id-email-user');
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:');
  
    const btnSend = getByTestId('id-send');
    const inputEmail = getByLabelText('Email');
    fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
    fireEvent.click(btnSend);
    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
  });

  it('Testando caso o email seja valido.', () => {
    const EMAIL_USER = 'email@email.com';
    const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
    const isValid = getByText('Email Valido');
    expect(isValid).toBeInTheDocument();
  });

  it('Testando caso o email seja inválido.', () => {
    const EMAIL_USER = 'emailerrado';
    const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
    const isValid = getByText('Email Inválido');
    expect(isValid).toBeInTheDocument();
  });
})
