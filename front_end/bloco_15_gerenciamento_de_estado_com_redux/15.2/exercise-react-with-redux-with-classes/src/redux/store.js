import {createStore, combineReducers} from 'redux';
import {carsReducer, signalReducer} from './reducers.js';

const rootReducer = combineReducers({carsReducer, signalReducer});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
