// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function lowerValue(array) {
    let value = array.reduce((previousValue, currentValue) => {
        return previousValue < currentValue ? previousValue: currentValue
    })

    return array.indexOf(value)
}

console.log(lowerValue([2, -4, 6, 7, 10, 0, -3]))