"use client";
import React from "react";

const AddToCart = () => {
   const handleClick = () => {
      console.log("clicked");
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
