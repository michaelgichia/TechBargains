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
      // browserHistory.push('/confirm-email');
      window.location.href = '/confirm-email';
    } else {
      dispatch({
        type: 'FLASH_MESSAGE_OPEN',
        errors: response.data.errors.message,
      });
    }
  });
};

