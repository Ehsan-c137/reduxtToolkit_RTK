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

// Export hooks for usage in functional components
export const {
   useGetAllProductsQuery,
   useGetProductByIdQuery,
   util: { getRunningQueriesThunk },
} = productApi;

// export endpoints for use in SSR
export const { getAllProducts, getProductById } = productApi.endpoints;

export default productApi;
