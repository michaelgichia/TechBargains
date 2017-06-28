import Auth from "../Utils";
import axios from "axios";
import { browserHistory } from "react-router";
import {
  fetctCategoriesAPI,
  postMerchantAPI,
  STORES_CATEGORIES
} from "./constants";

// token
const token = `bearer ${Auth.getToken()}`;
axios.defaults.headers.common.Authorization = token;

export const doSaveMerchant = merchant => dispatch => {
  axios.post(postMerchantAPI, merchant).then(response => {
    if (response.data.confirmation === "success") {
      const merchantId = response.data.result.id;
      window.location.href = `/dashboard/merchants/${merchantId}`;
    } else {
      dispatch({
        type: "FLASH_MESSAGE_OPEN",
        errors: response.data.errors.message
      });
    }
  });
};

export const fetchCategories = () => dispatch => {
  axios.get(fetctCategoriesAPI).then(response => {
    if (response.data.confirmation === "success") {
      dispatch({
        type: STORES_CATEGORIES.SUCCESS,
        categories: response.data.results
      });
    } else {
      dispatch({
        type: "FLASH_MESSAGE_OPEN",
        errors: response.data.errors.message
      });
    }
  });
};
