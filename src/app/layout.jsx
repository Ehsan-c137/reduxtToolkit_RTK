import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./storeProvider";
import Header from "../components/header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: "shop",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body
            className={`${inter.className} min-h-[100vh] bg-white overflow-x-hidden`}
         >
            <StoreProvider>
               <Header>{children}</Header>
            </StoreProvider>
         </body>
      </html>
   );
}
