import { configureStore } from "@reduxjs/toolkit";
import productApi from "@/services/api";

export const makeStore = () => {
   return configureStore({
      reducer: {
         [productApi.reducerPath]: productApi.reducer,
      },
      // Adding the api middleware enables caching, invalidation, polling,
      // and other useful features of `rtk-query`.
      middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware().concat(productApi.middleware),
   });
};
