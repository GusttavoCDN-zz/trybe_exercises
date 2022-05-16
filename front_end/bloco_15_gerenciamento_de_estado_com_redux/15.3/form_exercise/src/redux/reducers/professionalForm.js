import { SUBMIT_PRO_FORM } from '../actions';

const INITIAL_STATE = {
  summary: '',
  role: '',
  roleDescription: '',
};

const professionalForm = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SUBMIT_PRO_FORM:
    return {
      ...state,
      summary: action.data.curriculo,
      role: action.data.cargo,
      roleDescription: action.data.descricao,
    };
  default:
    return state;
  }
};

export default professionalForm;
