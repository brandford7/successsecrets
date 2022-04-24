import{createSlice} from "@reduxjs/toolkit"

const initialState = {
    isOpen: false,
}

export const menuSlice = createSlice({
    name:"menu",
    initialState,
    reducers: {
        openMenu: () => { },
        close
    }
})