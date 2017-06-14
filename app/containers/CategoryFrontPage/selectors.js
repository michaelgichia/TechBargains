import { createSelector } from 'reselect';

/**
 * Direct selector to the categoryFrontPage state domain
 */
const selectCategoryFrontPageDomain = () => (state) => state.categoryFrontPage;

/**
 * Other specific selectors
 */


/**
 * Default selector used by CategoryFrontPage
 */

const makeSelectCategoryFrontPage = () => createSelector(
  selectCategoryFrontPageDomain(),
  (substate) => substate
);

export default makeSelectCategoryFrontPage;
export {
  selectCategoryFrontPageDomain,
};
