/*
 *
 * Dashboard actions
 *
 */
import axios from 'axios';
import {
  CATEGORIES_RECEIVED_SUCCESS,
  CATEGORIES_RECEIVED_ERROR,
  SUBCATEGORIES_RECEIVED_SUCCESS,
  SUBCATEGORIES_RECEIVED_ERROR,
  MERCHANTS_RECEIVED_SUCCESS,
  MERCHANTS_RECEIVED_ERROR } from './constants';

export const getCategories = () => (dispatch) => {
  axios.get('/public-api/category')
  .then((response) => {
    if (response.data.confirmation === 'success') {
      dispatch({
        type: CATEGORIES_RECEIVED_SUCCESS,
        categories: response.data.results,
      });
    } else {
      dispatch({
        type: CATEGORIES_RECEIVED_ERROR,
        error: response.data.error,
      });
    }
  });
};

export const getSubCategories = () => (dispatch) => {
  axios.get('/public-api/subcategory')
  .then((response) => {
    if (response.data.confirmation === 'success') {
      dispatch({
        type: SUBCATEGORIES_RECEIVED_SUCCESS,
        subcategories: response.data.results,
      });
    } else {
      dispatch({
        type: SUBCATEGORIES_RECEIVED_ERROR,
        error: response.data.errors,
      });
    }
  });
};

export const getMerchants = () => (dispatch) => {
  axios.get('/public-api/merchant')
  .then((response) => {
    if (response.data.confirmation === 'success') {
      dispatch({
        type: MERCHANTS_RECEIVED_SUCCESS,
        merchants: response.data.results,
      });
    } else {
      dispatch({
        type: MERCHANTS_RECEIVED_ERROR,
        error: response.data.errors,
      });
    }
  });
};
