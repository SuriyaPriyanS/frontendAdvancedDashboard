import { configureStore } from "@reduxjs/toolkit";
import GlobalSlice from "./api/global/global";
import { api } from "../State/api/api.js";
import { setupListeners } from "@reduxjs/toolkit/query";

export const Store = configureStore({
  reducer: {
    global: GlobalSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(Store.dispatch);

export default Store;