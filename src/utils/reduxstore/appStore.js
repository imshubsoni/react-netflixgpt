import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./storeSlices/userSlice";
import moviesReducer from "./storeSlices/moviesSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default appStore;
