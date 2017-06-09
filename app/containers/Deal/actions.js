/*
 *
 * Test actions
 *
 */
import axios from 'axios';
import { DEALS, fetchAPI } from './constants';

export const fetchDeals = () => (dispatch) => {
  axios.get(fetchAPI)
  .then((response) => {
    if (response.data.confirmation === 'success') {
      dispatch({
        type: DEALS.SUCCESS,
        deals: response.data.results,
      });
    } else {
      dispatch({
        type: DEALS.ERROR,
        errors: response.data.message,
      });
    }
  })
  .catch((errors) => {
    dispatch({
      type: DEALS.ERROR,
      errors,
    });
  });
};
