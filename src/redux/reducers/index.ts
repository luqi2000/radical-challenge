//here we define our pure function this will be our principal reducer
//reducer will take the current state of the app when it will called and it takes also action that arriving from a dispatch()
//It will read the type and with this 2 information will create a new global state.
//we need to start from a initial State.

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { saveBooks } from "../actions";
import { Book } from "../../components/HomePage";

interface BookState {
  books: Book[];
}

const initialState: BookState = {
  books: []
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(saveBooks, (state, action: PayloadAction<Book[]>) => {
      state.books = action.payload;
    });
  }
});

export default bookSlice.reducer;
