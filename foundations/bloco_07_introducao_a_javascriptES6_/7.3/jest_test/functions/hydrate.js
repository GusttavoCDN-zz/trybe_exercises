function hydrate(string) {
  let regex = /\d+/g;
  let stringNumbers = string.match(regex);

  let waterGlasses = stringNumbers.reduce((sum, currentNumber) => {
    return parseInt(sum) + parseInt(currentNumber);
  });

  return (waterGlasses > 1) ? `${waterGlasses} copos de água` : `${waterGlasses} copo de água`;
}

  module.exports = hydrate;