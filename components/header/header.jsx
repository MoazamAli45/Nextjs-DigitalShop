"use client";

import React from "react";
import style from "./header.module.css";
import HugIcon from "../../public/svgs/HugIcon";
import { FiPhoneCall } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import Navbar from "./../navbar/navbar";
const Header = () => {
  return (
    <>
      <div
        className={style.header}
        data-aos="fade-down"
      >
        <div className={`${style.container}  ${style["header-container"]}`}>
          <div className={style["header-left"]}>
            <HugIcon />
            <p>World&apos;s Fastest Online Shopping Destination</p>
          </div>
          <div className={style["header-right"]}>
            <div className={style.socials}>
              <FiPhoneCall className={style.icon} />
              <span>088-888-8888</span>
            </div>
            <div className={style.socials}>
              <CiMail className={style.icon} />
              <span>info@phlox.pro</span>
            </div>
          </div>
        </div>
      </div>
      <Navbar data-aos="fade-left" />
    </>
  );
};

export default Header;
