"use client";
import React from "react";
import { useUpdateCartMutation } from "@/services/cart/cartApi";
import toast from "react-hot-toast";
import { addToCart } from "@/services/cart/cartSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useDispatch } from "react-redux";

const AddToCart = (id: string | number) => {
   const dispatch = useDispatch();
   const [updateCart, { isLoading: isUpdating, error: updateCartError }] =
      useUpdateCartMutation();

   const handleClick = () => {
      dispatch(addToCart(id));
      toast("cart updated");
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
