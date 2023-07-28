import React, { useEffect, useState } from "react";
import style from "./shopCard.module.css";
import Image from "next/image";

import { PiBagLight } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

const ShopCard = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const { image1, image2, head, text, discount, price } = props;
  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const mobileRegex =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

    setIsMobile(mobileRegex.test(userAgent));
    console.log(mobileRegex.test(userAgent), "isMobile");
  }, []);

  const sale = props.sales || false;
  let width = props.width || "";
  let mobileWidth='';
  let marginRight='';

  if (isMobile && props.width) {
    width = "21rem";
   mobileWidth = "18rem";
    marginRight="4rem";
  }

  return (
    <>
      <div
        className={style["shop-card"]}
        style={{ width: `${width}`, "margin-right": `${marginRight} !important ` }}
      >
        <div className={style.image}>
          {sale && <span className={style.sale}>Sale!</span>}
          <div className={style.icons}>
            <span className={style.icon}>
              <AiOutlineEye />
            </span>
            <span className={style.icon}>
              <AiOutlineHeart />
            </span>
          </div>
          <div className={style.image1}  style={{ width: `${mobileWidth}`}}>
            <Image src={image1} alt={image1} fill />
          </div>
          <div className={style.image2}  style={{ width: `${mobileWidth}`}}>
            <Image src={image2} alt={image2} fill />
          </div>
        </div>
        {/*   Card content */}
        <div className={style.content}>
          <div className={style.text}>
            <h4>{head}</h4>
            <p>{text}</p>
          </div>
          <div className={style.prices}>
            {sale && <s>{discount}</s>}
            <h4>{price}</h4>
          </div>
        </div>
        <button className={style.btn}>
          <span>
            {" "}
            Add to Cart{" "}
            <span className={style.btnIcon}>
              <PiBagLight />
            </span>
          </span>
        </button>
      </div>
    </>
  );
};

export default ShopCard;
