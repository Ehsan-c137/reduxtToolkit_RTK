import AllProducts from "@/components/Allproducts";

async function getData() {
   const res = await fetch(`https://dummyjson.com/products`, {
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

export default async function Product() {
   const data = await getData();
   return (
      <div className="p-4 flex flex-col gap-4">
         <h1>All Product</h1>
         <div className="flex">
            {/* {isLoading && "loading.."}
            {isError && "somthing went wrong"} */}
            <AllProducts data={data} />
         </div>
      </div>
   );
}
