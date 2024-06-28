import api from "../api";

export const cartApi = api.injectEndpoints({
   endpoints: (builder) => ({
      updateCart: builder.mutation({
         query: (id, body) => {
            return {
               method: "PUT",
               body: {
                  merge: true,
                  ...body,
               },
               url: `carts/${id}`,
            };
         },
      }),
   }),
});

export const { useUpdateCartMutation } = cartApi;
