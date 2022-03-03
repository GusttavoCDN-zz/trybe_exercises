// Programa que compara 3 numeros e retornar o maior valor entre eles.

const number1 = 30;
const number2 = 45;
const number3 = 10;

let bigger = undefined;

if (number1 > number2 && number1 > number3) {
    bigger = number1;
} else if (number2 > number1 && number2 > number3) {
    bigger = number2;
} else {
    bigger = number3;
}

console.log(bigger)