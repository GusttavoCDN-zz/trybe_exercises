// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let evenNumbers = [];

for (let number of numbers) {
    if (number % 2 !== 0) {
        evenNumbers.push(number);
    }
}

if (evenNumbers.length === 0) {
    console.log('nenhum valor ímpar encontrado');
} else {
    console.log(evenNumbers)
}