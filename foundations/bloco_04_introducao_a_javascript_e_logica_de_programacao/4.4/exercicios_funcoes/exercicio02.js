// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function higherValue(array) {
 let value = array.reduce((previousValue, currentValue) => {
     return previousValue > currentValue ? previousValue:currentValue
 })


 return array.indexOf(value)

}

console.log(higherValue([2,3,6,7,10,1]))