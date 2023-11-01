import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
/* import todosReducer from '../features/todos/todosSlice'
import filtersReducer from '../features/filters/filtersSlice' */

export const store = configureStore({
  reducer: {
    auth: authReducer,
  }
});