const Redux = require('redux');

const INITIAL_STATE = {
  login: false,
  email: '',
};

// * Função para manipular o estado da store atraves do reducer. Tambem chamada de ActionCreator. Ou seja, podemos ter varias funções similares para manipular o que for necessario dentro do estado! A action em si é o objeto que vai ser despachado para o reducer.
const makeLogin = (email) => ({
  type: 'LOGIN',
  email,
})

// * A função reducer é responsavel por manipular a store. Na criação ela deve retornar pelo menos um estado inicial para que tudo funcione perfeitamente. O reducer recebe como parametro o estado Inicial e um objeto com informações para alteração nesse estado O exemplo mostrado aqui é uma implementação padrão.Sua unica tarefa SEMPRE, sera manipular o estado!
const reducer = (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default:
      return state;
  }
};

// * Configuração Inicial da Store. Aqui fica salvo o estado inicial, é necessario que exista um reducer que retorne esse estado inicial
const store = Redux.createStore(reducer);

store.dispatch(makeLogin('gusttavo.x.santos@gmail.com'));

store.getState();

store.dispatch(makeLogin("pr.marcos@gmail.com"));

store.getState()
