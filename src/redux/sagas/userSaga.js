import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as ActionTypes from "../actions/actionTypes";
import { apiCall } from '../../services/api/apiHelpers';


function* registerUserSaga(action,callback) {
  try {
    // Prepare FormData
    const { name, email, mobile, password, profile_pic } = action.payload;
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('mobile', mobile);
    formData.append('password', password);
    if (profile_pic) {
      formData.append('formData', formData);
    }
    // Use the apiCall helper
    const response = yield call(apiCall, '/users/register', 'POST', formData, {
      'Content-Type': 'multipart/form-data',
    });

    console.log("cdskmclds",response.status);
    
  
    yield localStorage.setItem('userToken', String(response?.data?.token));    
    yield put({ type: ActionTypes.SIGNUP_USER_SUCCESS, response:response?.data });
    return action.callback(response)
  } catch (error) {
    console.log("errorerror clds",error);
    yield put({ type: ActionTypes.SIGNUP_USER_FAILURE, error });
  }
}

export default function* userSaga() {
  // yield takeLatest('LOGIN_REQUEST', handleLogin);


  yield takeLatest(ActionTypes.SIGNUP_USER_REQUEST, registerUserSaga);
}
