import { configureStore } from "@reduxjs/toolkit";
import PassmanagerSlice from './PassmanagerSlice';

export const Store = configureStore({
    reducer:{
        manager:PassmanagerSlice,
    },
});