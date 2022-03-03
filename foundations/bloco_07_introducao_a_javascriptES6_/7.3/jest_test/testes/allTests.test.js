


// const sum = require('./functions/sum');

// describe('1 -A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
//   test('1 - deve retornar 9 quando os valores passados forem 4 e 5', () => {
//     expect(sum(4, 5)).toBe(9);
//   });

//   test('2 - Deve verificar se a função lança um erro quando receber valores que não sejam numeros', () => {
//     expect(() => {sum('a', 'b')}).toThrow();
//   });

//   test('3 - Verifica se a função retorna um erro quando passada sem argumentos!', () => {
//     expect(() => {sum()}).toThrow();
//   });

//   test('4 - Deve retornar a mensagem: "parameters must be numbers" quando os valores passados forem !number', () => {
//     expect(() => {sum(4, "5")}).toThrowError(new Error('parameters must be numbers'));
//   });

//   test('5 - Testa se a função lança um erro quando os parâmetros são 4 e "5" ', () =>{
//     expect(() => {sum(4, '5')}).toThrow();
//   });

// });

// -------------------

// const myRemove = require('./functions/myRemove.js');

// describe('2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array', () => {
//   test('1 - Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
//     const arr = [1, 2, 3, 4];
//     expect([1, 2, 4]).toEqual(myRemove(arr, 3));
//   });

//   test('2 - Verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
//     const arr = [1, 2, 3, 4];
//     expect(myRemove(arr, 3)).not.toEqual(arr);
//   });

//   test('3 - Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
//     const arr = [1, 2, 3, 4];
//     expect(myRemove(arr, 5)).toEqual(arr);
//   });

// });

//  -----------------------------------------------

// const myFizzBuzz = require('./functions/myFizzBuzz.js');

// describe('3 - Testar funcionamento da função myFizzBuzz()', () => {

//   test('1 - Verificar se o retorno é fizzbuzz ao passar o número 15', () => {
//     expect(myFizzBuzz(15)).toBe('fizzbuzz');
//   });

//   test('2 - Verificar se o retorno é "fizz" ao passar um número divisivel apenas por 3', () => {
//     expect(myFizzBuzz(9)).toBe('fizz');
//   });

//   test('3 - Verificar se o retorno é "buzz" ao passar um número divisivel apenas por 5', () => {
//     expect(myFizzBuzz(10)).toBe('buzz');
//   });

//   test('4 - Verificar se o retorno é esperado ao passar um número não divisivel por 3 ou 5', () => {
//     expect(myFizzBuzz(8)).toBe(8);
//   });

//   test('5 - Verificar se o retorno é esperado ao passar parametros que não sejam números', () => {
//     expect(myFizzBuzz('1')).toBe(false);
//   });
// });

// -----------------------------------

// const challenges = require('./functions/encodeDecode.js');

// describe('4 - Verifcar funcionamento das funções encode e decode', () => {
//   test('1 - Verifique se enconde  e decode são funções', () => {
//     expect(challenges.encode).toBeDefined();
//     expect(challenges.decode).toBeDefined();
//     expect(typeof challenges.encode).toBe('function');
//     expect(typeof challenges.decode).toBe('function');
//   });

//   test('2 - Teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4, 5', () => {
//     expect(challenges.encode('aeiou')).toBe('12345');
//   });

//   test('3 - Teste se os números 1, 2, 3, 4, 5 são convertidas nas vogais a, e, i, o, u', () => {
//     expect(challenges.decode('12345')).toBe('aeiou');
//   });

//   test('4 - Teste se as outras letras do alfabeto não são convertidas', () => {
//     expect(challenges.encode('Gustavo da Silva Amaral Santos')).toBe('G5st1v4 d1 S3lv1 Am1r1l S1nt4s');
//   });

//   test('5 - Testa se string do parametro tem o mesmo tamanho da string de retorno', () => {
//     expect(challenges.encode('Gustavo da Silva Amaral Santos').length).toBe(30);
//     expect(challenges.decode('Gustavo da Silva Amaral Santos').length).toBe(30);
//   });
// });

// const techList = require('./functions/techList.js');

// describe('Testa a função techList', () => {
//   it('Testa se a função techList é definida', () => {
//     expect(techList).toBeDefined();
//   });
//   it('Testa se techList é uma função', () => {
//     expect(typeof techList).toBe('function');
//   });
//   it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
//     expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
//       {
//         tech: 'CSS',
//         name: 'Lucas'
//       },
//       {
//         tech: 'HTML',
//         name: 'Lucas'
//       },
//       {
//         tech: 'JavaScript',
//         name: 'Lucas'
//       },
//       {
//         tech: 'Jest',
//         name: 'Lucas'
//       },
//       {
//         tech: 'React',
//         name: 'Lucas'
//       }
//     ]);
//   });
//   it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
//     expect(techList([], 'Lucas')).toBe('Vazio!');
//   });
// });

// ---------------------------------------------

const hydrate = require('../functions/hydrate.js');

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});