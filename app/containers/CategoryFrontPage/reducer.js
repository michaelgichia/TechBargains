/*
 *
 * CategoryFrontPage reducer
 *
 */

import { CATEGORY_ITEMS, CATEGORY_COUPONS, CATEGORY_INFO, CATEGORY_FEATURED_STORES } from "./constants";

const initialState = {
  deals: [],
  coupons: [],
  featuredCategoryStores: [],
  info: {
    title: ""
  },
};



function categoryFrontPageReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_ITEMS.SUCCESS:
      return {
        ...state,
        deals: action.deals
      };

    case CATEGORY_COUPONS.SUCCESS:
      return {
        ...state,
        coupons: action.coupons
      };

    case CATEGORY_INFO.SUCCESS:
      return {
        ...state,
        info: action.info
      };

    case CATEGORY_FEATURED_STORES.SUCCESS:
      return {
        ...state,
        featuredCategoryStores: action.featuredCategoryStores
      };

    default:
      return state;
  }
}

export default categoryFrontPageReducer;
