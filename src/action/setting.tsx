import types from './types';

const UPDATE = (type: any, value: any) => (dispatch: any) => {
  dispatch(types[type]({ type, value }));
};

export const updateUser = (value: any) => (dispatch: any) => dispatch(UPDATE('user', value));
