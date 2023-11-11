//this file will create our redux store at the running of the application
//configureStore need structure of the global store/state

import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../reducers";
import { saveFavoritesToLocalStorage } from "../actions";

const store = configureStore({
  reducer: {
    book: bookReducer
    // here I can add more reducers if I Need
  }
});

// Load favorites from localStorage
const savedFavorites = localStorage.getItem("favorites");
if (savedFavorites) {
  store.dispatch(saveFavoritesToLocalStorage(JSON.parse(savedFavorites)));
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
