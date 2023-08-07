import "./globals.css";

import { Kumbh_Sans } from "next/font/google";
const kumbh = Kumbh_Sans({ subsets: ["latin"] });

import Header from "@/components/Header";

export const metadata = {
  title: "Frontend Mentor | E-commerce product page",
  description:
    "https://www.frontendmentor.io/challenges/ecommerce-product-page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${kumbh.className} flex flex-col items-center min-h-screen w-screen`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
