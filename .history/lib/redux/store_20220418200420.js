import { configureStore } from "@reduxjs/toolkit";
//import menuReducer from "./menuSlice"

export const store = configureStore({ menu: menuReducer });
