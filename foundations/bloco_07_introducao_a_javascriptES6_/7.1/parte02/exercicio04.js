const skills = ['JavaScript', 'HTML', 'CSS', 'Lógica', 'Frameworks'];

const orderMySkills = (me) => {
  const greetingNewTryber = (me) => {
    const greetings = 'Tryber x aqui!';
    const newGreetings = greetings.replace('x', me);

    return newGreetings;
  }

  const greet = `${greetingNewTryber(me)} Minhas cinco principais habilidades são: ${skills.sort()} `;

  return greet;
}

console.log(orderMySkills("Lucas"));