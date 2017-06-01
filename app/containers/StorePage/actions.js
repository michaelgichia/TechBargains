import Auth from '../Utils';
import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  MERCHANT_RECEIVED_ERROR } from './constants';

// token
const token = `bearer ${Auth.getToken()}`;
axios.defaults.headers.common.Authorization = token;

export const doSaveMerchant = (merchant) => (dispatch) => {
  axios.post('/api/merchant/create', merchant)
  .then((response) => {
    if (response.data.confirmation === 'success') {
      const merchantId = response.data.result.id;
      browserHistory.push(`/dashboard/merchants/${merchantId}`);
    } else {
      // Check if error is array or string.
      const newError = [];
      if (typeof response.data.message === 'string') {
        newError.push(response.data.message);
      } else {
        response.data.message.map((error) => newError.push(error.msg));
      }

      dispatch({
        type: MERCHANT_RECEIVED_ERROR,
        errors: newError,
      });
    }
  });
};
