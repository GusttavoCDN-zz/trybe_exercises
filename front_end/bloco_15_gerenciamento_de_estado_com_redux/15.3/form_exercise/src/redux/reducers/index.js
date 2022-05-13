import { combineReducers } from 'redux';
import form from './form';
import professionalForm from './professionalForm';

const rootReducer = combineReducers({ form, professionalForm });

export default rootReducer;
