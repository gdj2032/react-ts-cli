import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from '@/reduxes/store';
import { PersistGate } from 'redux-persist/integration/react';
import WrapRouter from './route';

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <WrapRouter />
    </PersistGate>
  </Provider>
);

export default Root;