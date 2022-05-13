import { SUBMIT_FORM } from '../actions/index';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: '',
};

const form = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SUBMIT_FORM:
    return {
      ...state,
      name: action.data.nome,
      email: action.data.email,
      cpf: action.data.cpf,
      address: action.data.endereco,
      city: action.data.cidade,
      state: action.data.estado,
    };
  default:
    return state;
  }
};

export default form;
