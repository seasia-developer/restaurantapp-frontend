import { createSlice } from "@reduxjs/toolkit";

const selectedPageSlice = createSlice({
    name:"selectedPage",
    initialState:"",
    reducers: {
        setSeletedPage: (state, action) => (state = action.payload)
    }
})

export const { setSeletedPage } = selectedPageSlice.actions;
export default selectedPageSlice.reducer;