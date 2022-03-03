const books = require('./exercicio01.js');

// Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.

function someBookWasReleaseOnThe80s() {
  return books.some((book) => {
    return book.releaseYear >= 1980 && book.releaseYear <= 1989;
  });
}

console.log(someBookWasReleaseOnThe80s())