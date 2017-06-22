/*
 *
 * BannerDetail
 *
 */
 import axios from 'axios';
import { deleteApi, DEFAULT_ACTION } from "./constants";
 import Auth from "../Utils";

// Token
const token = `bearer ${Auth.getToken()}`;
axios.defaults.headers.common.Authorization = token;

 export const deleteBanner = (bannerId) => (dispatch) => {
  axios.delete(`${deleteApi}/${bannerId}`).then((response) => {
    if (response.data.confirmation === 'success') {
      window.location.href = "/dashboard/banner";
    } else {
      dispatch({
        type: "FLASH_MESSAGE_OPEN",
        errors: response.data.errors.message,
      })
    }
  })
 }
