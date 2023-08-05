"use client";

import Image from "next/image";

import { useState, useRef } from "react";

import { atom, useAtom } from "jotai";
export const cartAtom = atom([]);

import Modal from "@/components/Modal";

export const PROD = {
  id: 123,
  imgs: [
    "image-product-1.jpg",
    "image-product-2.jpg",
    "image-product-3.jpg",
    "image-product-4.jpg",
  ],
  tnails: [
    "image-product-1-thumbnail.jpg",
    "image-product-2-thumbnail.jpg",
    "image-product-3-thumbnail.jpg",
    "image-product-4-thumbnail.jpg",
  ],
  description:
    "These low-profile skeakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll wistand everything the weather can offer.",
  title: "Fall Limited Edition Sneakers",
  price: 250,
  discount: 0.5,
};

//-------------------------------
export default function Home() {
  const [prod_disp, setProd_disp] = useState(PROD.imgs[0]);
  const [showing, setShowing] = useState(0);
  const quantity = useRef(0);
  const [render, setRender] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [cart, setCart] = useAtom(cartAtom);

  function changeDisp(index) {
    setProd_disp(PROD.imgs[index]);
    setShowing(index);
  }

  function increment() {
    quantity.current = quantity.current + 1;
    setRender(!render);
  }

  function decrement() {
    quantity.current = quantity.current - 1;
    if (quantity.current < 0) {
      quantity.current = 0;
    } else {
      setRender(!render);
    }
  }

  function addToCard() {
    if (quantity.current > 0) {
      const ProdObj = { pID: PROD.id, quant: quantity.current };
      const arr = [...cart];
      arr.push(ProdObj);
      setCart(arr);
      quantity.current = 0;
    }
  }

  function modalShow() {
    setShowModal(!showModal);
  }

  return (
    <main className="flex w-[80%] min-h-screen flex-col items-center">
      <div className="flex mt-24 border-2 border-green-500 w-[90%] h-[600px]">
        {/* left */}
        <div className="flex flex-col w-1/2">
          <div className="m-5" onClick={modalShow}>
            <Image
              src={`/${prod_disp}`}
              alt="Product"
              width={420}
              height={500}
              className="rounded-xl"
            />
          </div>
          <div className="flex ml-4">
            {PROD.tnails.map((img, index) => (
              <Image
                key={index}
                src={`/${img}`}
                alt="tubmnail"
                width={100}
                height={100}
                className={`${
                  showing === index
                    ? "border-4 border-orange brightness-150"
                    : ""
                } m-1 rounded-2xl hover:brightness-125`}
                onClick={() => changeDisp(index)}
              />
            ))}
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col w-1/2 border-2 border-blue-600 p-6">
          <p className="text-orange font-bold mt-12">SNEAKER COMPANY</p>
          <h1 className="text-5xl font-bold mt-5">{PROD.title}</h1>
          <p className="text-gray-400 mt-7">{PROD.description}</p>
          <h2 className="text-2xl font-bold mt-7">
            {`$${PROD.price * PROD.discount}`}
            <span className="ml-4 text-orange text-sm font-bold p-2 bg-p_orange rounded-md">
              {`${PROD.discount * 100}%`}
            </span>
          </h2>
          <p className="text-gray-400 font-bold line-through">{`$${PROD.price}`}</p>
          <div className="flex mt-10">
            <div className="flex w-32 bg-gray-300 rounded-lg items-center justify-between mr-8">
              <div className="p-3" onClick={decrement}>
                <Image
                  src={"/icon-minus.svg"}
                  alt="minus"
                  width={11}
                  height={8}
                />
              </div>
              {quantity.current}
              <div className="p-3" onClick={increment}>
                <Image
                  src={"/icon-plus.svg"}
                  alt="plus"
                  width={11}
                  height={8}
                />
              </div>
            </div>
            <button
              className="bg-orange px-10 py-4 text-white rounded-xl flex"
              onClick={addToCard}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              Add to card
            </button>
          </div>
        </div>
      </div>
      {showModal && <Modal modalShow={modalShow} />}
    </main>
  );
}
