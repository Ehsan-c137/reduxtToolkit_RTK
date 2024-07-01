"use client";
import { useSelector } from "react-redux";
import { Card } from "flowbite-react";
import CartItem from "./CartItem";

export function Cart() {
  const cartList = useSelector((state) => state.cart.cartList);
  // let subTotal = 0

  // const products = cartList.map( item => {
  //     const data =  useGetProductByIdQuery(item.id)
  //     const total = data?.price * item.quantity
  //     const price = data?.price;
  //     const quantity = item?.quantity;
  //     const thumbnail = data?.thumbnail
  //     const title = data?.title
  //     subTotal += (price * quantity);

  //   return {
  //     quantity,
  //     title,
  //     price,
  //     thumbnail,
  //     total
  //   }
  // })

  return (
    <Card className="p-4 max-w-[350px]">
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Shopping Cart
        </h5>
        {/* <h5  className="text-md font-medium text-cyan-600 hover:underline dark:text-cyan-500">
          {subTotal}{' '}$
        </h5> */}
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {/* {cartList.length === 0 && <Link className="bg-blue-200 p-2" href='/products'>select Product</Link>} */}
          {true &&
            cartList?.map((item) => {
              return (
                <CartItem id={item.id} quantity={item.quantity} key={item.id} />
              );
            })}
        </ul>
      </div>
    </Card>
  );
}

export default Cart;
