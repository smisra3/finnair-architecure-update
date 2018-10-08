import { put, takeEvery, call, all } from "redux-saga/effects";
import { loadHomeFailure, loadHomePageEditorialSuccess } from "./HomePage.actions";
import { LOAD_HOME_EDITORIAL_DATA } from "./HomePage.constants";
import API from "../../../utils/fetch";
import API_URLS from "../../../constants/api/url";

export function* loadHomeEditorialDataSaga(action) {
  try {
    const data = yield call(API.fetch, API_URLS.home, action);
    console.log(data);
    yield put(loadHomePageEditorialSuccess(data));
  } catch (err) {
    yield put(loadHomeFailure(err));
  }
}

export default function* homeLayoutSaga() {
  try {
    yield all([takeEvery(LOAD_HOME_EDITORIAL_DATA, loadHomeEditorialDataSaga)]);
  } catch (err) {
    yield put(loadHomeFailure(err));
  }
}
