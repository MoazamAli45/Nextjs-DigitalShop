"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
// for client side
import { usePathname } from "next/navigation";
import { CgProfile } from "react-icons/cg";
import { BsBagDash } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { AiOutlineCloseCircle, AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../public/images/logo1.png";

// Styles
import style from "./navbar.module.css";
const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Shop",
    path: "#",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact",
    path: "#",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();

  const toggleMenu = function () {
    console.log("clicked", navRef);
    navRef.current.classList.toggle(style["responsive-mobile"]);
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();

  // console.log(pathname);

  return (
    <div className={style["nav-container"]}>
      <div className={style["nav-left"]}>
        <div className={style.image}>
          <Image src={logo} fill style={{ objectFit: "fill" }} alt="logo" />
        </div>

        <nav className={style["navbar"]} ref={navRef}>
          <AiOutlineCloseCircle className={style.close} onClick={toggleMenu} />
          {links.map((link) => (
            <Link
              href={link.path}
              key={link.name}
              className={`${pathname === link.path ? style.active : " "} ${
                style.navlink
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className={style["nav-right"]}>
        <div className={style["nav-right-socials"]}>
          <CgProfile className={style.icons} />
          <span>Login</span>
        </div>
        <div className={style["nav-right-socials"]}>
          <CiSearch className={style.icons} />
          <span>Search</span>
        </div>
        <div className={style["nav-right-socials"]}>
          <BsBagDash className={style.icons} />
          <span className={style.basket}>Basket </span>
          <span className={style.number}>(0)</span>
        </div>
      </div>
      <div
        className={style.hamburgerIcon}
        onClick={() => {
          toggleMenu();
        }}
      >
        <div className={`${style.bar} ${isOpen ? style.open1 : ""}`} />
        <div className={`${style.bar} ${isOpen ? style.none : ""}`} />
        <div className={`${style.bar} ${isOpen ? style.open2 : ""}`} />
      </div>
    </div>
  );
};

export default Navbar;
