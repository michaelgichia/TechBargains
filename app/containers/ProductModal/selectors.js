import { createSelector } from 'reselect';

/**
 * Direct selector to the productModal state domain
 */
const selectProductModalDomain = () => (state) => state.productModal;

/**
 * Other specific selectors
 */


/**
 * Default selector used by ProductModal
 */

const makeSelectProductModal = () => createSelector(
  selectProductModalDomain(),
  (substate) => substate
);

export default makeSelectProductModal;
export {
  selectProductModalDomain,
};
