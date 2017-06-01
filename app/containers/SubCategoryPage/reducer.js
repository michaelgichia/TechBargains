import {
    SUBCATEGORY_SUCCESS,
    SUBCATEGORY_ERROR,
} from './constants';

const initialState = {
  message: '',
  errors: [],
};

function subCategoryPageReducer(state = initialState, action) {
  switch (action.type) {

    case SUBCATEGORY_SUCCESS:
      return {
        ...state,
        message: action.message,
      };

    case SUBCATEGORY_ERROR:
      return {
        ...state,
        errors: action.errors,
      };

    default:
      return state;
  }
}

export default subCategoryPageReducer;
