import {
  STORES_CATEGORIES
  } from './constants';

const initialState = {
  message: '',
  errors: [],
  categories: []
};

function storePageReducer(state = initialState, action) {
  switch (action.type) {

    case STORES_CATEGORIES.SUCCESS:
      return {
        ...state,
        categories: action.categories,
      };

    default:
      return state;
  }
}

export default storePageReducer;
