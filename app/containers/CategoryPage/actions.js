import axios from "axios";
import { createAPI, CATEGORY_PAGE_CREATE } from "./constants";
import Auth from "../Utils";

// token
const token = `bearer ${Auth.getToken()}`;
axios.defaults.headers.common.Authorization = token;

export const createCategory = data => dispatch => {
  axios.post(createAPI, data).then(response => {
    if (response.data.confirmation === "success") {
      dispatch({
        type: CATEGORY_PAGE_CREATE.SUCCESS,
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
