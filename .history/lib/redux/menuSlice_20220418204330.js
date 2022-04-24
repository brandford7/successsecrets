import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.men = !isOpen;
    },
  
  },
});

export const { openMenu, closeMenu } = menuSlice.actions;

export default menuSlice.reducer
