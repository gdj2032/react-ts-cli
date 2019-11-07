import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './index';

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['pathInfo'],
  whitelist: ['user']
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, undefined);
export const persistor = persistStore(store);
