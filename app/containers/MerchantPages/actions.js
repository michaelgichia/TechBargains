/*
 *
 * MerchantPages actions
 *
 */

import axios from 'axios';
import { 
  SINGLE_STORE_DEALS,
  dealsBaseAPI, 
  couponBaseAPI,
  SINGLE_STORE_COUPONS,
  } from './constants';


export const fetchMerchandize = (storeId) => (dispatch) => {
  axios.get(`${dealsBaseAPI}/${storeId}`)
  .then((response) => {
    if (response.data.confirmation === 'success') {
      dispatch({
        type: SINGLE_STORE_DEALS.SUCCESS,
        merchandize: response.data.results,
      });
    } else {
      dispatch({
        type: SINGLE_STORE_DEALS.ERROR,
        errors: response.data.message,
      });
    }
  })
  .catch((errors) => {
    dispatch({
      type: SINGLE_STORE_DEALS.ERROR,
      errors,
    });
  });
};

export const fetchSpecificCoupons = (couponsId) => (dispatch) => {
  axios.get(`${couponBaseAPI}/${couponsId}`)
  .then((response) => {
    if (response.data.confirmation === 'success') {
      console.log({coupons: response.data.results})
      dispatch({
        type: SINGLE_STORE_COUPONS.SUCCESS,
        coupons: response.data.results,
      });
    } else {
      dispatch({
        type: SINGLE_STORE_COUPONS.ERROR,
        errors: response.data.message,
      });
    }
  })
  .catch((errors) => {
    dispatch({
      type: SINGLE_STORE_COUPONS.ERROR,
      errors,
    });
  });
};