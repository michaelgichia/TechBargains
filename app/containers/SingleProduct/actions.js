/*
 *
 * SingleProduct actions
 *
 */

import axios from 'axios';
import {
  productFetchAPI,
  SINGLE_PRODUCT,
} from './constants';

export const fetchProduct = productId => dispatch => {
  axios.get(`${productFetchAPI}/${productId}`).then((response) => {
    if (response.data.confirmation === 'success') {
      dispatch({
        type: SINGLE_PRODUCT.SUCCESS,
        product: response.data.result,
      });
    } else {
      console.log({response: response.data})
      dispatch({
        type: "FLASH_MESSAGE_OPEN",
        errors: response.data.errors.message
      });
    }
  })
}
