import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
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

export const { useGetAllProductsQuery, useGetProductByIdQuery } = productApi;

export default productApi;
