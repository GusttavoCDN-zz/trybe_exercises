import searchEmployee  from './bonus.js';


describe('Testando a função searchEmployee', () => {
  
  test('1 - Verifica se existe a função searchEmployee', () => {
    expect(searchEmployee).toBeDefined();
  });

  test('2 - Verifica se a função retorna as informaçoes pedidas quando passado um ID existente', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('ID: 8579-6, firstName: Ana');
    expect(searchEmployee('8579-6', 'specialities')).toBe('ID: 8579-6, specialities: UX, Design');
    expect(searchEmployee('4456-4', 'lastName')).toBe('ID: 4456-4, lastName: Zuckerberg');
  });

  test('3 - Verifica se caso não exista o ID no objeto, a função retorna o erro: "ID não identificada"', () => {
    expect(() => {searchEmployee('485456', 'firstName')}).toThrowError(new Error('ID não identificada'));
  });

  test('4 - Verfica se retorna um erro caso informação deseja não exista', () => {
    expect(() => {searchEmployee('4678-2', 'house')}).toThrowError(new Error('Informação desejada não existe para esse ID'));
  });

});