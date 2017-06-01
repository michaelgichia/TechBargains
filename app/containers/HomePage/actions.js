import {
  CLOSE_MODAL,
    OPEN_MODAL,
} from './constants';

export function handleOpen() {
  return {
    type: OPEN_MODAL,
  };
}

export function handleClose() {
  return {
    type: CLOSE_MODAL,
  };
}
