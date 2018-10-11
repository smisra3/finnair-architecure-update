import App, { Container } from "next/app";
import React from "react";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import enhance from "../lib/dynamicStore/enhance";
import { withRouter } from "next/router";
import rootReducer from "../components/templates/LoginPage/LoginPage.reducer";
import rootSaga from "../components/templates/LoginPage/LoginPage.saga";
import initialActions from "../components/templates/LoginPage/LoginPage.action";
import globalSaga from "../global/saga";
import { ROUTE_MAPPING_FOR_PAGE_CONFIG } from '../constants';
// my imports

import { compose } from "redux";
import { connect } from 'react-redux';
import initRedux from "../lib/dynamicStore/configureStore";

const sagaMiddleware = createSagaMiddleware();

const mapStateToProps = (state: Map): MapStateToProps => ({
  data: get(state, ["global"]),
  deviceType: get(state, ["global", "globalData", "deviceType"]),
  activeBrand: get(state, ["global", "globalData", "activeBrand"]),
  isUserLoggedIn: get(state, ["global", "globalData", "sessionInfo", "isUserLoggedIn"])
});

/* istanbul ignore next */
const mapDispatchToProps = (dispatch): void => ({});

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

// function configureStore(initialState = {}) {
//   const store = createStore(rootReducer);

//   // store.runSagaTask = () => {
//   //   store.sagaTask = sagaMiddleware.run(rootSaga);
//   // };

//   // store.runSagaTask();
//   return store;
// }

class MyApp extends App {

  static async getInitialProps({ Component, routes, ctx }) {
    let pageProps = {};
    let { pathname } = ctx;
    pathname = pathname.split('/')[1];
    // let pathValue = ROUTE_MAPPING_FOR_PAGE_CONFIG[pathname];
    // from here
    const pageConfig = await import('../components/templates/LoginPage/LoginPage.config.js');
    const withRedux = initRedux({
      key: pageConfig.default.key,
      reducer: pageConfig.default.reducer,
      saga: pageConfig.default.saga
    });
    const withConnect = connect(
      pageConfig.mapStateToProps,
      pageConfig.mapDispatchToProps
    );
    const NewComponent = compose(withRedux, withConnect)(Component)
    const store = this.configureStore({}, pageConfig);
    //till here
    if(Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps, store, NewComponent }
  }

  static configureStore(initialState = {}, pageConfig) {
    if(pageConfig) {
      var reducer = pageConfig.reducer || rootReducer;
      var saga = pageConfig.saga || rootSaga;
      var key = pageConfig.key || 'login';
    }
    const store = createStore(rootReducer, initialState, bindMiddleware([sagaMiddleware]));
    store.runSaga = sagaMiddleware.run;
    store.injectedReducers = rootReducer;
    store.runSagaTask = () => {
      store.sagaTask = sagaMiddleware.run(rootSaga);
    };
    store.injectedSagas = {};
    if (globalSaga) {
      store.globalSaga = { globalSaga, task: store.runSaga(globalSaga) };
    }
    store.injectedSagas[key] = { ...saga, task: store.runSaga(rootSaga) };
    store.runSagaTask();
    return store;
  }
   render() {
    let { Component, pageProps, store, NewComponent } = this.props;
    console.log('--------------------------store------------------------------', store)
    console.log('--------------------------NewComponent-----------------------', NewComponent)
    return (
      <Container>
        <Provider store={store}>
          <NewComponent {...this.props} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(MyApp.configureStore)(withReduxSaga(MyApp));
