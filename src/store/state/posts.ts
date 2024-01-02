import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type PostsData = {
  filteringAuthorsIds: number[];
};

const initialState: PostsData = {
  filteringAuthorsIds: [],
};

export const posts = createSlice({
  name: "Posts",
  initialState,
  reducers: {
    saveAuthorsIds: (state, action: PayloadAction<number[] | null>) => {
      if (action.payload && action.payload.length > 0) {
        state.filteringAuthorsIds = action.payload;
      } else {
        state.filteringAuthorsIds = [];
      }
    },
  },
});

export const { saveAuthorsIds } = posts.actions;

export default posts.reducer;
