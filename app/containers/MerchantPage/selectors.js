import { createSelector } from 'reselect';

/**
 * Direct selector to the merchantPage state domain
 */
const selectMerchantPageDomain = () => (state) => state.merchantPage;

/**
 * Other specific selectors
 */


/**
 * Default selector used by MerchantPage
 */

const makeSelectMerchantPage = () => createSelector(
  selectMerchantPageDomain(),
  (substate) => substate
);

export default makeSelectMerchantPage;
export {
  selectMerchantPageDomain,
};
