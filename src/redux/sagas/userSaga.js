import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { loginSuccess, loginFailure } from '../actions/userActions';

function loginApi(payload) {
  return axios.post('/api/users/login', payload);
}

function* handleLogin(action) {
  try {
    const response = yield call(loginApi, action.payload);
    yield put(loginSuccess(response.data));
  } catch (error) {
    yield put(loginFailure(error.response.data));
  }
}

export default function* userSaga() {
  yield takeLatest('LOGIN_REQUEST', handleLogin);
}
