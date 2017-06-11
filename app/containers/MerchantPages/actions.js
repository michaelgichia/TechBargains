/*
 *
 * MerchantPages actions
 *
 */

import axios from 'axios';
import { SINGLE_STORE, baseAPI } from './constants';


export const fetchMerchandize = (storeId) => (dispatch) => {
  axios.get(`${baseAPI}/${storeId}`)
  .then((response) => {
    if (response.data.confirmation === 'success') {
      dispatch({
        type: SINGLE_STORE.SUCCESS,
        merchandize: response.data.results,
      });
    } else {
      dispatch({
        type: SINGLE_STORE.ERROR,
        errors: response.data.message,
      });
    }
  })
  .catch((errors) => {
    dispatch({
      type: SINGLE_STORE.ERROR,
      errors,
    });
  });
};