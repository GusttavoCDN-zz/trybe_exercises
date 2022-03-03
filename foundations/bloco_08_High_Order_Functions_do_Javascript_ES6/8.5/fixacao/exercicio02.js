// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

function sum(...numbers) {
  console.log(numbers);

  return numbers.reduce((acc, current) => acc + current);
}


console.log(sum(1, 2, 3))