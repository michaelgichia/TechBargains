/*
 *
 * CategoryFrontPage actions
 *
 */

import {
  dealsBaseAPI,
  couponsBaseAPI,
  infoBaseAPI,
  fetchFeaturedStoresAPI,
  CATEGORY_INFO,
  CATEGORY_ITEMS,
  CATEGORY_FEATURED_STORES,
  CATEGORY_COUPONS
} from "./constants";
import axios from "axios";

export const fetchFeaturedCategoryStores = categoryId => dispatch => {
  console.log({categoryId, fetchFeaturedStoresAPI})
  axios.get(`${fetchFeaturedStoresAPI}/${categoryId}`).then(response => {
    console.log({response: response.data})
    if (response.data.confirmation === "success") {
      dispatch({
        type: CATEGORY_FEATURED_STORES.SUCCESS,
        featuredCategoryStores: response.data.results
      });
    } else {
      dispatch({
        type: "FLASH_MESSAGE_OPEN",
        errors: response.data.errors.message
      });
    }
  });
};

export const fetchCategoryDeals = categoryId => dispatch => {
  axios.get(`${dealsBaseAPI}/${categoryId}`).then(response => {
    if (response.data.confirmation === "success") {
      dispatch({
        type: CATEGORY_ITEMS.SUCCESS,
        deals: response.data.results
      });
    } else {
      dispatch({
        type: "FLASH_MESSAGE_OPEN",
        errors: response.data.errors.message
      });
    }
  });
};

export const fetchCategoryCoupons = couponsId => dispatch => {
  axios.get(`${couponsBaseAPI}/${couponsId}`).then(response => {
    if (response.data.confirmation === "success") {
      dispatch({
        type: CATEGORY_COUPONS.SUCCESS,
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

export const fetchCategoryInfo = categoryId => dispatch => {
  axios.get(`${infoBaseAPI}/${categoryId}`).then(response => {
    if (response.data.confirmation === "success") {
      dispatch({
        type: CATEGORY_INFO.SUCCESS,
        info: response.data.result
      });
    } else {
      dispatch({
        type: "FLASH_MESSAGE_OPEN",
        errors: response.data.errors.message
      });
    }
  });
};
