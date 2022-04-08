const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) return 1;
  if (studentAnswer === 'N.A') return 0;
  return -0.5;
};

const countPoints = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    contador += actionReturn;
  }
  
  return `Resultado final: ${contador} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));




// const pointing = (gabarito, prova, callback) => {
//   let total = 0;
  
//   for (let index = 0; index < gabarito.length; index+= 1){
//     total = callback(gabarito[index], prova[index], total);
//   }

//   return total;
// }

// const checking = (array1, array2, final) => {
//   if (array1 === array2) {
//     return final += 1;
//   } else if (array2 === 'N.A') {
//     return final+= 0;
//   } else {
//     return final+= -0.5;
//   }
// }