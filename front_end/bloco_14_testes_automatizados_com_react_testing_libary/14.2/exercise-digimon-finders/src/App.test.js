import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Teste da aplicação toda', () => {
  it('Testa se os elementos de input e botão aparecem ao iniciar a pagina', () => {
    render(<App />);
    const input = screen.getByLabelText('Digimon');
    const button = screen.getByRole('button');

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    const searchInput = screen.getByRole('textbox', { name: /Digimon/i });
    expect(searchInput).toHaveTextContent('');
  });

  it('Verifica que a tela começa sem digimons renderizados', () => {
    render(<App />);

    const digimonName = screen.queryByTestId('digimonName');
    expect(digimonName).not.toBeInTheDocument();
  });

  it('Testa se o input funciona da forma esperada', () => {
    render(<App />);
    const input = screen.getByLabelText('Digimon');
    const digimon = 'Abbadomon';
    userEvent.type(input, digimon);
    expect(input.value).toBe(digimon);
  });

  it('Testa a chamda da API', async () => {
    render(<App />);

    const apiResponse = [
      {
        name: 'Agumon',
        img: 'https://digimon.shadowsmith.com/img/agumon.jpg',
        level: 'Rookie',
      },
    ];

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(apiResponse),
    });

    const button = screen.getByRole('button');
    const input = screen.getByLabelText('Digimon');
    const digimon = 'Agumon';
    const URL = 'https://digimon-api.vercel.app/api/digimon/name/Agumon';
    userEvent.click(button);
    expect(global.fetch).not.toHaveBeenCalled();

    userEvent.type(input, digimon);
    userEvent.click(button);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(URL);
    expect(await screen.findByText(digimon)).toBeInTheDocument();
    expect(await screen.findByRole('heading', { name: digimon, level: 2 }));
    expect(await screen.findByRole('img')).toHaveAttribute('alt', digimon);
  });

  it('Testa se retorna a mensagem de erro ao buscar Pokemon que nãoe existe', async () => {
    const ErrorMsg = 'A is not a Digimon in our database.';

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({ ErrorMsg }),
    }));

    render(<App />);

    const searchInput = screen.getByRole('textbox', { name: /Digimon/i });
    expect(searchInput).toHaveValue('');

    userEvent.type(searchInput, 'Teste');
    expect(searchInput).toHaveValue('Teste');

    const button = screen.getByRole('button', { name: /Search Digimon/i });
    expect(button).toBeInTheDocument();
    userEvent.click(button);

    await screen.findByText('A is not a Digimon in our database.');

    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith(
      'https://digimon-api.vercel.app/api/digimon/name/Teste',
    );
  });

  it('Testa oque ocorre quando o fetch é chamado sem valor', () => {
    expect(global.fetch()).rejects.toThrow('No value');
  });
});
