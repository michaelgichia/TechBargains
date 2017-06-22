import Auth from "../Utils";
import axios from "axios";
import { browserHistory } from "react-router";
import { MERCHANT_RECEIVED_ERROR } from "./constants";

// token
const token = `bearer ${Auth.getToken()}`;
axios.defaults.headers.common.Authorization = token;

export const doSaveMerchant = merchant => dispatch => {
  axios.post("/api/merchant/create", merchant).then(response => {
    if (response.data.confirmation === "success") {
      const merchantId = response.data.result.id;
      // browserHistory.push(`/dashboard/merchants/${merchantId}`);
      window.location.href = `/dashboard/merchants/${merchantId}`;
    } else {
      dispatch({
        type: "FLASH_MESSAGE_OPEN",
        errors: response.data.errors.message
      });
    }
  });
};
