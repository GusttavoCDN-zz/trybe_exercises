import {CHANGE_SIGNAL} from '../actions';

const INITIAL_STATE = {
  signal: {
    color: 'red',
  },
};

export const signalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_SIGNAL:
      return {
        signal: {
          color: action.payload,
        },
      };
    default:
      return state;
  }
};
