// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindromos(string) {
    
    if (string === "") {
        return "Nenhuma Frase inserida"
    }

    let re = /[\W_]/g; // regExp para retirar qualquer pontuação do texto!

    let lowString = string.toLowerCase().replace(re, "")

    console.log(lowString)
    
    let newString = lowString.split("").reverse().join("")

    console.log(newString)
    return lowString == newString
}

console.log(verificaPalindromos("arara"))