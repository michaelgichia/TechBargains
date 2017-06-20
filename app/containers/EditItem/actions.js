/*
 *
 * EditItem actions
 *
 */

import axios from 'axios';
import { browserHistory } from 'react-router';

import {
  ITEM_RECEIVED_SUCCESS,
    ITEM_RECEIVED_ERROR,
} from './constants';
import Auth from '../Utils';

// Token
const token = `bearer ${Auth.getToken()}`;
axios.defaults.headers.common.Authorization = token;

export const fetchItem = (itemId) => (dispatch) => {
  axios.get(`/public-api/item/${itemId}`)
    .then((response) => {
      if (response.data.confirmation === 'success') {
        dispatch({
          type: ITEM_RECEIVED_SUCCESS,
          itemData: response.data.result,
        });
      } else {
        dispatch({
          type: ITEM_RECEIVED_ERROR,
          errors: response.data.errors,
        });
      }
    });
};

export const updateItem = (item, itemId) => (dispatch) => {
  axios.put(`/api/item/update/${itemId}`, item)
    .then((response) => {
      if (response.data.confirmation === 'success') {
        const itemid = response.data.result.id;
        dispatch({
          type: ITEM_RECEIVED_SUCCESS,
          itemData: response.data.result,
        });
        browserHistory.push(`/dashboard/items-list/${itemid}`);
      } else {
      // Check if error is array or string.
        const newError = [];
        if (typeof response.data.errors === 'string') {
          newError.push(response.data.errors);
        } else if (typeof response.data.message === 'object') {
          newError.push(response.data.message.message);
        } else {
          console.log({response: response.data})
          // response.data.errors.map((error) => newError.push(error.msg));
          newError.push(response.data.errors);
        }

        dispatch({
          type: ITEM_RECEIVED_ERROR,
          errors: newError,
        });
      }
    });
};
