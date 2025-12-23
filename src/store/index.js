import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/features/authSlice.js';
import productsReducer from '@/features/productsSlice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;
