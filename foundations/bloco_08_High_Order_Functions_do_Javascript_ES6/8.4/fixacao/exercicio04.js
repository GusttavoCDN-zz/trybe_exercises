const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
 const studentsAndGrades = students.map((student, index) => {
  return {
    name: student,
    average: grades[index].reduce((acc, current) => acc + current) / grades[index].length
  }
 });

 return studentsAndGrades
}


console.log(studentAverage());