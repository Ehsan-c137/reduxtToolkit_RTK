"use client";
import React from "react";
import { useUpdateCartMutation } from "@/services/cart/cartApi";
import toast from "react-hot-toast";

const AddToCart = (id) => {
   const [updateCart, { isLoading: isUpdating, error: updateCartError }] =
      useUpdateCartMutation();

   const handleClick = async () => {
      try {
         updateCart(id.id, {
            products: [
               {
                  id: 1,
                  quantity: 1,
               },
            ],
         })
            .unwrap()
            .then((res) => {
               console.log(res);
               toast("cart updated");
            });
      } catch (err) {
         toast("something went wrong!");
      }
   };

   return (
      <button
         onClick={() => handleClick()}
         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
         add to cart
      </button>
   );
};

export default AddToCart;
