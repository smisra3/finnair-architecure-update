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

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ...ctx });
    }
    return { pageProps };
  }
  static configureStore(initialState = {}) {
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
    store.injectedSagas["login"] = { ...rootSaga, task: store.runSaga(rootSaga) };
    store.runSagaTask();
    return store;
  }
  constructor(props) {
    super(props);
  }
  render() {
    let { Component, pageProps, store } = this.props;
    pageProps = {
      name: "hello"
    };
    const key = "login";
    return (
      <Container>
        <Provider store={store}>
          <Component {...this.props} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(MyApp.configureStore)(withReduxSaga(MyApp));
