import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
   reducerPath: "productApi",
   baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
   endpoints: (builder) => ({
      getAllProducts: builder.query({
         query: () => "products",
      }),
      getProductById: builder.query({
         query: (productId) => `products/${productId}`,
      }),
   }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery } = productApi;

export default productApi;
