import * as ActionTypes from "../actions/actionTypes";

const initialState = {
  userId: null,
  signupLoading: false,
  userName: "",
  userEmail: "",
  userMobile: "",
  userProfile_pic: "",
  signUpMessage:null

};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SIGNUP_USER_SUCCESS:
      return { 
        ...state, 
        userName: action?.payload?.user?.name, 
        signupLoading: false,
        userEmail: action?.payload?.user?.email,
        userMobile: action?.payload?.user?.mobile,
        userProfile_pic: action?.payload?.user?.profile_pic,
        userId: action?.payload?.user?.userId,
        signUpMessage:action?.payload?.message,
      };
    case ActionTypes.SIGNUP_USER_FAILURE:
      return { 
        ...state, 
        signupLoading: false, 
        // signUpMessage: action.payload.error 
      };
    // case 'LOGIN_SUCCESS':
    //   return { ...state, loading: false, user: action.user };
    // case 'LOGIN_FAILURE':
    //   return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}
