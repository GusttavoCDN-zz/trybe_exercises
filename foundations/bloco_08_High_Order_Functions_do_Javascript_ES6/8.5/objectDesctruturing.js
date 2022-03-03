
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const trappisEnterpreise = {...user, ...jobInfos};

const {name, age, nationality, profession, squad, squadInitials} = trappisEnterpreise;

console.log(`Hi, my name is ${name}, I am  ${age} years old and I'm ${nationality}. I work as a ${profession}
  and my squad is ${squadInitials} - ${squad}
`)