/*
 *
 * CategoryFrontPage reducer
 *
 */

import { CATEGORY_ITEMS, CATEGORY_COUPONS, CATEGORY_INFO } from "./constants";

const initialState = {
  deals: [],
  coupons: [],
  info: {
    title: ""
  },
  errors: ""
};

function categoryFrontPageReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_ITEMS.SUCCESS:
      return {
        ...state,
        deals: action.deals
      };

    case CATEGORY_ITEMS.ERROR:
      return {
        ...state,
        errors: action.errors
      };

    case CATEGORY_COUPONS.SUCCESS:
      return {
        ...state,
        coupons: action.coupons
      };

    case CATEGORY_COUPONS.ERROR:
      return {
        ...state,
        errors: action.errors
      };

    case CATEGORY_INFO.SUCCESS:
      return {
        ...state,
        info: action.info
      };

    case CATEGORY_INFO.ERROR:
      return {
        ...state,
        errors: action.errors
      };

    default:
      return state;
  }
}

export default categoryFrontPageReducer;
