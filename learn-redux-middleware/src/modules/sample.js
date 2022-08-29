import { handleActions } from 'redux-actions';
import createRequestThunk from '../lib/createRequestThunk';
import * as api from '../lib/api';

// action type 선언
const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';

// redux-thunk 사용
// 시작, 성공, 실패했을 때 각각 다른 action을 dispatch
export const getPost = createRequestThunk(GET_POST, api.getPost);

export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

const initialState = {
  post: null,
  users: null,
};

const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      post: action.payload,
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      users: action.payload,
    }),
  },
  initialState,
);

export default sample;
