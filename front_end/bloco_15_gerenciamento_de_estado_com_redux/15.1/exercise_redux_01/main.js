import { createStore } from 'redux';

// * Pega todos os botes necessarios
const NEXT_BUTTON = document.getElementById('next');
const PREVIOUS_BUTTON = document.getElementById('previous');
const RANDOM_BUTTON = document.getElementById('random');
const VALUE = document.getElementById('value');

// * Variaveis de Actions a serem realizadas
const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
const RANDOM_COLOR = 'RANDOM_COLOR'

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};


// * Funções para lidar com os actions
const nextColor = () => ({type: NEXT_COLOR});
const previousColor = () => ({type: PREVIOUS_COLOR});
const randomColor = () => {
  const r = Math.floor(Math.random() * 255) + 1;
  const g = Math.floor(Math.random() * 255) + 1;
  const b = Math.floor(Math.random() * 255) + 1;
  const newColor = `rgb(${r}, ${g}, ${b})`;

  return {
    type: RANDOM_COLOR,
    color: newColor,
  }
}

const reducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case NEXT_COLOR:
      return {
        ...state,
        index: state.index < state.colors.length - 1 ? state.index + 1 : 0,
      };
    case PREVIOUS_COLOR:
      return {
        ...state,
        index: state.index > 0 ? state.index - 1 : 0,
      };
    case RANDOM_COLOR:
      return {
        ...state,
        colors: [...state.colors, action.color],
        index: state.colors.length,
      };
    default:
      return state;
  }
};

const Store = createStore(reducer);

Store.subscribe(() => {
  const currentState = Store.getState();
  console.log(currentState)
  const body = document.querySelector('body');
  const color = currentState.colors[currentState.index];
  VALUE.innerText = color;
  VALUE.style.color = 'purple'
  body.style.backgroundColor = color;
})

NEXT_BUTTON.addEventListener('click', () => {
  Store.dispatch(nextColor());
  console.log('next')
});

PREVIOUS_BUTTON.addEventListener('click', () => {
  Store.dispatch(previousColor());
});

RANDOM_BUTTON.addEventListener('click', () => {
  Store.dispatch(randomColor());
});
