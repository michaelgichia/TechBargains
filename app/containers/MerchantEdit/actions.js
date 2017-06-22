/*
 *
 * MerchantEdit actions
 *
 */

import axios from 'axios';
import {
  fetchAPI,
  createAPI,
  MerchantEdit,
} from './constants';

export const postMerchant = (merchantId, merchant) => (dispatch) => {
  axios.put(`${createAPI}/${merchantId}`, merchant).then(response => {
    if (response.data.confirmation === "success") {
      window.location.href = `/dashboard/merchants/${merchantId}`;
    } else {
      dispatch({
        type: "FLASH_MESSAGE_OPEN",
        errors: response.data.errors.message
      });
    }
  });
}

export const fetchMerchant = (merchantId) => (dispatch) => {
  axios.get(`${fetchAPI}/${merchantId}`).then(response => {
    if (response.data.confirmation === "success") {
      dispatch({
        type: MerchantEdit.SUCCESS,
        merchant: response.data.result
      });
    } else {
      dispatch({
        type: "FLASH_MESSAGE_OPEN",
        errors: response.data.errors.message
      });
    }
  });
}
