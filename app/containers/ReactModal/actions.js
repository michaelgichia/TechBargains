/*
 *
 * ReactModal actions
 *
 */

import {
  MODAL,
} from './constants';

// export const handleOpenModal = () => ({
//   type: MODAL.OPEN,
// })

export const handleCloseModal = () => ({
  type: MODAL.CLOSE,
})


export const handleOpenModal = (product) => {
  console.log({product})
  return ({type: MODAL.OPEN})
}
