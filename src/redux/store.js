import { configureStore } from '@reduxjs/toolkit';

import promptReducer from "../redux/taskSlice"
import selectedContact from "../redux/taskSlice"
export const store = configureStore({
  reducer: {
    prompt: promptReducer, 
    prompt:selectedContact,
  },
});

