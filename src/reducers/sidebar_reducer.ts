import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SidebarState } from "../utils/interfaces";

const initialState: SidebarState = {
    isOpen: false
}

export const SidebarStatus = createSlice({
    name: 'SidebarReducer',
    initialState,
    reducers: {
        openSidebar: (state) => {
            state.isOpen = true;
        },

        closeSidebar: (state)=>{
            state.isOpen = false;
        }
    }
});

export const { openSidebar, closeSidebar } = SidebarStatus.actions;
export default SidebarStatus.reducer;