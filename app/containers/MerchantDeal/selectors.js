import { createSelector } from 'reselect';

/**
 * Direct selector to the merchantDeal state domain
 */
const selectMerchantDealDomain = () => (state) => state.merchantDeal;

/**
 * Other specific selectors
 */


/**
 * Default selector used by MerchantDeal
 */

const makeSelectMerchantDeal = () => createSelector(
  selectMerchantDealDomain(),
  (substate) => substate
);

export default makeSelectMerchantDeal;
export {
  selectMerchantDealDomain,
};
