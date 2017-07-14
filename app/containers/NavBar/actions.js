/*
 *
 * NavBar actions
 *
 */
import axios from "axios";
import {
  navItemsBaseAPI,
  NAVITEMS,
  fetchStoresAPI,
  STORE_ITEMS
} from "./constants";

export const fetchNavItems = () => dispatch => {
  axios.get(navItemsBaseAPI).then(response => {
    if (response.data.confirmation === "success") {
      dispatch({
        type: NAVITEMS.SUCCESS,
        navbar: response.data.results
      });
    } else {
      dispatch({
        type: "FLASH_MESSAGE_OPEN",
        errors: response.data.errors.message
      });
    }
  });
};

export const fetchStoreItems = () => dispatch => {
  axios.get(fetchStoresAPI).then(response => {
    if (response.data.confirmation === "success") {
      dispatch({
        type: STORE_ITEMS.SUCCESS,
        stores: response.data.results
      });
    } else {
      dispatch({
        type: "FLASH_MESSAGE_OPEN",
        errors: response.data.errors.message
      });
    }
  });
};
