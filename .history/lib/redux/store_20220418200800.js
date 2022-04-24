import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice"

export const store = configureStore({r{ menu: menuReducer } });
