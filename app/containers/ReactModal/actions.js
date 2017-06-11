/*
 *
 * ReactModal actions
 *
 */

import {
  MODAL,
} from './constants';

export const handleOpenModal = (product) => ({
  type: MODAL.OPEN,
  product
});

export const handleCloseModal = () => ({
  type: MODAL.CLOSE,
});

