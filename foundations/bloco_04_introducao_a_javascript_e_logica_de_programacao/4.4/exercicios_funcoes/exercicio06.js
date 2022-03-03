//   Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function sumAll(n) {

    let total = 0;

    for (let i = 0; i <= n; i += 1) {
        total += i
    }

    return total
}

console.log(sumAll(10))