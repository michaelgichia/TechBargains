import {
  SUBCATEGORY,
  SUBCATEGORY_SUBCATEGORY_ITEM,
  SUBCATEGORY_CATEGORY_ITEMS,
} from './constants';
const initialState = {
  message: '',
  errors: '',
  categories: [],
  subCategories: [],
};

function subCategoryPageReducer(state = initialState, action) {
  switch (action.type) {

    case  SUBCATEGORY.SUCCESS:
      const updateState = [...state.subCategories];
      updateState.push(action.subCategory)
      return {
        ...state,
        subCategories: updateState,
        message: action.message,
      };

    case SUBCATEGORY.ERROR:
      return {
        ...state,
        errors: action.errors,
      };

    case SUBCATEGORY_SUBCATEGORY_ITEM.SUCCESS:
      return {
        ...state,
        categories: action.categories,
      };

    case SUBCATEGORY_SUBCATEGORY_ITEM.ERROR:
      return {
        ...state,
        errors: action.errors,
      };

    case SUBCATEGORY_CATEGORY_ITEMS.SUCCESS:
      return {
        ...state,
        subCategories: action.subCategories,
      };

    case SUBCATEGORY_CATEGORY_ITEMS.ERROR:
      return {
        ...state,
        errors: action.errors,
      };

    default:
      return state;
  }
}

export default subCategoryPageReducer;
