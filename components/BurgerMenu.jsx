"use client";

import { slide as Menu } from "react-burger-menu";

import Link from "next/link";

import { MENU_LIST } from "./Header";

const HamburgerMenu = () => (
  <div className="relative p-2 text-black">
    <Menu
      customBurgerIcon={<HamburgerIcon />}
      width={"auto"}
      className="left-0 top-0 text-black"
    >
      <div className="w-full h-10"></div>
      <div className="mt-5 font-bold">
        {MENU_LIST.map((item, index) => (
          <div key={index} className="mb-5">
            <Link onClick={() => ctx.toggleMenu()} href={item.href}>
              {item.text}
            </Link>
          </div>
        ))}
      </div>
    </Menu>
  </div>
);

const HamburgerIcon = () => (
  <div>
    <svg
      className="w-7 h-7"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </div>
);

const BMenu = () => {
  return (
    <nav className="">
      <div className="flex">
        <HamburgerMenu />
      </div>
      <div></div>
    </nav>
  );
};

export default BMenu;
