const books = require('./exercicio01');

// Retorne o nome do livro de menor nome;

function smallerName() {
  let nameBook;
  // escreva aqui o seu código
  books.forEach((book) => {
    if (nameBook === undefined) nameBook = book.name
    book.name.length < nameBook.length ? nameBook = book.name : nameBook;
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

console.log(smallerName())