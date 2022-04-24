import{createSlice} from "@reduxjs/toolkit"

const initialState = {
    isOpen: false,
}

export const menuSlice = createSlice({
    name:"menu",
    initialState,
    reducers: {
        openMenu: (state) => {state.menu =  !isOpen },
        closeMenu: () => {
state.menu =is
        }
    }
})


export {openMenu, closeMenu} = menuSlice.actions