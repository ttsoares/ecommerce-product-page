"use client";

import BMenu from "./BurgerMenu";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useAtom } from "jotai";
import { cartAtom } from "@/app/page";

import CartElm from "./CartElm";

export const MENU_LIST = [
  { text: "Collections", href: "/collections" },
  { text: "Men", href: "/men" },
  { text: "Women ", href: "/women" },
  { text: "About", href: "/about" },
  { text: "Contact", href: "/contact" },
];

//------------------------
const Header = () => {
  const [headerCart, setHeaderCart] = useAtom(cartAtom);

  const [showCart, setShowCart] = useState(false);

  function removeItem(index) {
    const newCart = headerCart.filter((elm, ind) => ind !== index);
    setHeaderCart(newCart);
  }

  function checkOut() {
    setShowCart(false);
    setHeaderCart([]);
  }

  return (
    <header className="flex w-full md:w-[80%] h-24 md:mx-auto items-center justify-between border-b-2 border-gray-200">
      <div className="flex items-center ">
        {/* Buger menu */}
        <div className="block md:hidden">
          <BMenu />
        </div>
        <div className="w-36 md:w-48 h-8 items-center flex ">
          <Link href={"/"}>
            <Image src={"/logo.svg"} width={150} height={30} alt="logo" />
          </Link>
        </div>
        <nav className="hidden md:flex h-20 ">
          {MENU_LIST.map((item, index) => (
            <div key={index} className="flex flex-col justify-evenly">
              <div className="w-20 relative text-center">
                <div className="peer w-20 h-6 text-gray-400">
                  <Link href={item.href}>{item.text}</Link>
                </div>
                <div className="absolute top-6 hidden peer-hover:block w-20 h-1 bg-orange mt-8"></div>
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* card & avatar */}
      <div className="flex items-center ">
        <div className="px-10 relative" onClick={() => setShowCart(!showCart)}>
          {headerCart.length > 0 && (
            <p className="absolute -top-2 right-[30px] text-sm text-white px-[9px] bg-orange rounded-lg">
              {headerCart.length}
            </p>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          {showCart &&
            (headerCart.length === 0 ? (
              <div className="flex flex-col w-[360px] md:w-96 h-80 md:h-72 bg-white absolute top-20 -left-[201px]  md:top-12 md:-right-24 shadow-xl rounded-xl">
                <div className="font-bold text-left h-12 flex my-auto text-lg  border-b-2 border-gray-200">
                  <p className="ml-3">Cart</p>
                </div>

                <div className="h-32 w-full flex justify-center items-center">
                  <p className="font-bold text-xl -mt-12 text-gray-400">
                    Your cart is empty
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col w-[360px] md:w-96 h-80 md:h-72 bg-white absolute top-20 -left-[201px]  md:top-12 md:-right-24 shadow-xl rounded-xl">
                <div className="flex flex-col w-full">
                  <div className="font-bold items-center text-left h-12 flex my-auto text-lg mb-3  border-b-2 border-gray-200">
                    <p className="ml-3">Cart</p>
                  </div>

                  {/* map with all cart objects */}
                  {/* { pID: id, quant: quantity } */}
                  {headerCart.map((prod, index) => (
                    <div key={index} className="p-3">
                      <CartElm
                        cartProd={prod}
                        removeItem={removeItem}
                        index={index}
                      />
                    </div>
                  ))}
                  <button
                    className="flex mx-auto w-11/12 h-14 bg-orange px-6 py-3 rounded-lg text-white mb-4  font-bold"
                    onClick={checkOut}
                  >
                    <p className="text-center mx-auto">Checkout</p>
                  </button>
                </div>
              </div>
            ))}
        </div>
        <div
          className="ring-2 ring-orange rounded-full mr-5"
          onClick={() => setShowCart(!showCart)}
        >
          <Image
            src={"/image-avatar.png"}
            alt="avatar"
            width={35}
            height={35}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
