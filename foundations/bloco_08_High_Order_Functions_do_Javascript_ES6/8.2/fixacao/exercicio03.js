const books = require('./exercicio01');

// Encontre o primeiro livro cujo o nome possui 26 caracteres
function getNamedBook() {
  const book = books.find((book) => {
    return book.name.length === 26; 
  });

  return book;
}

console.log(getNamedBook());