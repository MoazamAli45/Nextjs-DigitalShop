import React, { useRef } from "react";
import style from "./corousel.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

// Arrows
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";

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

//  Customized arrows
function NextIcon(props) {
  const { onClick } = props;
  return (
    <div className={style.next} onClick={onClick}>
      <AiOutlineRight className={style.nextIcon} />
    </div>
  );
}

function PrevIcon(props) {
  const { onClick } = props;
  return (
    <div
      className={style.prev}
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <AiOutlineLeft className={style.prevIcon} />
    </div>
  );
}

const Corousel = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // Arrow can also be used in properties
    // nextArrow: (
    //   <NextIcon
    //     onClick={() => {
    //       sliderRef.current;
    //       return sliderRef.current?.slickNext();
    //     }}
    //   />
    // ),
    // prevArrow: <PrevIcon onClick={() => sliderRef.current?.slickPrev()} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };
  // console.log(sliderRef);
  return (
    <div className={style["corousel-container"]}>
      <div className={style["corousel-head"]}>
        <div className={style.content}>
          <h2>New Arrival Products</h2>
          <h5>There are many variations passages</h5>
        </div>
        <div className={style.line} />
        <div className={style["corouselHeadBtn"]}>
          <PrevIcon onClick={() => sliderRef.current?.slickPrev()} />
          <NextIcon onClick={() => sliderRef.current?.slickNext()} />
        </div>
      </div>

      <Slider
        {...settings}
        className={style.slider}
        data-aos="fade-up"
        ref={sliderRef}
      >
        {shopCards.map((card, index) => (
          <div className={style.corousel} key={index}>
            <ShopCard
              image1={card.image1}
              image2={card.image2}
              sales={card.sales}
              head={card.head}
              text={card.text}
              price={card.price}
              discount={card.discount}
              key={index}
              width={"24rem"}
              right={"6rem"}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Corousel;
