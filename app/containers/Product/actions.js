/*
 *
 * Products actions
 *
 */

import axios from 'axios';
import { 
  TRENDING_DEALS,
  dealsBaseAPI, 
  } from './constants';

export const fetchTrendingDeals = () => (dispatch) => {
  axios.get(dealsBaseAPI)
  .then((response) => {
    if (response.data.confirmation === 'success') {
      dispatch({
        type: TRENDING_DEALS.SUCCESS,
        products: response.data.results,
      });
    } else {
      dispatch({
        type: TRENDING_DEALS.ERROR,
        errors: response.data.errors,
      });
    }
  })
  .catch((errors) => {
    dispatch({
      type: TRENDING_DEALS.ERROR,
      errors,
    });
  });
};