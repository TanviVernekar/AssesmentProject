import {combineReducers, configureStore} from '@reduxjs/toolkit';
import PassmanagerSlice from './PassmanagerSlice';
import persistReducer from 'redux-persist/es/persistReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';



const persistConfig={
  key:'root',
  version:1,
  storage:AsyncStorage,
}

const reducer=combineReducers({
  manager:PassmanagerSlice,
});

const persistRed = persistReducer(persistConfig,reducer);

export default configureStore({
  reducer:persistRed,
  middleware:getDefaultMiddleware=>
    getDefaultMiddleware({
      serializableCheck:false,
    }),
});
