import { useGetProductByIdQuery } from "@/services/product/productApi";
import { useUpdateCartMutation } from "@/services/cart/cartApi";
import { useAppDispatch } from "@/lib/hooks";
import Image from "next/image";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import AddToCart from "@/components/AddToCart";

async function getData(id) {
   const res = await fetch(`https://dummyjson.com/products/${id}`, {
      headers: {
         "Content-Type": "application/json",
      },
   });
   if (!res.ok) {
      console.log(res);
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
   }

   return res.json();
}

export default async function Page(props) {
   const data = await getData(props.params.id);

   // const { data, isLoading, error } = useGetProductByIdQuery(`${params.id}`);
   // const [updateCart, { isLoading: isUpdating, error: updateCartError }] =
   //    useUpdateCartMutation();
   // const { data } = GetProductById();

   // updateCartError && toast("something went wrong!");

   return (
      <div className="h-[100vh] bg-gray-300  p-4">
         <Toaster />

         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link href="/products">Back to Products</Link>
         </button>
         <div className="w-full h-full flex items-center justify-center">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
               <a href="#">
                  <Image
                     width={250}
                     height={250}
                     className="p-8 rounded-t-lg"
                     src={data?.images[0]}
                     alt="product image"
                  />
               </a>
               <div className="px-5 pb-5">
                  <a href="#">
                     <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {data?.title}
                     </h5>
                  </a>
                  <div className="flex items-center mt-2.5 mb-5">
                     <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <svg
                           className="w-4 h-4 text-yellow-300"
                           aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor"
                           viewBox="0 0 22 20"
                        >
                           <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                           className="w-4 h-4 text-yellow-300"
                           aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor"
                           viewBox="0 0 22 20"
                        >
                           <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                           className="w-4 h-4 text-yellow-300"
                           aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor"
                           viewBox="0 0 22 20"
                        >
                           <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                           className="w-4 h-4 text-yellow-300"
                           aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor"
                           viewBox="0 0 22 20"
                        >
                           <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                           className="w-4 h-4 text-gray-200 dark:text-gray-600"
                           aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor"
                           viewBox="0 0 22 20"
                        >
                           <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                     </div>
                     <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                        5.0
                     </span>
                  </div>
                  <p className="pt-4 pb-4">{data?.description}</p>
                  <div className="flex items-center justify-between">
                     <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        {data?.price}$
                     </span>

                     <AddToCart id={props.params.id} />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
