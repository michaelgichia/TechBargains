/*
 *
 * SingleProduct actions
 *
 */

import axios from "axios";
import {
  treandingDealsAPI,
  RELATED_PRODUCT
} from "./constants";

export const fetchRelatedProduct = subCategoryId => dispatch => {
  axios.get(`${treandingDealsAPI}/${subCategoryId}`).then(response => {
    if (response.data.confirmation === "success") {
      dispatch({
        type: RELATED_PRODUCT.SUCCESS,
        payload: response.data.results
      });
    } else {
      dispatch({
        type: "FLASH_MESSAGE_OPEN",
        errors: response.data.errors.message
      });
    }
  });
};
