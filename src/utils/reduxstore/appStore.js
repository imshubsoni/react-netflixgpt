import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./storeSlices/userSlice";
import moviesReducer from "./storeSlices/moviesSlice";
import gptReducer from "./storeSlices/gptSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default appStore;
