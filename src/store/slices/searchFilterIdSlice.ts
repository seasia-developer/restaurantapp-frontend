import { createSlice } from "@reduxjs/toolkit";

const searchFilterIdSlice = createSlice({
    name: 'searchFilterId',
    initialState: {
        data : null
    },
    reducers: {
        setSearchFilterIdData: (state, action) =>{
            state.data = action.payload;
        }
    }

});

export const { setSearchFilterIdData } = searchFilterIdSlice.actions

export default searchFilterIdSlice.reducer;