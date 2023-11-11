import { createAction } from "@reduxjs/toolkit";
import { Book } from "../../components/HomePage";

export const saveBooks = createAction<Book[]>("saveBooks");
export const addToFavorites = createAction<Book>("addToFavorites");
export const removeFromFavorites = createAction<string>("removeFromFavorites");