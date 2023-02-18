import { configureStore } from "@reduxjs/toolkit";
import MainSlice from "./MainSlice";
 const store = configureStore({
  reducer: {  MainSlice: MainSlice }, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
});
export default store