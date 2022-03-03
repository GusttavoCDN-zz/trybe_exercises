const stateList = document.getElementById('state');
const button = document.getElementById('button');
const body = document.querySelector('body');
const form = document.querySelector('form');

const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espirito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernanbuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];


function createOption(state) {
  const option = document.createElement('option');
  option.value = states[state];
  option.innerText = states[state];

  return option;
}

function validateName() {
  const name = document.getElementById('name');

  if (name.value.length < 3) return false;
  if (name.value.length > 40) return false;
  if (name.value.match(/\d/g)) return false;

  return true;
}

function validateEmail() {
  const email = document.getElementById('email');

  if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) return false;

  return true;
}

function validateCPF() {
  const cpf = document.getElementById('cpf');

  if (!cpf.value.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)) return false;

  return true;
}

function validateAdress() {
  const adress = document.getElementById('endereco');

  if (adress.value.length < 3) return false;
  if (adress.value.length > 200) return false;

  return true;
}

function validadeCity() {
  const city = document.getElementById('city');

  if (city.value.length < 3) return false;
  if (city.value.length > 28) return false;

  return true;
}

function validateResume() {
  const resume = document.getElementById('resume');

  if (resume.value.length < 3) return false;
  if (resume.value.length > 1000) return false;

  return true;
}

function validateRole() {
  const role = document.getElementById('role');

  if (role.value.length < 3) return false;
  if (role.value.length > 40) return false;

  return true;
}

function validateRoleDesc() {
  const roleDesc = document.getElementById('role_desc');

  if (roleDesc.value.length < 3) return false;
  if (roleDesc.value.length > 500) return false;

  return true;
}

function validateData() {
  const data = document.getElementById('start_date');

  if (data.value === '') {
    alert('A data de inicio deve ser informada e não pode ser maior que a data atual!');
    return false;
  }

  return true;
}

function validateForms() {
  validateName();
  validateEmail();
  validateCPF();
  validateAdress();
  validadeCity();
  validateResume();
  validateRole();
  validateRoleDesc();
  validateData();
}

function showErroMessage() {
  const div = document.createElement('div');

  div.innerText = "Preencha o Formulario Corretamente!";
  div.style.color = 'red';
  div.style.marginTop = '10px';

  body.appendChild(div);
}

function doSomething(event) {
  event.preventDefault();

  if (!validateForms()) {
    showErroMessage();
    return;
  }
}

function createCleanButton() {
  const button = document.createElement('button');
  button.innerText = 'Limpar';
  button.style.marginTop = '10px';
  button.id = 'clean';
  return button;
}

function cleanAll(event) {
  event.preventDefault();

  console.log('aaa')
}

window.onload = () => {
  for (let i = 0; i < states.length; i += 1) {
    stateList.appendChild(createOption(i))
  }

  form.appendChild(createCleanButton());
  button.addEventListener('click', doSomething);

  const cleanButton = document.getElementById('clean');
  cleanButton.addEventListener('click', cleanAll);
}

