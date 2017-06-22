/*
 *
 * EditItem actions
 *
 */

import axios from "axios";
import { browserHistory } from "react-router";

import { ITEM_RECEIVED_SUCCESS, ITEM_RECEIVED_ERROR } from "./constants";
import Auth from "../Utils";

// Token
const token = `bearer ${Auth.getToken()}`;
axios.defaults.headers.common.Authorization = token;

export const fetchItem = itemId => dispatch => {
  axios.get(`/public-api/item/${itemId}`).then(response => {
    if (response.data.confirmation === "success") {
      dispatch({
        type: ITEM_RECEIVED_SUCCESS,
        itemData: response.data.result
      });
    } else {
      dispatch({
        type: "FLASH_MESSAGE_OPEN",
        errors: response.data.errors.message
      });
    }
  });
};

export const updateItem = (item, itemId) => dispatch => {
  axios.put(`/api/item/update/${itemId}`, item).then(response => {
    if (response.data.confirmation === "success") {
      const itemid = response.data.result.id;
      dispatch({
        type: ITEM_RECEIVED_SUCCESS,
        itemData: response.data.result
      });
      // browserHistory.push(`/dashboard/items-list/${itemid}`);
      window.location.href = `/dashboard/items-list/${itemid}`;
    } else {
      dispatch({
        type: "FLASH_MESSAGE_OPEN",
        errors: response.data.errors.message
      });
    }
  });
};
