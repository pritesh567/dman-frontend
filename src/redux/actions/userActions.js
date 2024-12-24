import * as ActionTypes from "./actionTypes";

export const loginRequest = (payload, callback) => ({
  type: ActionTypes.LOGIN_USER_REQUEST,
  payload,
  callback
});

export const loginSuccess = (user) => ({
  type: ActionTypes.LOGIN_USER_SUCCESS,
  user,
});

export const loginFailure = (error) => ({
  type: ActionTypes.LOGIN_USER_FAILURE,
  error,
});

export const signUpRequest = (payload, callback) => ({
  type: ActionTypes.SIGNUP_USER_REQUEST,
  payload,
  callback
});

export const signUpSuccess = (user) => ({
  type: ActionTypes.SIGNUP_USER_SUCCESS,
  user,
});

export const signUpFailure = (error) => ({
  type: ActionTypes.SIGNUP_USER_FAILURE,
  error,
});