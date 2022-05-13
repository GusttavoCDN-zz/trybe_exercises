import { CHANGE_SIGNAL, MOVE_CAR} from './actionCreators';

const CARS_STATE = {
  cars: {
    red: false,
    blue: false,
    yellow: false
  }
}

const SIGNAL_STATE = {
  signal: {
    color: 'red',
  }
}


export const carsReducer = (state = CARS_STATE, action) => {
  switch (action.type) {
    case MOVE_CAR:
      return {
        ...state,
        cars: {
          ...state.cars,
          [action.car]: action.side,
        }
      }
    default:
      return state;
  }
}

export const signalReducer = (state = SIGNAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_SIGNAL:
      return {
        signal: {
          color: action.payload,
        }
      }
    default:
      return state;
  }
}
