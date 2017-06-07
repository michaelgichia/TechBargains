/*
 *
 * Test actions
 *
 */
import axios from 'axios';
import { COUPON, fetchAPI } from './constants';

export const fetchCoupon = () => (dispatch) => {
  axios.get(fetchAPI)
  .then((response) => {
    if (response.data.confirmation === 'success') {
      dispatch({
        type: COUPON.SUCCESS,
        coupons: response.data.results
      });
    } else {
      dispatch({
        type: COUPON.ERROR,
        errors: response.data.message
      })
    }
  })
  .catch((errors) => {
    dispatch({
      type: COUPON.ERROR,
      errors
    })
  })
}
