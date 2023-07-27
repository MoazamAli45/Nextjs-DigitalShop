"use client";

import React, { useState } from "react";
import style from "./card.module.css";
import { HiArrowLongRight } from "react-icons/hi2";
// import bg1 from "../../public/images/bg1.jpg";
import Image from "next/image";

const Card = (props) => {
  const { text, image } = props;
  return (
    <div className={style.card}>
      <Image
        src={image}
        alt="bg"
        fill
        className={style.image}
        style={{ opacity: "0.2" }}
        //    backgoundImage:'linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))
      />
      <p className={style.date}>.April 24, 2021</p>
      <h4 className={style.content}>{text}</h4>
      <div className={style.line}></div>

      <p className={style.read}>
        <span>Read More</span> <HiArrowLongRight />
      </p>
    </div>
  );
};

export default Card;
