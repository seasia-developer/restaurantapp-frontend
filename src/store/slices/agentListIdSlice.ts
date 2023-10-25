import { createSlice } from "@reduxjs/toolkit";

const agentListIdSlice = createSlice({
  name: "agentListId",
  initialState: "",
  reducers: {
    getAgentListId: (state, action) => (state = action.payload),
  },
});

export const { getAgentListId } = agentListIdSlice.actions;

export default agentListIdSlice.reducer;
