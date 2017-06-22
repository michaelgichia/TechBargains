/*
 *
 * Stores actions
 *
 */

import axios from 'axios';
import { STORES, fetchAPI } from './constants';

export const fetchStores = () => (dispatch) => {
  axios.get(fetchAPI)
  .then((response) => {
    if (response.data.confirmation === 'success') {
      dispatch({
        type: STORES.SUCCESS,
        stores: response.data.results,
      });
    } else {
      dispatch({
        type: 'FLASH_MESSAGE_OPEN',
        errors: response.data.errors.message,
      });
    }
  })
};
