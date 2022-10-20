import React from 'react';
import Router from './src/navigations/Router';
import {Provider} from 'react-redux';
import Store from './src/redux/Store';
import { PersistGate } from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

let persistor = persistStore(Store);
const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
      <Router/>
      </PersistGate>
    </Provider>
  );
};
export default App;
