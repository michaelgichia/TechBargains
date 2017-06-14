/*
 *
 * CategoryBackendEdit actions
 *
 */
updateAPI
fetchAPI
import {
  fetchAPI,
  updateAPI,
  CATEGORY_ITEM,
} from './constants';
import axios from 'axios';
import Auth from '../Utils';

// Token
const token = `bearer ${Auth.getToken()}`;
axios.defaults.headers.common.Authorization = token;


export const updateCategory = (category, categoryId) => (dispatch) => {
  axios
  .put(`${updateAPI}/${categoryId}`, category)
  .then((response) => {
    if (response.data.confirmation === 'success') {
      dispatch({
        type: CATEGORY_ITEM.SUCCESS,
        category: response.data.result,
      });
    } else {
      dispatch({
        type: CATEGORY_ITEM.ERROR,
        errors: response.data.errors,
      });
    }
  })
  .catch((errors) => {
    dispatch({
      type: CATEGORY_ITEM.ERROR,
      errors,
    });
  });
};

export const fetchCategory = (categoryId) => (dispatch) => {
  axios
  .get(`${fetchAPI}/${categoryId}`)
  .then((response) => {
    if (response.data.confirmation === 'success') {
      dispatch({
        type: CATEGORY_ITEM.SUCCESS,
        category: response.data.result,
      });
    } else {
      dispatch({
        type: CATEGORY_ITEM.ERROR,
        errors: response.data.errors,
      });
    }
  })
  .catch((errors) => {
    dispatch({
      type: CATEGORY_ITEM.ERROR,
      errors,
    });
  });
};
