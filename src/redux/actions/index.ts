import { createAction } from "@reduxjs/toolkit";
import { Book } from "../../components/HomePage";

export const saveBooks = createAction<Book[]>("saveBooks");
