/*
 *
 * SubCategoryBackendEdit actions
 *
 */
import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  fetchSubCategoryAPI,
  editSubCategoryAPI,
  deleteSubCategoryAPI,
  SUB_CATEGORY_ITEM,
} from './constants';
import Auth from '../Utils';

// Token
const token = `bearer ${Auth.getToken()}`;
axios.defaults.headers.common.Authorization = token;


export const updateSubCategory = (subCategory, subCategoryId) => (dispatch) => {
  axios
  .put(`${editSubCategoryAPI}/${subCategoryId}`, subCategory)
  .then((response) => {
    if (response.data.confirmation === 'success') {
      browserHistory.push('/dashboard/sub-category');
    } else {
      dispatch({
        type: SUB_CATEGORY_ITEM.ERROR,
        errors: response.data.errors,
      });
    }
  })
  .catch((errors) => {
    dispatch({
      type: SUB_CATEGORY_ITEM.ERROR,
      errors,
    });
  });
};

export const fetchSubCategory = (subCategoryId) => (dispatch) => {
  axios
  .get(`${fetchSubCategoryAPI}/${subCategoryId}`)
  .then((response) => {
    if (response.data.confirmation === 'success') {
      dispatch({
        type: SUB_CATEGORY_ITEM.SUCCESS,
        subCategory: response.data.result,
      });
    } else {
      dispatch({
        type: SUB_CATEGORY_ITEM.ERROR,
        errors: response.data.errors,
      });
    }
  })
  .catch((errors) => {
    dispatch({
      type: SUB_CATEGORY_ITEM.ERROR,
      errors,
    });
  });
};

export const deleteSubCategory = (subCategoryId) => (dispatch) => {
  axios
  .delete(`${deleteSubCategoryAPI}/${subCategoryId}`)
  .then((response) => {
    if (response.data.confirmation === 'success') {
      browserHistory.push('/dashboard/sub-category');
    } else {
      dispatch({
        type: SUB_CATEGORY_ITEM.ERROR,
        errors: response.data.errors,
      });
    }
  })
}
