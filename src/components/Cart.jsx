'use client'
import { useSelector } from "react-redux"
import { Card } from "flowbite-react"
import Image from "next/image"
import Link from "next/link"

export function Cart() {
    const subTotal = useSelector((state)=> state.cart.subtotal)
    const cartList = useSelector((state)=> state.cart.cartList)
    console.log(cartList)
    return (<Card className="p-4 max-w-xl w-[450px]">
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Shopping Cart</h5>
        <h5  className="text-md font-medium text-cyan-600 hover:underline dark:text-cyan-500">
          {subTotal}{' '}$
        </h5>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {cartList.length === 0 && <Link className="bg-blue-200 p-2" href='/products'>select Product</Link>}
          {cartList.map((item)=> {
            return <>
                      <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                            <div className="shrink-0">
                                <Image
                                    alt={item?.title}
                                    height="64"
                                    src={item?.thumbnail}
                                    width="64"
                                    className="rounded-full"
                                />
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{item?.title}</p>
                                <p className="truncate text-sm text-gray-500 dark:text-gray-400">{item?.price}$ - x{item?.quantity}</p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">${item?.price}</div>
                        </div>
                      </li>
            </>
          })}
        </ul>
      </div>
    </Card>)
}

export default Cart