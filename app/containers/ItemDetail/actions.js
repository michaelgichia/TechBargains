/*
 *
 * ItemDetail actions
 *
 */

import Auth from '../Utils';
import axios from 'axios';
import { browserHistory } from 'react-router';
import { itemDeleted, deleteError } from 'containers/ItemsList/actions';

// token
const token = `bearer ${Auth.getToken()}`;
axios.defaults.headers.common.Authorization = token;

export const deleteItem = (itemId) => (dispatch) => {
  axios.delete(`/api/item/${itemId}`)
  .then((response) => {
    if (response.data.confirmation === 'success') {
      dispatch(itemDeleted(response.data.message));
    } else {
      dispatch({
        type: 'FLASH_MESSAGE_OPEN',
        errors: response.data.errors.message,
      });    
    }
  });
  // browserHistory.push('/dashboard/items-list');
  window.location.href = '/dashboard/items-list';
};
