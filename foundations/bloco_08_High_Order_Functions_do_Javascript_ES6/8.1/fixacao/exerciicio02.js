function loterry(number, callback) {
  
  const numberSorted = Math.floor((Math.random() * 5) + 1);
  console.log(numberSorted)

  return (callback(numberSorted, number)) ? 'Parabens, vc ganhou!' : 'Tente novamente' 
}


const verifyNumberSorted = (numberOne, numberTwo) => numberOne === numberTwo;


console.log(loterry(1, verifyNumberSorted));