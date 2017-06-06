/*
 *
 * ItemsList actions
 *
 */

import axios from 'axios';

import {
    ITEMS_RECEIVED_ERROR,
    ITEMS_RECEIVED_SUCCESS,
    ITEM_DELETED_SUCCESS,
    ITEM_DELETED_ERROR,
} from './constants';

export const getItems = () => (dispatch) => {
  dispatch(showLoading());
  axios.get('/public-api/item')
    .then((response) => {
      if (response.data.confirmation === 'success') {
        dispatch({
          type: ITEMS_RECEIVED_SUCCESS,
          items: response.data.results,
        });
      } else {
        dispatch({
          type: ITEMS_RECEIVED_ERROR,
          errors: response.data.message,
        });
      }
    });
};

export const itemDeleted = (message) => ({
  type: ITEM_DELETED_SUCCESS,
  message,
});

export const deleteError = (errors) => ({
  type: ITEM_DELETED_ERROR,
  errors,
});
