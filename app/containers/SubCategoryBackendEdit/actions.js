/*
 *
 * SubCategoryBackendEdit actions
 *
 */
import axios from "axios";
import { browserHistory } from "react-router";
import { handleOpenFlash } from "containers/FlashMessage/actions";
import {
  fetchSubCategoryAPI,
  editSubCategoryAPI,
  deleteSubCategoryAPI,
  categoryAPI,
  SUB_CATEGORY_ITEM,
  SUBCATEGORY_CATEGORY_ITEM,
  FLASH_MESSAGE
} from "./constants";
import Auth from "../Utils";

// Token
const token = `bearer ${Auth.getToken()}`;
axios.defaults.headers.common.Authorization = token;

export const updateSubCategory = (subCategory, subcategoryId) => dispatch => {
  axios
    .put(`${editSubCategoryAPI}/${subcategoryId}`, subCategory)
    .then(response => {
      if (response.data.confirmation === "success") {
        // browserHistory.push('/dashboard/sub-category');
        window.location.href = "/dashboard/sub-category";
      } else {
        dispatch({
          type: "FLASH_MESSAGE_OPEN",
          errors: response.data.errors.message
        });
      }
    });
};

export const fetchSubCategory = subCategoryId => dispatch => {
  axios
    .get(`${fetchSubCategoryAPI}/${subCategoryId}`)
    .then(response => {
      if (response.data.confirmation === "success") {
        dispatch({
          type: SUB_CATEGORY_ITEM.SUCCESS,
          subCategory: response.data.result
        });
      } else {
        dispatch({
          type: "FLASH_MESSAGE_OPEN",
          errors: response.data.errors.message
        });
      }
    })
    .catch(errors => {
      dispatch({
        type: SUB_CATEGORY_ITEM.ERROR,
        errors
      });
    });
};

export const deleteSubCategory = subCategoryId => dispatch => {
  axios.delete(`${deleteSubCategoryAPI}/${subCategoryId}`).then(response => {
    if (response.data.confirmation === "success") {
      // browserHistory.push('/dashboard/sub-category');
      window.location.href = "/dashboard/sub-category";
    } else {
      dispatch({
        type: "FLASH_MESSAGE_OPEN",
        errors: response.data.errors.message
      });
    }
  });
};

export const getCategories = () => dispatch => {
  axios.get(categoryAPI).then(response => {
    if (response.data.confirmation === "success") {
      dispatch({
        type: SUBCATEGORY_CATEGORY_ITEM.SUCCESS,
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
