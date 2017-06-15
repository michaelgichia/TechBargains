import axios from 'axios';
import {
  SUBCATEGORY,
  SUBCATEGORY_SUBCATEGORY_ITEM,
  SUBCATEGORY_CATEGORY_ITEMS,
  categoryAPI,
  createCategoryAPI,
  subCategoryAPI,
} from './constants';

export const postSubCategory = (subCategory) => (dispatch) => {
  axios
  .post(createCategoryAPI, subCategory)
  .then((response) => {
    if (response.data.confirmation === 'success') {
      dispatch({
        type: SUBCATEGORY.SUCCESS,
        message: 'Subcategory is successfully saved.',
        subCategory: response.data.result
      });
    } else {
      dispatch({
        type: SUBCATEGORY.ERROR,
        errors: response.data.errors,
      });
    }
  });
};

export const getCategories = () => (dispatch) => {
  axios
  .get(categoryAPI)
  .then((response) => {
    if (response.data.confirmation === 'success') {
      dispatch({
        type: SUBCATEGORY_SUBCATEGORY_ITEM.SUCCESS,
        categories: response.data.results,
      });
    } else {
      dispatch({
        type: SUBCATEGORY_SUBCATEGORY_ITEM.ERROR,
        errors: response.data.errors,
      });
    }
  });
};

export const getSubCategories = () => (dispatch) => {
  axios
  .get(subCategoryAPI)
  .then((response) => {
    if (response.data.confirmation === 'success') {
      dispatch({
        type: SUBCATEGORY_CATEGORY_ITEMS.SUCCESS,
        subCategories: response.data.results,
      });
    } else {
      dispatch({
        type: SUBCATEGORY_CATEGORY_ITEMS.ERROR,
        errors: response.data.errors,
      });
    }
  });
};