/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import languageProviderReducer from 'containers/LanguageProvider/reducer';
import registerPageReducer from 'containers/RegisterPage/reducer';
import loginPageReducer from 'containers/LoginPage/reducer';
import categoryPageReducer from 'containers/CategoryPage/reducer';
import dashboardReducer from 'containers/Dashboard/reducer';
import addDealReducer from 'containers/AddDeal/reducer';
import storePageReducer from 'containers/StorePage/reducer';
import subCategoryPageReducer from 'containers/SubCategoryPage/reducer';
import itemsListReducer from 'containers/ItemsList/reducer';
import editItemReducer from 'containers/EditItem/reducer';
import merchantsListReducer from 'containers/MerchantsList/reducer';
import homepageReducer from 'containers/HomePage/reducer';

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    routing: routerReducer,
    language: languageProviderReducer,
    auth: registerPageReducer,
    authorize: loginPageReducer,
    category: categoryPageReducer,
    panel: dashboardReducer,
    item: addDealReducer,
    merchant: storePageReducer,
    subcategory: subCategoryPageReducer,
    itemlist: itemsListReducer,
    editItem: editItemReducer,
    merchantsList: merchantsListReducer,
    homepage: homepageReducer,
    ...asyncReducers,
  });
}
