"use client";
import React from "react";
import { useUpdateCartMutation } from "@/services/cart/cartApi";
import toast from "react-hot-toast";
import { addToCart } from "@/services/cart/cartSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useDispatch } from "react-redux";

const AddToCart = (id) => {
   const dispatch = useDispatch()
   const [updateCart, { isLoading: isUpdating, error: updateCartError }] =
      useUpdateCartMutation();
   

   const handleClick = () => {
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
               const updatedCart = {}
               updatedCart.cartList = res.products
               updatedCart.totlalProduct = res.totalProducts
               updatedCart.totalQuantity = res.totalQuantity
               dispatch(addToCart(id))
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
