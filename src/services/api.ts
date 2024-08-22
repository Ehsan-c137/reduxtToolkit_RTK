import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

const isHydrateAction = (action: { type: string }) => action.type === HYDRATE;

export const api = createApi({
   reducerPath: "api",
   baseQuery: fetchBaseQuery({
      baseUrl: "https://dummyjson.com/",
      headers: {
         "Content-Type": "application/json",
      },
   }),
   extractRehydrationInfo(
      action: any,
      { reducerPath }: { reducerPath: string }
   ) {
      if (isHydrateAction(action)) {
         return action.payload[reducerPath];
      }
   },
   tagTypes: ["products", "cart"],
   endpoints: () => ({}),
});

export default api;
