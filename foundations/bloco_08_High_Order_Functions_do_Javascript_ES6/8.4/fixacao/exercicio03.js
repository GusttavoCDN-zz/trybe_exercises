const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, name) => {
    name.toLowerCase().split('').forEach((letter) => {
      if (letter === 'a') acc += 1
    })

    return acc;
  }, 0);
}

console.log(containsA());