"use client";

import { slide as Menu } from "react-burger-menu";
import styles from "./bmStyles.module.css";

const HamburgerMenu = () => (
  <div className={styles.hamburger}>
    <Menu
      customBurgerIcon={<HamburgerIcon />}
      width={"auto"}
      className={styles.hamburgerPosition}
    >
      <div>
        <div>Collections</div>
        <div>Men</div>
        <div>Women</div>
        <div>About</div>
        <div>Contact</div>
      </div>
    </Menu>
  </div>
);

const HamburgerIcon = () => (
  <div>
    <svg
      className={styles.iconStyle}
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
    <nav className={styles.headerNav}>
      <div className={styles.headerSubNav}>
        <HamburgerMenu />
      </div>
      <div></div>
    </nav>
  );
};

export default BMenu;
