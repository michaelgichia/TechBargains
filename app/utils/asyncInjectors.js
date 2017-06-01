import conformsTo from 'lodash/conformsTo';
import isEmpty from 'lodash/isEmpty';
import isFunction from 'lodash/isFunction';
import isObject from 'lodash/isObject';
import isString from 'lodash/isString';
import invariant from 'invariant';
import warning from 'warning';
import createReducer from 'reducers';
import Auth from '../containers/Utils';

/**
 * Validate the shape of redux store
 */
export function checkStore(store) {
  const shape = {
    dispatch: isFunction,
    subscribe: isFunction,
    getState: isFunction,
    replaceReducer: isFunction,
    asyncReducers: isObject,
  };
  invariant(
    conformsTo(store, shape),
    '(app/utils...) asyncInjectors: Expected a valid redux store'
  );
}

/**
 * Inject an asynchronously loaded reducer
 */
export function injectAsyncReducer(store, isValid) {
  return function injectReducer(name, asyncReducer) {
    if (!isValid) checkStore(store);

    invariant(
      isString(name) && !isEmpty(name) && isFunction(asyncReducer),
      '(app/utils...) injectAsyncReducer: Expected `asyncReducer` to be a reducer function'
    );

    if (Reflect.has(store.asyncReducers, name)) return;

    store.asyncReducers[name] = asyncReducer; // eslint-disable-line no-param-reassign
    store.replaceReducer(createReducer(store.asyncReducers));
  };
}


function redirectToDashboard(store) {
  return (nextState, replace) => {
    if (Auth.isUserAuthenticated()) {
      replace({
        pathname: '/dashboard',
        state: { nextPathname: nextState.location.pathname },
      });
    }
  };
}

function redirectToLogin(store) {
  return (nextState, replace) => {
    if (!Auth.isUserAuthenticated()) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname },
      });
    }
  };
}

function logoutUser(store) {
  return (nextState, replace) => {
    if (Auth.isUserAuthenticated()) {
      Auth.deauthenticateUser();
    }
  };
}

/**
 * Helper for creating injectors
 */
export function getAsyncInjectors(store) {
  checkStore(store);

  return {
    injectReducer: injectAsyncReducer(store, true),
    redirectToLogin: redirectToLogin(store),
    redirectToDashboard: redirectToDashboard(store),
    logoutUser: logoutUser(store),
  };
}
