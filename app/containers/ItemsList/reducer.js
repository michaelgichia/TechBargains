/*
 *
 * ItemsList reducer
 *
 */
import {
  ITEMS_RECEIVED_ERROR,
  ITEMS_RECEIVED_SUCCESS,
  ITEM_DELETED_SUCCESS,
  ITEM_DELETED_ERROR,
} from './constants';

const initialState = {
  items: [],
  errors: '',
  message: '',
};

function itemsListReducer(state = initialState, action) {
  switch (action.type) {

    case ITEMS_RECEIVED_SUCCESS:
      return {
        ...state,
        items: action.items,
      };

    case ITEMS_RECEIVED_ERROR:
      return {
        ...state,
        errors: action.errors,
      };

    case ITEM_DELETED_SUCCESS:
      return {
        ...state,
        message: action.message,
      };

    case ITEM_DELETED_ERROR:
      return {
        ...state,
        errors: action.errors,
      };

    default:
      return state;
  }
}

export default itemsListReducer;
