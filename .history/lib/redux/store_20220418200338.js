import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice"

const store = configureStore({ menu: menuReducer });
