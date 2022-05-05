const service = require('./service');

describe('Exercicio 01', () => {
  it('Verifica se a função RandomNumberr tem o comportamento correto', () => {
    service.randomNumber = jest.fn().mockReturnValue(10);
    expect(service.randomNumber()).toBe(10);
    service.randomNumber();
    expect(service.randomNumber).toHaveBeenCalledTimes(2);
  });

  it('Exercicio 02', () => {
    service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
    expect(service.randomNumber(4, 2)).toBe(2);
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(4, 2);

  });

  it('Exercicio 03', () => {
    service.randomNumber = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);

    expect(service.randomNumber(1, 2, 3)).toBe(6);

    service.randomNumber.mockReset();

    expect(service.randomNumber).toHaveBeenCalledTimes(0);
    service.randomNumber = jest.fn().mockImplementationOnce((a) => a * 2);

    expect(service.randomNumber(10)).toBe(20);
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(10);
  });

  it('Exercicio 04', () => {
    const mockUpper = jest.spyOn(service, 'toUpper');
    mockUpper.mockImplementation((string) => string.toLowerCase());

    expect(mockUpper('GUSTAVO')).toBe('gustavo');
    service.toUpper.mockReset();
    expect(service.toUpper('gustavo')).toBe(undefined);

    service.toUpper.mockRestore();
    expect(service.toUpper('gustavo')).toBe('GUSTAVO');
  })

  it('Exercicio 05', async () => {
    service.fetchDog = jest.fn();
    service.fetchDog.mockResolvedValue('Sucess');

    await expect(service.fetchDog()).resolves.toBe('Sucess');

    service.fetchDog.mockReset();
    expect(service.fetchDog()).toBe(undefined);

    service.fetchDog.mockRejectedValue('Failed');
    await expect(service.fetchDog()).rejects.toBe('Failed');

  })
})
