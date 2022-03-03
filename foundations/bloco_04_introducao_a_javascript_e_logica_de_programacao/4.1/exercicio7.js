// Converte nota de 0 a 100 para conceito de A a F

const note = 100;

if (note > 100 || note < 0) {
    console.log('Nota inválida');
} else if (note >= 90) {
    console.log('A');
} else if (note >= 80) {
    console.log('B');
} else if (note >= 70) {
    console.log('C');
} else if (note >= 60) {
    console.log('D');
} else if (note >= 50) {
    console.log('E');
} else {
    console.log('F');
} 