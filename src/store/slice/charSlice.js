import { createSlice } from "@reduxjs/toolkit";

const charSlice = createSlice({
  name: "character",
  initialState: {
    list: {},
  },
  reducers: {
    // actions if any
    UPDATE_CHARACTERS_LIST: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { UPDATE_CHARACTERS_LIST } = charSlice.actions;

export default charSlice.reducer;
