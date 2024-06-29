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
   console.log(data);

   // const { data, isLoading, error } = useGetProductByIdQuery(`${params.id}`);
   // const [updateCart, { isLoading: isUpdating, error: updateCartError }] =
   //    useUpdateCartMutation();
   // const { data } = GetProductById();

   // updateCartError && toast("something went wrong!");

   // console.log(GetByName());

   // const handleClick = () => {
   //    try {
   //       console.log(updateCartError);
   //       updateCart(params.id, {
   //          products: [
   //             {
   //                id: 1,
   //                quantity: 1,
   //             },
   //          ],
   //       })
   //          .unwrap()
   //          .then((res) => {
   //             console.log(res);
   //             toast("cart updated");
   //          });
   //    } catch (err) {
   //       toast("something went wrong!");
   //    }
   // };

   return (
      <div className="bg-gray-300 h-[100vh]">
         <Toaster />

         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link href="/products">Back to Products</Link>
         </button>
         <div className="flex flex-col space-y-8  animated fadeIn faster justify-center items-center inset-0 z-50 outline-none focus:outline-none ">
            <div className="block rounded-lg bg-white w-72 mt-32">
               <div
                  className="relative overflow-hidden bg-cover bg-no-repeat"
                  data-te-ripple-init
                  data-te-ripple-color="light"
               >
                  <Image
                     width={250}
                     height={350}
                     className="rounded-lg  sm:m-h-64 md:h-64 w-full"
                     src={data?.images[0]}
                     alt={"template"}
                  />
                  <a href="#!">
                     <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </a>
               </div>

               <div className="p-2">
                  <div className="flex justify-between">
                     <h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800 dark:text-neutral-50">
                        {data?.title}
                     </h5>
                     <h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800 dark:text-neutral-50 flex">
                        {data?.category}
                     </h5>
                  </div>
                  <p className="mb-1 text-sm text-neutral-600 dark:text-neutral-200">
                     {data?.description}
                  </p>
                  <h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800 dark:text-neutral-50">
                     Price: {data?.price}
                  </h5>
               </div>
               <AddToCart />
            </div>
         </div>
      </div>
   );
}
