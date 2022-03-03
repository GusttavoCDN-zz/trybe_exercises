// Verificar validade de um triangulo

const angle1 = 100
const angle2 = 50
const angle3 = 30

let isTriangle = false

if(angle1 < 0|| angle2 < 0|| angle3 < 0) {
    console.log("Algum angulo esta invalido")
}

if (angle1 + angle2 + angle3 === 180) {
    isTriangle = true
} 

console.log(isTriangle)