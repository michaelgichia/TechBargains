/*
 *
 * Test actions
 *
 */
import axios from "axios";
import { COUPON, fetchAPI } from "./constants";

export const fetchCoupon = () => dispatch => {
  axios.get(fetchAPI).then(response => {
    if (response.data.confirmation === "success") {
      dispatch({
        type: COUPON.SUCCESS,
        coupons: response.data.results
      });
    } else {
      dispatch({
        type: "FLASH_MESSAGE_OPEN",
        errors: response.data.errors.message
      });
    }
  });
};
