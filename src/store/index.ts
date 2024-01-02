import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import { setupListeners } from "@reduxjs/toolkit/query";
import posts from "./state/posts";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    posts,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
