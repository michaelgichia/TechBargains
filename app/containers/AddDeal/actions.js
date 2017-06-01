/*
 *
 * Test actions
 *
 */
import axios from 'axios';
import Auth from '../Utils';
import { browserHistory } from 'react-router';
import {
    ITEMS_RECEIVED_ERROR } from './constants';


// Token
const token = `bearer ${Auth.getToken()}`;
axios.defaults.headers.common.Authorization = token;

export const postDeal = (item) => (dispatch) => {
  axios.post('/api/item/create', item)
    .then((response) => {
      if (response.data.confirmation === 'success') {
        const itemId = response.data.result.id;
        browserHistory.push(`/dashboard/items-list/${itemId}`);
      } else {
      // Check if error is array or string.
        const newError = [];
        if (typeof response.data.errors === 'string') {
          newError.push(response.data.errors);
        } else if (typeof response.data.message === 'object') {
          newError.push(response.data.message.message);
        } else {
          response.data.errors.map((error) => newError.push(error.msg));
        }
        dispatch({
          type: ITEMS_RECEIVED_ERROR,
          errors: newError,
        });
      }
    });
};

