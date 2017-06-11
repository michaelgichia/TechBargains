import { createSelector } from 'reselect';

/**
 * Direct selector to the merchantPages state domain
 */
const selectMerchantPagesDomain = () => (state) => state.merchantPages;

/**
 * Other specific selectors
 */


/**
 * Default selector used by MerchantPages
 */

const makeSelectMerchantPages = () => createSelector(
  selectMerchantPagesDomain(),
  (substate) => substate
);

export default makeSelectMerchantPages;
export {
  selectMerchantPagesDomain,
};
