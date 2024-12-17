export const loginRequest = (payload) => ({
    type: 'LOGIN_REQUEST',
    payload,
  });
  
  export const loginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    user,
  });
  
  export const loginFailure = (error) => ({
    type: 'LOGIN_FAILURE',
    error,
  });
  