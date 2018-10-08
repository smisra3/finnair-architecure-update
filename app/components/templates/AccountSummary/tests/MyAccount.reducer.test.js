import { fromJS } from 'immutable';
import { layout, getFailure, addLayoutData, addHomeEditorialData } from '../MyAccount.reducer';
import {
  LOAD_HOME_FAILURE,
  LOAD_HOME_SEO_SUCCESS,
  LOAD_HOME_EDITORIAL_DATA_SUCCESS,
} from '../MyAccount.constants';

const state = fromJS({});

describe('HomePage Reducer functions', () => {
  test('calls Failure', () => {
    const action = { type: LOAD_HOME_FAILURE, error: 'new Error' };
    const newState = getFailure(state, action);
    expect(newState.get('error')).toEqual(action.error);
  });

  test('calls addLayoutData', () => {
    const action = { type: LOAD_HOME_SEO_SUCCESS, data: 'Some HTML' };
    const newState = addLayoutData(state, action.data);
    expect(newState.get('seoData')).toEqual(action.data);
  });

  test('calls addHomeEditorialData', () => {
    const action = { type: LOAD_HOME_EDITORIAL_DATA_SUCCESS, data: { content: 'Some HTML' } };
    const newState = addHomeEditorialData(state, action.data);
    expect(newState.get('editorialData')).toEqual(fromJS({ content: 'Some HTML' }));
  });
});

describe('HomePage Reducer', () => {
  test('dispatch Action LOAD_HOME_SEO_SUCCESS', () => {
    const action = { type: LOAD_HOME_SEO_SUCCESS, data: 'Some HTML' };
    const newState = layout(state, action);
    expect(newState).not.toMatchObject(state);
  });

  test('dispatch Action LOAD_HOME_EDITORIAL_DATA_SUCCESS', () => {
    const action = { type: LOAD_HOME_EDITORIAL_DATA_SUCCESS, data: 'Some HTML' };
    const newState = layout(state, action);
    expect(newState).not.toMatchObject(state);
  });

  test('dispatch Action FAILURE', () => {
    const action = { type: LOAD_HOME_FAILURE, error: 'Some Error' };
    const newState = layout(state, action);
    expect(newState).not.toMatchObject(state);
  });

  test('return default State', () => {
    const action = { type: 'DUMMY_ACTION' };
    expect(layout(state, action)).toEqual(state);
  });
});
