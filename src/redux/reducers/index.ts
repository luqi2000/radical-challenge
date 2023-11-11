// reducers.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { saveBooks, addToFavorites, removeFromFavorites } from "../actions";
import { Book } from "../../components/HomePage";

interface BookState {
  books: Book[];
  favorites: Book[];
}

const initialState: BookState = {
  books: [],
  favorites: []
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(saveBooks, (state, action: PayloadAction<Book[]>) => {
        state.books = action.payload;
      })
      .addCase(addToFavorites, (state, action: PayloadAction<Book>) => {
        state.favorites.push(action.payload);
      })
      .addCase(removeFromFavorites, (state, action: PayloadAction<string>) => {
        state.favorites = state.favorites.filter(book => book.primary_isbn10 !== action.payload);
      });
  }
});

export default bookSlice.reducer;
