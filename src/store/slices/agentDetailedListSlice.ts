import { createSlice } from "@reduxjs/toolkit";

const agentDetailedListSlice = createSlice({
  name: "agentDetailedList",
  initialState: "",
  reducers: {
    getAgentDetailedList: (state, action) => (state = action.payload),
  },
});

export const { getAgentDetailedList } = agentDetailedListSlice.actions;

export default agentDetailedListSlice.reducer;
