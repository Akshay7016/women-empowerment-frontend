import schemeReducer from './SchemeSlice';

import { configureStore } from "@reduxjs/toolkit";

console.log('store');
const store = configureStore(
    {
        reducer: {
            scheme: schemeReducer,
            
        }
    }
);

export default store;