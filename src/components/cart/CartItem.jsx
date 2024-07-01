import { useGetProductByIdQuery } from "@/services/product/productApi";
import Image from "next/image";

const CartItem = ({ id, quantity }) => {
  const { data, isLoading } = useGetProductByIdQuery(id);

  isLoading && "isLoading";
  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center space-x-4">
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
          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
            {data?.price}$ - x{quantity}
          </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          ${data?.price * quantity}
        </div>
      </div>
    </li>
  );
};

export default CartItem;
