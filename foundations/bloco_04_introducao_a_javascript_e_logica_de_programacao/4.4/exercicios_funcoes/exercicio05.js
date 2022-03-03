// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function mostRepeatedValue(array) {
    
    let result = array.reduce((previousValue, currentValue) => {
        if (previousValue[currentValue] === undefined) {
            previousValue[currentValue] = 1
        } else {
            previousValue[currentValue]++
        }
        return previousValue
    }, {})

    console.log(result)
    
    let max = 0
    let maxValue = 0
    
    for (let key in result) {
        if (result[key] > max) {
            max = result[key]
            maxValue = key
        }
    }
    
    return maxValue
}

console.log(mostRepeatedValue([2, 3, 2, 5, 8, 2, 3]))


