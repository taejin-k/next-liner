import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string = "";

export const keywordSlice = createSlice({
  name: "keyword",
  initialState,
  reducers: {
    setKeyword: (_state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { setKeyword } = keywordSlice.actions;
export default keywordSlice.reducer;
