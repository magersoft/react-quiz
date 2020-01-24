import { AUTH_LOGOUT, AUTH_SUCCESS, GET_USER_DATA } from '../actions/actionTypes';

const initialState = {
  token: null,
  login: null
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state, token: action.token, login: action.login
      };
    case AUTH_LOGOUT:
      return {
        ...state, token: null, login: null
      };
    case GET_USER_DATA:
      return {
        ...state, login: action.login
      };
    default:
      return state;
  }
}
