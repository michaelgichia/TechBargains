/*
 *
 * RegisterPage reducer
 *
 */
import {
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR } from './constants';

const initialState = {
  errors: [],
  message: '',
};

function registerPageReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        message: action.message,
      };

    case REGISTRATION_ERROR:
      return {
        ...state,
        errors: action.errors,
      };

    default:
      return state;
  }
}

export default registerPageReducer;
