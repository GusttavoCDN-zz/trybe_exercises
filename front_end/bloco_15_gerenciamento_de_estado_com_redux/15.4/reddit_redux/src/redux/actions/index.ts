import { Dispatch } from 'redux';
import fetchData from '../../services/api';
import { APIResponse } from '../types';

export const REQUEST_API = 'REQUEST_API';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

// * Actions Creators
export const requestAPI = () => ({
  type: REQUEST_API,
});

export const successResponse = (payload: APIResponse[]) => ({
  type: SUCCESS,
  payload,
});

export const failResponse = () => ({
  type: FAILURE,
});

export function fetchPosts(subreddit: string) {
  console.log(subreddit);
  return async (dispatch: Dispatch) => {
    dispatch(requestAPI());
    try {
      const posts: APIResponse[] = await fetchData(subreddit);
      dispatch(successResponse(posts));
    } catch (error: unknown) {
      dispatch(failResponse());
    }
  };
}
