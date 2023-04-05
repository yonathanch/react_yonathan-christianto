import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './productreducerSlice';

const store = configureStore({
    reducer: rootReducer
  });

export default store