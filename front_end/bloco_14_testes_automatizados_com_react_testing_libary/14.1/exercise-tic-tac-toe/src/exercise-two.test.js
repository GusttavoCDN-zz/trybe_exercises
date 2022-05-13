import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// Alguns describe já possuem a orientação do que precisa ser testado.
// Pode modifica-los mas lembre que os testes precisam testar todo o comportamento,
// das casas.
// A funcionalidade não está pronta, portanto esse teste não passará. Crie-a.

const CELL_NUMBERS = 9;

describe('Comportamento de cada casa', () => {
  test('Ao clicar em um casa deve adicionar o símbolo apenas naquele lugar', () => {
    const { getByTestId, getAllByAltText, queryByAltText } = render(<App />);

    // Pode modificar esse teste para se adequar a forma que estiver fazendo o jogo.
    // Aqui está simulando o clique em uma casa

    userEvent.click(getByTestId('cell_0'));
    expect(getAllByAltText('X')).toHaveLength(1);
    expect(queryByAltText('O')).toBeNull();

    // Foi testado apenas um clique em uma casa
    // Agora precisa testar um segundo clique em outra casa e verificar o comportamento esperado.
    userEvent.click(getByTestId('cell_3'));
    expect(getAllByAltText('X')).toHaveLength(1);
    expect(getAllByAltText('O')).toHaveLength(1);
  });

  test("O simbolo precisa ser trocado ao clicar em uma casa para a outra, 'X' para 'O', começando com o 'X'", () => {
    const { getByTestId, getAllByAltText } = render(<App />);
    for (let i = 0; i < CELL_NUMBERS; i += 1) {
      userEvent.click(getByTestId(`cell_${i}`));
    }
    expect(getAllByAltText('X')).toHaveLength(5);
    expect(getAllByAltText('O')).toHaveLength(4);
  });

  test('Se clicar em uma casa já preenchida, o simbolo deve continuar o mesmo', () => {
    const { getByTestId, getAllByAltText, getAllByTestId } = render(<App />);

    userEvent.click(getByTestId('cell_3'));
    expect(getByTestId('cell-img')).toHaveAttribute('alt', 'X');
    userEvent.click(getByTestId('cell_3'));
    expect(getByTestId('cell-img')).not.toHaveAttribute('alt', 'O');

    userEvent.click(getByTestId('cell_2'));
    expect(getAllByTestId('cell-img')[0]).toHaveAttribute('alt', 'O');
    expect(getAllByAltText('X')).toHaveLength(1);
    expect(getAllByAltText('O')).toHaveLength(1);

  });

  test('O simbolo das casas precisam ser mantidas, quando outra casa for clicada', () => {
    const { getByTestId, getAllByAltText} = render(<App />);

    userEvent.click(getByTestId('cell_1'));
    userEvent.click(getByTestId('cell_2'));
    userEvent.click(getByTestId('cell_3'));

    expect(getAllByAltText('X')).toHaveLength(2);
    expect(getAllByAltText('O')).toHaveLength(1);

  });

  test('O simbolo não pode ser mudado se a casa for clicada duas vezes seguidas.', () => {
    const { getByTestId } = render(<App />);

    userEvent.click(getByTestId('cell_1'));
    userEvent.click(getByTestId('cell_1'));
    expect(getByTestId('cell-img')).toHaveAttribute('alt', 'X');
  });
});
