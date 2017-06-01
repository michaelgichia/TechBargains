import { createSelector } from 'reselect';

/**
 * Direct selector to the MobileProductDetail state domain
 */
const selectMobileProductDetailDomain = () => (state) => state.MobileProductDetail;

/**
 * Other specific selectors
 */


/**
 * Default selector used by MobileProductDetail
 */

const makeSelectMobileProductDetail = () => createSelector(
  selectMobileProductDetailDomain(),
  (substate) => substate
);

export default makeSelectMobileProductDetail;
export {
  selectMobileProductDetailDomain,
};
