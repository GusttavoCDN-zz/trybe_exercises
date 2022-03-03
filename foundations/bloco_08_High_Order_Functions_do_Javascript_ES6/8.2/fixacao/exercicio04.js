const books = require('./exercicio01.js');

// Ordene os livros por data de lançamento em ordem decrescente

function booksOrderedByReleaseYearDesc() {
  return books.sort((bookA, bookB) => {
    return bookB.releaseYear - bookA.releaseYear;
  });
}

console.log(booksOrderedByReleaseYearDesc())