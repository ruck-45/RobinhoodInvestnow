// Dependencies
import { configureStore } from "@reduxjs/toolkit";

// Local Files
import curTabSlice from "./curTabSlice";
import navOpenStatusSlice from "./navOpenStatusSlice";
import popoverStatusSlice from "./popoverStatusSlice";

const store = configureStore({
  reducer: {
    curTab: curTabSlice,
    navOpenStatus: navOpenStatusSlice,
    popoverStatus: popoverStatusSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
