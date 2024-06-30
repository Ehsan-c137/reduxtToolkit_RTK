'use client'
import { useSelector } from "react-redux"
import { Card } from "flowbite-react"
import Image from "next/image"
import Link from "next/link"
import { useGetProductByIdQuery } from "@/services/product/productApi"
import { Getsubtotal } from "@/lib/getSubtotal"


export function Cart() {
    
    const cartList = useSelector((state)=> state.cart.cartList)
    let subTotal = 0
 
    const products = cartList.map( item => {      
      const {data} =  useGetProductByIdQuery(item.id)
      const total = data?.price * item.quantity
      const price = data?.price;
      const quantity = item?.quantity;
      const thumbnail = data?.thumbnail
      const title = data?.title
      subTotal += (price * quantity) ;
      return {        
        quantity,
        title,
        price,
        thumbnail,
        total
      }
    })



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
          {products.map((d)=> {
            
            return <>
                      <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                            <div className="shrink-0">
                                <Image
                                    alt={d?.title}
                                    height="64"
                                    src={d?.thumbnail}
                                    width="64"
                                    className="rounded-full"
                                />
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{d?.title}</p>
                                <p className="truncate text-sm text-gray-500 dark:text-gray-400">{d?.price}$ - x{d?.quantity}</p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">${d.total}</div>
                        </div>
                      </li>
            </>
          })}
        </ul>
      </div>
    </Card>)
}

export default Cart