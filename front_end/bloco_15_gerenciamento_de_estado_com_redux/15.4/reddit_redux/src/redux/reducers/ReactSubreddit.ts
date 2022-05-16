import { SUCCESS, FAILURE, REQUEST_API } from '../actions';
import { APIResponse } from '../types';

const INITIAL_STATE = {
  posts: [],
  isFetching: false,
  error: false,
};

interface Action {
  type: string;
  payload?: APIResponse;
}

const reactSubreddit = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        isFetching: true,
      };
    case SUCCESS:
      return {
        posts: action.payload,
        isFetching: false,
        error: false,
      };
    case FAILURE:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default reactSubreddit;
