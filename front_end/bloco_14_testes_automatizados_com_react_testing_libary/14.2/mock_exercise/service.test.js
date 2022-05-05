import { randomNumber } from './service';

describe('Exercicios do dia, parte 1', () => {
  it('Verifica se a função RandomNumberr tem o comportamento correto', () => {
    randomNumber = jest.fn().mockReturnValue(10);
    console.log(randomNumber);
  });
})
