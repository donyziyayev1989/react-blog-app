import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  showSearch: false,
  sortBy: "",
};
const postSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.query = action.payload;
    },
    showSearchHandle: (state) => {
      state.showSearch = !state.showSearch;
    },
    setSortHandle: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setSearch, showSearchHandle, setSortHandle } = postSlice.actions;

export default postSlice.reducer;
