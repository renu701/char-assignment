import { configureStore } from '@reduxjs/toolkit';
import charSlice from './slice/charSlice';

const store = configureStore({
    reducer: charSlice
})

export default store;
