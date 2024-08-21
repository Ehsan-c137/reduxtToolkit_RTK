import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = ({ children }: { children: React.ReactNode }) => {
   return (
      <>
         <ul className="flex items-center justify-between p-4 w-full sticky top-0 bg-gray-500 bg-opacity-50">
            <div className="flex items-center gap-8">
               <li>
                  <Link href={"/"}>Home</Link>
               </li>
               <li>
                  <Link href={"/products"}>products</Link>
               </li>
               <li>
                  <Link href={"/about"}>about</Link>
               </li>
            </div>
            <Link href="/cart" className="p-1 pointer">
               <Image
                  referrerPolicy="no-referrer"
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material-sharp/24/shopping-basket.png"
                  alt="shopping-basket"
               />
            </Link>
         </ul>
         {children}
      </>
   );
};

export default Header;
