"use client";
import { useSelector } from "react-redux";
import { Card } from "flowbite-react";
import Link from "next/link";
import CartItem from "./CartItem";

export function Cart() {
   const cartList = useSelector((state) => state.cart.cartList);

   return (
      <Card className="p-4 max-w-[450px] min-w-[300px]">
         <div className="mb-4 flex items-center justify-between">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
               Shopping Cart
            </h5>
         </div>
         <div className="flow-root">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
               {cartList.length === 0 && (
                  <div>
                     <Link
                        className="p-2 rounded-lg bg-gray-400"
                        href={"/products"}
                     >
                        Show Prodcuts
                     </Link>
                  </div>
               )}
               {cartList?.map((item) => {
                  return (
                     <CartItem
                        id={item.id}
                        quantity={item.quantity}
                        key={item.id}
                     />
                  );
               })}
            </ul>
         </div>
      </Card>
   );
}

export default Cart;
