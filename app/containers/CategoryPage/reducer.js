/*
 *
 * CategoryPages reducer
 *
 */

import { CATEGORY_PAGE_CREATE } from "./constants";


const initialState = {
  category: {},
};

function categoryPageReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_PAGE_CREATE.SUCCESS:
      return {
        ...state,
        category: action.category,
      };

    default:
      return state;
  }
}

export default categoryPageReducer;
