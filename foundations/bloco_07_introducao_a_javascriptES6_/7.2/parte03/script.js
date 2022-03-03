const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addNightPeriod(obj, key, value) {
  if (obj[key] === undefined) return obj[key] = value;
  if (typeof obj[key] === 'object') return obj[key].push(value);

  const previousValue = obj[key];
  const newValue = [previousValue, value];

  return obj[key] = newValue;
}

// addNightPeriod(lesson1, 'turno', 'noite')
addNightPeriod(lesson2, 'turno', 'noite')
// console.log(lesson2)


function listObjKeys(obj) {
  return Object.keys(obj);
}

// console.log(listObjKeys(lesson1));

function showObjLength(obj) {
  return `O tamanho desse objeto é: ${Object.entries(obj).length}`;
}

// console.log(showObjLength(lesson1));

function listObjValues(obj) {
  return `valores: ${Object.values(obj)}`;
}

// console.log(listObjValues(lesson2));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// console.log(allLessons);

function countToltalStudents(obj) {
  let totalStudents = 0;
  
  for (lesson in obj) {
    totalStudents += obj[lesson]['numeroEstudantes'];
  }

  return totalStudents;

}

// console.log(countToltalStudents(allLessons));

const getValueByNumber = (obj,number) => Object.values(obj)[number];

function verifyPair(obj, key, value) {
  const entries = Object.entries(obj);
  
  for (let pair of entries) {
    if (pair[0] === key && pair[1] === value) return true; 
  }

  return false;
}

// console.log(verifyPair(lesson3, 'turno', 'noite'));
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

function countMathStudents(obj) {
  let totalStudents = 0; 
  
  for (let lesson in obj) {
    if (obj[lesson].materia === 'Matemática') totalStudents+= obj[lesson].numeroEstudantes;
  }
  
  return totalStudents;
}

console.log(countMathStudents(allLessons))

function createReport(obj, prof) {
  const report = {
    professor: prof,
    aulas: [],
    estudantes: 0,
  };

  for (let lesson in obj) {
    if (obj[lesson].professor === prof) {
      report.aulas.push(obj[lesson].materia);
      report.estudantes += obj[lesson].numeroEstudantes;
    } 
  }

  return report;

}

console.log(createReport(allLessons, 'Carlos'));