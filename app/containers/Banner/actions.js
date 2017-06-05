import axios from 'axios';
import { DELETE_BANNER, deleteAPI, fetchAPI } from './constants';
import Auth from '../Utils';

// token
const token = `bearer ${Auth.getToken()}`;
axios.defaults.headers.common.Authorization = token;

const fetchCategories = () => axios.get(fetchAPI);

const deleteId = (id) => axios.delete(`${deleteAPI}/${id}`);

export const deleteBanner = (id) => (dispatch) => {
  Promise.all([deleteId(id), fetchCategories()])
  .then(([deleteId, categoriesData]) => {
    if (deleteId.data.confirmation === 'success' &&
              categoriesData.data.confirmation === 'success') {
      dispatch({
        type: DELETE_BANNER.SUCCESS,
        categories: categoriesData.data.results,
      });
    } else {
      dispatch({
        type: DELETE_BANNER.ERROR,
        errors: deleteId.data.message,
        categories: categoriesData.data.results,
      });
    }
  });
};
