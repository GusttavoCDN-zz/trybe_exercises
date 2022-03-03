// 8 -  Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:

const greet = (name, greeting = 'Hi') => `${greeting} ${name}`;

console.log(greet('Gustavo', 'Olá'))