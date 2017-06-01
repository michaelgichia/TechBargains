import {
  CLOSE_MODAL,
    OPEN_MODAL,
} from './constants';

const initialState = {
  open: false,
};

function homepageReducer(state = initialState, action) {
  switch (action.type) {

    case OPEN_MODAL:
      return {
        ...state,
        open: true,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        open: false,
      };

    default:
      return state;
  }
}

export default homepageReducer;
