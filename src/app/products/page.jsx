"use client";

import { useGetAllProductsQuery } from "@/services/product/productApi";
import Image from "next/image";
import Link from "next/link";

export default function Product() {
   const { data, isLoading, isError } = useGetAllProductsQuery();
   
   return (
      <div className="p-4">
         <h1>All Product</h1>
         <div className="flex">
            {isLoading && "loading.."}
            {isError && "somthing went wrong"}

            <div className="flex flex-wrap w-full h-full">
               {data?.products.map((product) => {
                  return (
                     <Link
                        href={`products/${product.id}`}
                        key={product.id}
                        className="p-2"
                     >
                        <div className="flex flex-col space-y-8   animated fadeIn faster justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-gray-300">
                           <div className="block rounded-lg bg-white w-72">
                              <div
                                 className="relative overflow-hidden bg-cover bg-no-repeat"
                                 data-te-ripple-init
                                 data-te-ripple-color="light"
                              >
                                 <Image
                                    width={250}
                                    height={350}
                                    className="rounded-lg  sm:m-h-64 md:h-64 w-full"
                                    src={product?.images[0]}
                                    alt={"template"}
                                 />
                                 <a href="#!">
                                    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                                 </a>
                              </div>

                              <div className="p-2">
                                 <div className="flex justify-between">
                                    <h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800 dark:text-neutral-50">
                                       {product?.title}
                                    </h5>
                                    <h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800 dark:text-neutral-50 flex">
                                       {product?.category}
                                    </h5>
                                 </div>
                                 <p className="mb-1 text-sm text-neutral-600 dark:text-neutral-200">
                                    {product?.description}
                                 </p>
                                 <h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800 dark:text-neutral-50">
                                    Price: {product?.price}
                                 </h5>
                              </div>
                           </div>
                        </div>
                     </Link>
                  );
               })}
            </div>
         </div>
      </div>
   );
}
