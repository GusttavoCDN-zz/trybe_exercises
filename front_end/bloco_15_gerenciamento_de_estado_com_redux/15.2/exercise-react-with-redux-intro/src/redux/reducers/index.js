import {combineReducers} from 'redux';
import {carsReducer} from './carsReducer';
import {signalReducer} from './signalReducer';

export const rootReducer = combineReducers({carsReducer, signalReducer});
