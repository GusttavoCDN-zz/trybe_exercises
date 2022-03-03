function myRemove(arr, item) {
  let newArr = [];
  
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// console.log(myRemove(['Gustavo', 'Larissa', 'Nicolly', 'Luciene', 'Marcos', 'Bea'], 'Marcos'));



// implemente seus testes aqui

module.exports = myRemove;