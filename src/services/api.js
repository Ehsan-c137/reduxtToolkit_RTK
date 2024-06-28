import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
   reducerPath: "api",
   baseQuery: fetchBaseQuery({
      baseUrl: "https://dummyjson.com/",
      headers: {
         "Content-Type": "application/json",
      },
   }),
   tagTypes: ["products", "cart"],
   endpoints: () => ({}),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery } = api;

export default api;
