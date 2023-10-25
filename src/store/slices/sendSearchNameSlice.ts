import { createSlice } from "@reduxjs/toolkit";

const sendSearchNameSlice = createSlice({
  name: "sendSearchName",
  initialState: "",
  reducers: {
    setSendSearchName: (state, action) => (state = action.payload),
  },
});

export const { setSendSearchName } = sendSearchNameSlice.actions;

export default sendSearchNameSlice.reducer;
