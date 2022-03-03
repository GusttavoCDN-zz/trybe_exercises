function techList(array, name) {
  if (array.length === 0) return 'Vazio!';

  let techListArray = [];

  for (let tech of array) {
    techListArray.push({
      tech: tech,
      name: name,
    });
  }

  return techListArray.sort((a, b) => a.tech.toLowerCase() > b.tech.toLowerCase() ? 1 : -1);
}

module.exports = techList;