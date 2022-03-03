// Movimentos de peça de Xadrez

const piece = "tORRE"

let moves = ""

switch (piece.toLowerCase()) {
    case "peao":
        moves = "move-se apenas para frente uma casa por vez e pode comer em diagonal"
        console.log(moves)
        break;
    case "torre":
        moves = "move-se em linha reta, quantas casas quiser, para frente, tras, direita e esquerda"
        console.log(moves)
        break;
    case "bispo":
        moves = "move-se em diagonal, quantas casas quiser, para frente, tras, direita e esquerda"
        console.log(moves)
        break;
    case "cavalo":
        moves = "move-se em L"
        console.log(moves)
        break;
    case "rainha":
        moves = "move-se para qualquer direção possivel quantas casas quiser"
        console.log(moves)
        break;
    case "rei":
        moves = "move-se em qualquer direção possivel, apenas uma casa por vez"
        console.log(moves)
        break;
    default:
        console.log("Peca não existe")
}