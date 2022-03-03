const stateList = document.getElementById('state');
const button = document.getElementById('button');
const form = document.querySelector('form');

const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espirito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernanbuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];

const validate = new JustValidate('#form');


function createOption(state) {
  const option = document.createElement('option');
  option.value = states[state];
  option.innerText = states[state];

  return option;
}

for (let i = 0; i < states.length; i += 1) {
  stateList.appendChild(createOption(i))
}

// Criação do select com materialize
$(document).ready(function(){
  $('select').formSelect();
});

validate
  .addField('#first_name', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
    }
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
  ])
  .addField('#cpf',[
    {
      rule: 'required',
    },
    {
      rule: 'customRegexp',
      value: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
      errorMessage: 'Digite o CPF no formato: 000.000.000-00',
    }
  ])
  .addField('#adress', [
    {
      rule: 'required',
    },
    {
      rule: 'minLength',
      value: 10,
    },
    {
      rule: 'maxLength',
      value: 200,
    }
  ])
  .addField('#city', [
    {
      rule: 'required',
    },
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 28,
    }
  ])
  .addField('#state', [
    {
      rule: 'required',
    },    
  ])
  .addField('#resume', [
    {
      rule: 'required',
    },
    {
      rule: 'maxLength',
      value: 500,
    }
  ])
  .addField('#role', [
    {
      rule: 'required',
    },

    {
      rule: "maxLength",
      value: 20,
    }
  ])
  .addField('#role_desc', [
    {
      rule: 'required',
    },
    {
      rule: 'maxLength',
      value: 500,
    }
  ])
  .addField('#datepicker', [
    {
      rule: 'required',
    },
  ])
  .onSuccess((event) => {
    console.log("Form Enviado!");
  });





const picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'D/M/YYYY',
  toString(date, format) {
    // you should do formatting based on the passed format,
    // but we will just return 'D/M/YYYY' for simplicity
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
    // dateString is the result of `toString` method
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }
});