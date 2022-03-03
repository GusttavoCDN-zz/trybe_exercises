// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function biggerName(array){

    return array.reduce((previousValue, currentValue)=>{
        return previousValue.length > currentValue.length ? previousValue:currentValue
    })
}

console.log(biggerName(["José", "Maria", "Nádia", "Fernanda", "Rubiscleyton", "Clodoaldo"]))