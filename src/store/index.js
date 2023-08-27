import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducerSlicer from './reducerSlicer';

export const store = configureStore({
  reducer: {
    reducerSlicer: reducerSlicer,
  },
  middleware: [...getDefaultMiddleware()],
});
