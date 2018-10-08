// @flow
import { combineReducers } from 'redux';
import { updateState } from '../../../utils/utils';
import type {
  LoadHomeFailureAction,
  LoadSeoDataSuccessAction,
  LoadHomeEditorialDataSuccessAction,
  HomePageActions,
} from './types';
import {
  LOAD_HOME_FAILURE,
  LOAD_HOME_SEO_SUCCESS,
  LOAD_HOME_EDITORIAL_DATA_SUCCESS,
} from './HomePage.constants';

export const getFailure = (state, action: LoadHomeFailureAction) =>
  updateState(state, { error: action.error });

export const addLayoutData = (state, data: LoadSeoDataSuccessAction) =>
  updateState(state, { seoData: data });

export const addHomeEditorialData = (state, data: LoadHomeEditorialDataSuccessAction) =>
  updateState(state, { editorialData: data });

export const layout = (state = {}, action: HomePageActions) => {
  switch (action.type) {
    case LOAD_HOME_FAILURE:
      return getFailure(state, action);
    case LOAD_HOME_SEO_SUCCESS:
      return addLayoutData(state, action.data);
    case LOAD_HOME_EDITORIAL_DATA_SUCCESS:
      return addHomeEditorialData(state, action.data);
    default:
      return state;
  }
};

export default combineReducers({
  layout,
});
