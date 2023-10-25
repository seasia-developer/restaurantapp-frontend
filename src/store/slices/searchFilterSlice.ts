import { createSlice } from '@reduxjs/toolkit'


const searchFilterSlice = createSlice({
  name: 'searchFilter',
  initialState: {data: null},
  reducers: {
    setSearchFilterData: (state, action) => {
        state.data = action.payload;
    }
  },
  
});

export const { setSearchFilterData } = searchFilterSlice.actions

export default searchFilterSlice.reducer;
