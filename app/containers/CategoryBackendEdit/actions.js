/*
 *
 * CategoryBackendEdit actions
 *
 */

import {
  fetchAPI,
  updateAPI,
  CATEGORY_ITEM,
  DELETE_CATEGORY,
  deleteAPI
} from "./constants";
import axios from "axios";
import { browserHistory } from "react-router";

import Auth from "../Utils";

// Token
const token = `bearer ${Auth.getToken()}`;
axios.defaults.headers.common.Authorization = token;

export const updateCategory = (category, categoryId) => dispatch => {
  axios.put(`${updateAPI}/${categoryId}`, category).then(response => {
    if (response.data.confirmation === "success") {
      dispatch({
        type: CATEGORY_ITEM.SUCCESS,
        category: response.data.result
      });
    } else {
      dispatch({
        type: "FLASH_MESSAGE_OPEN",
        errors: response.data.errors.message
      });
    }
  });
};

export const fetchCategory = categoryId => dispatch => {
  axios.get(`${fetchAPI}/${categoryId}`).then(response => {
    if (response.data.confirmation === "success") {
      dispatch({
        type: CATEGORY_ITEM.SUCCESS,
        category: response.data.result
      });
    } else {
      dispatch({
        type: "FLASH_MESSAGE_OPEN",
        errors: response.data.errors.message
      });
    }
  });
};

export const deleteCategory = id => dispatch => {
  axios.delete(`${deleteAPI}/${id}`).then(response => {
    if (response.data.confirmation === "success") {
      // browserHistory.push('/dashboard/category');
      window.location.href = "/dashboard/category";
    } else {
      dispatch({
        type: "FLASH_MESSAGE_OPEN",
        errors: response.data.errors.message
      });
    }
  });
};
