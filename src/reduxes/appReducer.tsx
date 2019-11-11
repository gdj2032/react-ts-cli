import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';
import types from '@/action/types';
import { userInit } from '@/constants';

const typesUser: any = types.user;

const appReducer = combineReducers({
  user: createReducer({
    [typesUser]: (state, payload) => ({ ...state, ...payload.value }),
  }, {
    ...userInit
  }),
});

export default appReducer;
