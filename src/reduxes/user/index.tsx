import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';
import types from '@/action/types';

const typesUser: any = types.user;

const user = combineReducers({
  account: createReducer({
    [typesUser]: (state, payload) => ({ ...state, ...payload.value }),
  }, {
    isLogin: false,
    id: 0,
    username: null,
  }),
});

export default user;
