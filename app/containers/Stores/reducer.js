/*
 *
 * Stores reducer
 *
 */

import { STORES } from './constants';

const initialState = {
	stores: [],
  errors: '',
};

function storesReducer(state = initialState, action) {
  switch (action.type) {
    case STORES.SUCCESS:
      return {
        ...state,
        stores: action.stores
      };

    case STORES.ERROR:
      return {
        ...state,
        errors: action.errors
      };

    default:
      return state;
  }
}

export default storesReducer;
