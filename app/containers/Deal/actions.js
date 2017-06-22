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
        type: 'FLASH_MESSAGE_OPEN',
        errors: response.data.errors.message,
      });
    }
  })
};
