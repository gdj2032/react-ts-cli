import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import appReducer from './appReducer';

const rootReducer = (state: any, action: any) => {
  return appReducer({...state}, {...action});
};

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['pathInfo'],
  whitelist: ['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const applyMiddlewared = applyMiddleware(thunk, logger);

export const store = createStore(persistedReducer, applyMiddlewared);
export const persistor = persistStore(store);
