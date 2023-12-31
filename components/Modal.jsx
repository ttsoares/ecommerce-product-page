import { PROD } from "@/app/page";
import Image from "next/image";
import { useState, useRef } from "react";

import close from "/public/icon-close.svg";
import next from "/public/icon-next.svg";
import previous from "/public/icon-previous.svg";

//-------------------------------------------
const Modal = ({ modalShow }) => {
  const [prod_disp, setProd_disp] = useState(PROD.imgs[0]);

  const showing = useRef(0);

  function changeDisp(index) {
    setProd_disp(PROD.imgs[index]);
    showing.current = index;
  }

  function increment() {
    showing.current = showing.current + 1;
    if (showing.current > PROD.imgs.length - 1) showing.current = 0;
    setProd_disp(PROD.imgs[showing.current]);
  }

  function decrement() {
    showing.current = showing.current - 1;
    if (showing.current < 0) showing.current = PROD.imgs.length - 1;
    setProd_disp(PROD.imgs[showing.current]);
  }

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-500/80 ">
      <div className="relative w-1/3  mx-auto ">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-transparent outline-none focus:outline-none">
          {/*body*/}
          <div className="absolute -top-[300px] flex flex-auto align-middle justify-center flex-col">
            <div className="relative flex">
              <div
                className="flex absolute -top-10 right-[10px] w-7 h-7"
                onClick={modalShow}
              >
                <Image src={close} alt="close" width={20} height={20} />
              </div>

              <div
                onClick={decrement}
                className="mt-48 -mr-5 z-10 w-10 h-10 bg-white flex items-center justify-center rounded-full hover:text-orange"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="3.0"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </div>

              <Image
                src={`/${prod_disp}`}
                alt="Product"
                width={420}
                height={500}
                className="rounded-xl"
              />

              <div
                onClick={increment}
                className="mt-48 -ml-5 z-10 w-10 h-10 bg-white flex items-center justify-center rounded-full hover:text-orange"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="3.0"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>

            <div className="flex items-center justify-center ">
              {PROD.tnails.map((img, index) => (
                <div
                  key={index}
                  className="w-20 h-20 flex items-center justify-center pt-5 mx-2 my-2"
                >
                  <Image
                    src={`/${img}`}
                    alt="tubmnail"
                    width={100}
                    height={100}
                    className={`${
                      showing.current === index
                        ? "border-4 border-orange brightness-150"
                        : ""
                    } m-1 rounded-xl hover:brightness-125`}
                    onClick={() => changeDisp(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
