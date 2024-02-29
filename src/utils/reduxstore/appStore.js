import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./storeSlices/userSlice";
import moviesReducer from "./storeSlices/moviesSlice";
import gptReducer from "./storeSlices/gptSlice";
import configReducer from "./storeSlices/configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default appStore;
