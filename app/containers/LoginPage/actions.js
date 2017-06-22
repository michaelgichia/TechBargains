/*
 *
 * LoginPage actions
 *
 */
import axios from 'axios';
import Auth from '../Utils';
import { browserHistory } from 'react-router';

import {
  LOGIN_ERRORS,
  LOGIN_SUCCESS } from './constants';

export const loginUser = (user) => (dispatch) => {
  axios.post('/auth/login', user)
  .then((response) => {
    if (response.data.success) {
      // Save token
      Auth.authenticateUser(response.data.token);

      dispatch({
        type: LOGIN_SUCCESS,
        user: response.data.success.user,
        message: response.data.message,
      });

      // Redirect to dashboard.
      // browserHistory.push('/dashboard');
      window.location.href = '/dashboard';
    } else {
      dispatch({
        type: 'FLASH_MESSAGE_OPEN',
        errors: response.data.errors.message,
      });
      // Redirect to login.
      // browserHistory.push('/login');
      window.location.href = '/login';
    }
  });
};

