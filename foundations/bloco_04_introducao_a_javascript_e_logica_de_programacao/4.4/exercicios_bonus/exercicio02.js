// Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(array){
    let newArray = []

    for (let i in array) {
        console.log(array[i])

        for (let j in array[i]) {
            console.log(array[i][j])

            if (array[i][j] % 2 == 0) {
                newArray.push(array[i][j])
            }
        }
    }

    // for (let i = 0; i < array.length; i+= 1){
    //     array[i].forEach(number => {
    //         if (number % 2 === 0) {
    //             newArray.push(number)
    //         }
    //     })
    // }

    return newArray
}


console.log(arrayOfNumbers(vector))