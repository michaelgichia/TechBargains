/*
 *
 * CategoryFrontPage actions
 *
 */

import {
  dealsBaseAPI,
  couponsBaseAPI,
  CATEGORY_ITEMS,
  CATEGORY_COUPONS,
} from './constants';
import axios from 'axios';

export const fetchCategoryDeals = (categoryId) => (dispatch) => {
  axios.get(`${dealsBaseAPI}/${categoryId}`)
  .then((response) => {
    if (response.data.confirmation === 'success') {
      dispatch({
        type: CATEGORY_ITEMS.SUCCESS,
        deals: response.data.results,
      });
    } else {
      dispatch({
        type: CATEGORY_ITEMS.ERROR,
        errors: response.data.errors,
      });
    }
  })
  .catch((errors) => {
    dispatch({
      type: CATEGORY_ITEMS.ERROR,
      errors,
    });
  });
};

export const fetchCategoryCoupons = (couponsId) => (dispatch) => {
  axios.get(`${couponsBaseAPI}/${couponsId}`)
  .then((response) => {
    console.log({response: response.data})
    if (response.data.confirmation === 'success') {
      dispatch({
        type: CATEGORY_COUPONS.SUCCESS,
        coupons: response.data.results,
      });
    } else {
      dispatch({
        type: CATEGORY_COUPONS.ERROR,
        errors: response.data.errors,
      });
    }
  })
  .catch((errors) => {
    dispatch({
      type: CATEGORY_COUPONS.ERROR,
      errors,
    });
  });
};