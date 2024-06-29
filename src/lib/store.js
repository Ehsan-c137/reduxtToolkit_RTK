import { configureStore } from "@reduxjs/toolkit";
import productApi from "@/services/product/productApi";
import cartApi from "@/services/cart/cartApi";
import { createWrapper } from "next-redux-wrapper";

export const makeStore = () => {
   return configureStore({
      reducer: {
         [productApi.reducerPath]: productApi.reducer,
         [cartApi.reducerPath]: cartApi.reducer,
      },
      // Adding the api middleware enables caching, invalidation, polling,
      // and other useful features of `rtk-query`.
      middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware().concat(productApi.middleware),
   });
};

export const wrapper = createWrapper(makeStore, { debug: true });
