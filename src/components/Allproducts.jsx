import Link from "next/link";
import Image from "next/image";

const AllProducts = ({ data }) => {
  return (
    <>
      <div className="flex flex-wrap gap-8">
        {data?.products.map((product) => {
          return (
            <div
              key={product.id}
              className="max-w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <Link
                href={"/products/" + product.id}
                className="flex items-center justify-center h-48"
              >
                <Image
                  className="rounded-t-lg"
                  width={100}
                  height={50}
                  src={product?.images[0]}
                  alt=""
                />
              </Link>
              <div className="p-5">
                <Link href={"/products/" + product.id}>
                  <p className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {product?.title}
                  </p>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {product?.description}
                </p>
                <Link
                  href={"/products/" + product.id}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllProducts;
