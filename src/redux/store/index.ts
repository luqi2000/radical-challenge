//this file will create our redux store at the running of the application
//configureStore need structure of the global store/state

import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../reducers";

const store = configureStore({
  reducer: {
    book: bookReducer
    // here I can add more reducers if I Need
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
