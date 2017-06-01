import {
  CATEGORIES_RECEIVED_SUCCESS,
  SUBCATEGORIES_RECEIVED_SUCCESS,
  MERCHANTS_RECEIVED_SUCCESS,
   } from './constants';

const initialState = {
  categories: [],
  subcategories: [],
  merchants: [],
};

function dashboardReducer(state = initialState, action) {
  const updated = { ...state };

  switch (action.type) {
    case CATEGORIES_RECEIVED_SUCCESS:
      updated.categories = action.categories;
      return updated;

    case SUBCATEGORIES_RECEIVED_SUCCESS:
      updated.subcategories = action.subcategories;
      return updated;

    case MERCHANTS_RECEIVED_SUCCESS:
      updated.merchants = action.merchants;
      return updated;

    default:
      return state;
  }
}

export default dashboardReducer;
