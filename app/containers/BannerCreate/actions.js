import axios from 'axios';
import {
  createApi,
  BANNER_CREATE,
} from './constants';
import Auth from "../Utils";

// token
const token = `bearer ${Auth.getToken()}`;
axios.defaults.headers.common.Authorization = token;


export const postBanner = (banner) => (dispatch) => {
  axios.post(createApi, banner).then((response) => {
    if (response.data.confirmation === 'success') {
      window.location.href = `/dashboard/banner/${response.data.result.id}`;
    } else {
      dispatch({
        type: 'FLASH_MESSAGE_OPEN',
        errors: response.data.errors.message,
      });
    }
  })
}