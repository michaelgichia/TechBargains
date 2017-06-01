/*
 *
 * RegisterPage actions
 *
 */
import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
} from './constants';


export const registerUser = (user) => (dispatch) => {
  axios.post('/auth/signup', user)
  .then((response) => {
    if (response.data.success) {
      dispatch({
        type: REGISTRATION_SUCCESS,
        message: response.data.message,
      });
      browserHistory.push('/confirm-email');
    } else {
      // Check if error is array or string.
      const newError = [];
      if (typeof response.data.errors === 'string') {
        newError.concat(response.data.errors);
      } else {
        response.data.errors.map((error) => newError.push(error.msg));
      }
      dispatch({
        type: REGISTRATION_ERROR,
        errors: newError,
      });
    }
  });
};

