import React from "react";
import style from "./shopCards.module.css";
import ShopCard from "../shopCard/shopCard";

import camera from "../../public/imagesShop/camera.jpg";
import headphone from "../../public/imagesShop/headphone.jpg";
import watch from "../../public/imagesShop/watch.jpg";
import eyeband from "../../public/imagesShop/eyeband.jpg";
import fan from "../../public/imagesShop/fan.jpg";
import headphone1 from "../../public/imagesShop/headphone1.jpg";
import iphone from "../../public/imagesShop/iphone.jpg";
import laptop from "../../public/imagesShop/laptop.jpg";
import plane from "../../public/imagesShop/plane.jpg";
import speaker1 from "../../public/imagesShop/speaker1.jpg";
import speaker2 from "../../public/imagesShop/speaker2.jpg";
import videogame from "../../public/imagesShop/videogame.jpg";

const shopCards = [
  {
    image1: camera,
    image2: plane,
    sales: false,
    head: "Momentum Phone",
    text: "Game Console Control ...",
    price: "$520",
    discount: "",
  },
  {
    image1: plane,
    image2: videogame,
    sales: true,
    head: "Rocky Mountain",
    text: "Game Console Control ...",
    price: "$340",
    discount: "$360",
  },
  {
    image1: headphone1,
    image2: headphone,
    sales: true,
    head: "Multiroom 360",
    text: "Game Console Control ...",
    price: "$280",
    discount: "$320",
  },
  {
    image1: laptop,
    image2: fan,
    sales: false,
    head: "MacBook Air",
    text: "Game Console Control ...",
    price: "$600",
    discount: "",
  },
  {
    image1: videogame,
    image2: laptop,
    sales: true,
    head: "Sony Dualsense",
    text: "Game Console Control ...",
    price: "$300",
    discount: "$320",
  },
  {
    image1: speaker1,
    image2: speaker2,
    sales: false,
    head: "Dynaudio Speaker",
    text: "Game Console Control ...",
    price: "$280",
    discount: "",
  },
  {
    image1: eyeband,
    image2: plane,
    sales: false,
    head: "Gore Wear C7",
    text: "Game Console Control ...",
    price: "$250",
    discount: "",
  },
  {
    image1: watch,
    image2: iphone,
    sales: false,
    head: "Apple Watch 6",
    text: "Game Console Control ...",
    price: "$360",
    discount: "",
  },
];
const ShopCards = () => {
  return (
    <>
      {/*     Cards */}
      <div className={`${style.container} ${style["card-container"]}`}>
        <h3> Best Seller Products</h3>
        <h5> There are many variations passages</h5>
        <div className={style["grid-container"]} data-aos="fade-up">
          {shopCards.map((card) => (
            <ShopCard
              image1={card.image1}
              image2={card.image2}
              sales={card.sales}
              head={card.head}
              text={card.text}
              price={card.price}
              discount={card.discount}
              key={card.head}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopCards;
