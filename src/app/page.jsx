import Image from "next/image";
import Link from "next/link";

export default function Home() {
   return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link href="/products">Products</Link>
         </button>
      </main>
   );
}
