"use client";

import { useGetAllProductsQuery } from "@/services/api";

export default function Product() {
   const { data, isLoading, isError } = useGetAllProductsQuery();

   return (
      <div className="p-4">
         <h1>All Product</h1>
         <div className="flex flex-col">
            {isLoading && "loading.."}
            {isError && "somthing went wrong"}
            {data.products.map((product) => {
               return (
                  <div key={product.id} className="p-2">
                     price: {product.price}$
                  </div>
               );
            })}
         </div>
      </div>
   );
}
