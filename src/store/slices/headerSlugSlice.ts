import { createSlice } from "@reduxjs/toolkit";

const headerSlugSlice = createSlice({
    name:"headerSlugSlice",
    initialState:"",
    reducers: {
        setHeaderSlugSlice: (state, action) => (state = action.payload)
    }
})

export const { setHeaderSlugSlice } = headerSlugSlice.actions;
export default headerSlugSlice.reducer;