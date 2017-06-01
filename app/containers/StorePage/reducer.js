import {
  MERCHANT_RECEIVED_ERROR } from './constants';

const initialState = {
  message: '',
  errors: [],
};

function storePageReducer(state = initialState, action) {
  switch (action.type) {

    case MERCHANT_RECEIVED_ERROR:
      return {
        ...state,
        errors: action.errors,
      };

    default:
      return state;
  }
}

export default storePageReducer;
