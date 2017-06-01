import axios from 'axios';
import Auth from '../Utils';
import {
    SUBCATEGORY_SUCCESS,
    SUBCATEGORY_ERROR } from './constants';

// token
const token = `bearer ${Auth.getToken()}`;
axios.defaults.headers.common.Authorization = token;

export const postSubCategory = (name) => (dispatch) => {
  axios.post('/api/subcategory/create', name)
    .then((response) => {
      if (response.data.confirmation === 'success') {
        dispatch({
          type: SUBCATEGORY_SUCCESS,
          message: 'Subcategory is successfully saved.',
        });
      } else {
      // Check if error is array or string.
        const newError = [];
        if (typeof response.data.message === 'string') {
          newError.push(response.data.message);
        } else {
          response.data.message.map((error, i) => newError.push(error.msg));
        }
        dispatch({
          type: SUBCATEGORY_ERROR,
          errors: newError,
        });
      }
    });
};
