/*
 *
 * NavBar actions
 *
 */
import axios from 'axios';
import {
  navItemsBaseAPI,
  NAVITEMS,
} from './constants';

export const fetchNavItems = () => (dispatch) => {
  axios.get(navItemsBaseAPI)
  .then((response) => {
    if (response.data.confirmation === 'success') {
      dispatch({
        type: NAVITEMS.SUCCESS,
        navItems: response.data.results,
      });
    } else {
      dispatch({
        type: NAVITEMS.ERROR,
        errors: response.data.message,
      });
    }
  })
  .catch((errors) => {
    dispatch({
      type: NAVITEMS.ERROR,
      errors,
    });
  });
};