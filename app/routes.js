// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import {
  getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const {
    injectReducer,
    redirectToLogin,
    redirectToDashboard,
    logoutUser } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/signup',
      name: 'registerPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/RegisterPage/reducer'),
          import('containers/RegisterPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('registerPage', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/confirm-email',
      name: 'confirmEmail',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/ConfirmEmail/reducer'),
          import('containers/ConfirmEmail'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('confirmEmail', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      onEnter: redirectToDashboard,
      path: '/login',
      name: 'loginPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/LoginPage/reducer'),
          import('containers/LoginPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('loginPage', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      onEnter: redirectToLogin,
      path: '/dashboard',
      name: 'dashboard',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Dashboard/reducer'),
          import('containers/Dashboard'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('dashboard', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      onEnter: redirectToLogin,
      path: '/dashboard/category',
      name: 'categoryPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/CategoryPage/reducer'),
          import('containers/CategoryPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('categoryPage', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      onEnter: logoutUser,
      path: '/logout',
      name: 'logoutPage',
      getComponent(location, cb) {
        import('containers/LogoutPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/dashboard/sub-category',
      name: 'subCategoryPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/SubCategoryPage/reducer'),
          import('containers/SubCategoryPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('subCategoryPage', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      onEnter: redirectToLogin,
      path: '/dashboard/merchants',
      name: 'storePage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/StorePage/reducer'),
          import('containers/StorePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('storePage', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      onEnter: redirectToLogin,
      path: '/dashboard/items-list',
      name: 'itemsList',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/ItemsList/reducer'),
          import('containers/ItemsList'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('itemsList', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      onEnter: redirectToLogin,
      path: '/dashboard/items-list/:itemId/update',
      name: 'editItem',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/EditItem/reducer'),
          import('containers/EditItem'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('editItem', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      onEnter: redirectToLogin,
      path: '/dashboard/items-list/:itemId',
      name: 'itemDetail',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/ItemDetail/reducer'),
          import('containers/ItemDetail'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('itemDetail', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      onEnter: redirectToLogin,
      path: '/dashboard/merchants/:merchantId',
      name: 'merchantDetail',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/MerchantDetail/reducer'),
          import('containers/MerchantDetail'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('merchantDetail', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/dashboard/merchants/:merchantId/update',
      name: 'merchantEdit',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/MerchantEdit/reducer'),
          import('containers/MerchantEdit'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('merchantEdit', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}