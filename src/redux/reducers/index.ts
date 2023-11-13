// reducers.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { saveBooks, addToFavorites, removeFromFavorites, saveFavoritesToLocalStorage, updateBook } from "../actions";
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
        // Save favorites to localStorage
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      })
      .addCase(removeFromFavorites, (state, action: PayloadAction<string>) => {
        state.favorites = state.favorites.filter(book => book.primary_isbn10 !== action.payload);
        // Save favorites to localStorage
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      })
      .addCase(saveFavoritesToLocalStorage, (state, action: PayloadAction<Book[]>) => {
        state.favorites = action.payload;
      })
      .addCase(updateBook, (state, action: PayloadAction<{ isbn: string; updatedData: Partial<Book> }>) => {
        const { isbn, updatedData } = action.payload;
        state.books = state.books.map(book => (book.primary_isbn10 === isbn ? { ...book, ...updatedData } : book));
      });
  }
});

export default bookSlice.reducer;
