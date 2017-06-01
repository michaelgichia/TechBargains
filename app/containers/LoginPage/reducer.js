/*
 *
 * LoginPage reducer
 *
 */
import {
  LOGIN_SUCCESS,
  LOGIN_ERRORS,
} from './constants';

const initialState = {
  authenticated: false,
  message: '',
  errors: '',
  user: [],
};

function loginPageReducer(state = initialState, action) {
  switch (action.type) {

    case LOGIN_SUCCESS:
      return {
        ...state,
        authenticated: true,
        message: action.message,
      };

    case LOGIN_ERRORS:
      return {
        ...state,
        authenticated: true,
        errors: action.errors,
      };

    default:
      return state;
  }
}

export default loginPageReducer;
