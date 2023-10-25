'use client'
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  emailData: '',
  passData:'',
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setEmailAndPass: (state, action) => {
      state.emailData = action.payload.email;
      state.passData = action.payload.password;
    },
  },
});

export const { setEmailAndPass } = dataSlice.actions;

export default dataSlice.reducer;
