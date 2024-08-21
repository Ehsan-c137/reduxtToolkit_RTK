import { useGetProductByIdQuery } from "@/services/product/productApi";
import Image from "next/image";
import Spinner from "../spinner";
import { addToCart, reduceQuantity } from "@/services/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, quantity }) => {
   const { data, isLoading } = useGetProductByIdQuery(id);
   const dispatch = useDispatch();

   const handleAddToCart = () => {
      dispatch(addToCart({ id }));
   };

   const handleRemoveFromCart = () => {
      dispatch(reduceQuantity({ id }));
   };

   const handleRemoveAll = () => {
      dispatch(removeAllCartItems());
   };

   return (
      <li className="py-3 sm:py-4">
         <div className={`flex items-center space-x-4`}>
            {isLoading ? (
               <Spinner />
            ) : (
               <>
                  <div className="shrink-0">
                     <Image
                        alt={data?.title}
                        height="64"
                        src={data?.thumbnail}
                        width="64"
                        className="rounded-full"
                     />
                  </div>
                  <div className="min-w-0 flex-1">
                     <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                        {data?.title}
                     </p>
                     <div className="flex items-center gap-8">
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                           {`${data?.price}$`}
                        </p>
                        <div className="flex items-center gap-3">
                           <button
                              className="bg-white text-black flex items-center justify-center w-4 h-4 font-black rounded-full"
                              onClick={handleRemoveFromCart}
                           >
                              -
                           </button>
                           <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                              {`x${quantity}`}
                           </p>
                           <button
                              onClick={handleAddToCart}
                              className="bg-white text-black flex items-center justify-center w-4 h-4 font-black rounded-full"
                           >
                              +
                           </button>
                        </div>
                     </div>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                     {`$ ${(data?.price.toFixed(2) * quantity).toFixed(2)}`}
                  </div>
               </>
            )}
         </div>
      </li>
   );
};

export default CartItem;
