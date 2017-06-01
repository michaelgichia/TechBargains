import { createSelector } from 'reselect';

/**
 * Direct selector to the navBar state domain
 */
const selectNavBarDomain = () => (state) => state.navBar;

/**
 * Other specific selectors
 */


/**
 * Default selector used by NavBar
 */

const makeSelectNavBar = () => createSelector(
  selectNavBarDomain(),
  (substate) => substate
);

export default makeSelectNavBar;
export {
  selectNavBarDomain,
};
