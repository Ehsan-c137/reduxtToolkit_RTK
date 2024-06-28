import api from "../api";

const productApi = api.injectEndpoints({
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
