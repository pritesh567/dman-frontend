const initialState = {
    user: null,
    loading: false,
    error: null,
  };
  
  export default function userReducer(state = initialState, action) {
    switch (action.type) {
      case 'LOGIN_REQUEST':
        return { ...state, loading: true, error: null };
      case 'LOGIN_SUCCESS':
        return { ...state, loading: false, user: action.user };
      case 'LOGIN_FAILURE':
        return { ...state, loading: false, error: action.error };
      default:
        return state;
    }
  }
  