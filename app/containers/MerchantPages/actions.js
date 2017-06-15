/*
 *
 * MerchantPages actions
 *
 */

import axios from 'axios';
import { 
  SINGLE_STORE_DEALS,
  SINGLE_STORE_COUPONS,
  SINGLE_STORE_INFO,
  dealsBaseAPI, 
  couponBaseAPI,
  infoBaseAPI,
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
        errors: response.data.errors,
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
      dispatch({
        type: SINGLE_STORE_COUPONS.SUCCESS,
        coupons: response.data.results,
      });
    } else {
      dispatch({
        type: SINGLE_STORE_COUPONS.ERROR,
        errors: response.data.errors,
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

export const fetchStoreInfo = (merchantId) => (dispatch) => {
  axios.get(`${infoBaseAPI}/${merchantId}`)
  .then((response) => {
    if (response.data.confirmation === 'success') {
      dispatch({
        type: SINGLE_STORE_INFO.SUCCESS,
        info: response.data.result,
      });
    } else {
      dispatch({
        type: SINGLE_STORE_INFO.ERROR,
        errors: response.data.errors,
      });
    }
  })
  .catch((errors) => {
    dispatch({
      type: SINGLE_STORE_INFO.ERROR,
      errors,
    });
  });
};
