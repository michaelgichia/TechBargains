/*
 *
 * Test actions
 *
 */
import axios from "axios";
import Auth from "../Utils";
import { browserHistory } from "react-router";
import { ITEMS_RECEIVED_ERROR } from "./constants";

// Token
const token = `bearer ${Auth.getToken()}`;
axios.defaults.headers.common.Authorization = token;

export const postDeal = item => dispatch => {
  axios.post("/api/item/create", item).then(response => {
    if (response.data.confirmation === "success") {
      const itemId = response.data.result.id;
      // browserHistory.push(`/dashboard/items-list/${itemId}`);
      window.location.href = `/dashboard/items-list/${itemId}`;
    } else {
      dispatch({
        type: "FLASH_MESSAGE_OPEN",
        errors: response.data.errors.message
      });
    }
  });
};
