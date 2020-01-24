import axios from 'axios';
import { AUTH_LOGOUT, AUTH_SUCCESS, GET_USER_DATA } from './actionTypes';
import Message from '../../utils/Message';
import { errors } from '../../language/ru_RU'

export function auth(email, password, isLogin) {
  return async dispatch => {
    const authData = {
      email, password,
      returnSecureToken: true
    };

    const url = isLogin ?
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDUb3kV8_6SVzHANPtz1qTMmeP4-kFMH0Y' :
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDUb3kV8_6SVzHANPtz1qTMmeP4-kFMH0Y';

    try {
      const { data } = await axios.post(url, authData);
      const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000);
      localStorage.setItem('token', data.idToken);
      localStorage.setItem('userId', data.localId);
      localStorage.setItem('expirationDate', expirationDate);
      dispatch(authSuccess(data.idToken));
      dispatch(autoLogout(data.expiresIn));
      dispatch(setLogin(data.email))
    } catch (e) {
      const { message } = e.response.data.error;
      const m = new Message(errors[message] || message, 'danger');
      m.call();
      console.error(e);
    }
  }
}

export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.removeItem('expirationDate');
  return {
    type: AUTH_LOGOUT
  }
}

export function authSuccess(token) {
  return {
    type: AUTH_SUCCESS,
    token
  }
}

export function autoLogin() {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
    } else {
      const expirateDate = new Date(localStorage.getItem('expirationDate'));
      if (expirateDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token));
        dispatch(autoLogout((expirateDate.getTime() - new Date().getTime()) / 1000));
      }
    }
  }
}

export function autoLogout(time) {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout())
    }, time * 1000);
  }
}

export function getUserData() {
  return async dispatch => {
    const idToken = localStorage.getItem('token');
    if (idToken) {
      const { data } = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDUb3kV8_6SVzHANPtz1qTMmeP4-kFMH0Y', { idToken });
      const login = data.users[0].email;
      dispatch(setLogin(login));
    }
  }
}

export function setLogin(login) {
  return {
    type: GET_USER_DATA,
    login
  }
}
