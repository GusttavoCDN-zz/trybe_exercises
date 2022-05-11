import * as Redux from 'redux';

const INITIAL_STATE_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const INITIAL_STATE_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

// * Actions
const CHANGE_NAME_STATE_1 = 'CHANGE_NAME_STATE_1';
const CHANGE_NAME_STATE_2 = 'CHANGE_NAME_STATE_2';

const changeName = (name, lastname) => ({
  type: CHANGE_NAME_STATE_1,
  name,
  lastname,
});

const changeName2 = (name, lastname) => ({
  type: CHANGE_NAME_STATE_2,
  name,
  lastname,
});

const firstReducer = (state = INITIAL_STATE_1, action) => {
  switch (action.type) {
    case CHANGE_NAME_STATE_1:
      return {
        ...state,
        nome: action.name,
        sobrenome: action.lastname ? action.lastname : '',
      };
    default:
      return state;
  }
};

const secondReducer = (state = INITIAL_STATE_2, action) => {
  switch (action.type) {
    case CHANGE_NAME_STATE_2:
      return {
        ...state,
        nome: action.name,
        sobrenome: action.lastname,
      };
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  first: firstReducer,
  second: secondReducer,
});

const store = Redux.createStore(rootReducer);

store.subscribe(() => {
  const state = store.getState();
  document.getElementById('nome-1').innerText = state.first.nome;
  document.getElementById('sobrenome-1').innerText = state.first.sobrenome;
  document.getElementById('nome-2').innerText = state.second.nome;
  document.getElementById('sobrenome-2').innerText = state.second.sobrenome;
});

window.onload = () => {
  setTimeout(() => {
    store.dispatch(changeName('Gustavo'));
    store.dispatch(changeName2('Marcos', 'Roberto Amaral Santos'));
  }, 2000);
};
