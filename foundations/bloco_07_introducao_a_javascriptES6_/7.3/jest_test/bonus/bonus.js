// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  try {
    for (let employe in professionalBoard) {
      if (professionalBoard[employe].id === id) {
        if (Object.keys(professionalBoard[employe]).includes(detail)) {
          if (detail === 'specialities') {
            return `ID: ${id}, ${detail}: ${professionalBoard[employe][detail].join(", ")}`
          } else {
            return `ID: ${id}, ${detail}: ${professionalBoard[employe][detail]}`
          }

        } else {
          throw new Error('Informação desejada não existe para esse ID');
        }
      }
    }

    throw new Error('ID não identificada');

  } catch (error) {
    throw error.message;
  }
};

// console.log(searchEmployee('8579-6', "firstNme")

module.exports = (a, b) => a + b; 