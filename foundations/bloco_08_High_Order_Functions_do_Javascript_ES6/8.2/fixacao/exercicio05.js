const books = require('./exercicio01.js');

// Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.

function everyoneWasBornOnSecXX() {
  const secXXBegin = 1901;
  const secXXEnd = 2000;

  return books.every((book) => {
    return book.author.birthYear > secXXBegin && book.author.birthYear < secXXEnd;
  });
}

console.log(everyoneWasBornOnSecXX())