import React from "react";
import bg1 from "@/public/images/bg1.jpg";
import bg2 from "@/public/images/bg2.jpg";
import bg3 from "@/public/images/bg3.jpg";
import bg4 from "@/public/images/bg4.jpg";
import bg5 from "@/public/images/bg-5.jpg";
import bg6 from "@/public/images/bg-6.jpg";
import bg7 from "@/public/images/bg-7.jpg";
import bg8 from "@/public/images/bg-8.jpg";
import style from './blog.module.css'

import Card from "../card/card";
const cards = [
  {
    text: "GameStop to Offer Up to $1 Billion in",
    image: bg1,
  },
  {
    text: "SPAC Called 5G Edge Wants to Go Public",
    image: bg2,
  },
  {
    text: "Yoga Event Helping marginalised Women",
    image: bg3,
  },
  {
    text: "Dual-Drive Storage for Workflows",
    image: bg4,
  },
  {
    text: "Trusted High-Capacity Storage",
    image: bg5,
  },
  {
    text: "Power And Versatility",
    image: bg6,
  },
  {
    text: "WD Blue SATA SSD 2.5” Cased",
    image: bg7,
  },
  {
    text: "Oxygen Digital Shop Online Purchase",
    image: bg8,
  },
  {
    text: "Digital Cmaera shop BD",
    image: bg5,
  },
  {
    text: "High Capacity with Reliability",
    image: bg6,
  },
  {
    text: "5-Year Limited Waranty",
    image: bg7,
  },
  {
    text: "OAyurveda through Practice Yoga",
    image: bg8,
  },
];

const BlogSection = () => {
  return (
    <div className={` ${style["blog-container"]}`}>
      <h3>Latest Posts</h3>

      <div className={style["grid-container"]} data-aos="fade-up">
        {cards.map((card, index) => (
          <Card key={index} text={card.text} image={card.image} />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
