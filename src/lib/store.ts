import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productApi from "../services/product/productApi";
import cartApi from "../services/cart/cartApi";
import cartReducer from "../services/cart/cartSlice";
import { createWrapper } from "next-redux-wrapper";

const rootReducer = combineReducers({
   [productApi.reducerPath]: productApi.reducer,
   [cartApi.reducerPath]: cartApi.reducer,
   cart: cartReducer,
});

export const makeStore = () => {
   return configureStore({
      reducer: rootReducer,
      // Adding the api middleware enables caching, invalidation, polling,
      // and other useful features of `rtk-query`.
      middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware().concat(productApi.middleware),
   });
};

export const wrapper = createWrapper(makeStore, { debug: true });
