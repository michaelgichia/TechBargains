import { createSelector } from 'reselect';

/**
 * Direct selector to the editItem state domain
 */
const selectEditItemDomain = () => (state) => state.editItem;

/**
 * Other specific selectors
 */


/**
 * Default selector used by EditItem
 */

const makeSelectEditItem = () => createSelector(
  selectEditItemDomain(),
  (substate) => substate
);

export default makeSelectEditItem;
export {
  selectEditItemDomain,
};
