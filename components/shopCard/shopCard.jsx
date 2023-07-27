import React from "react";
import style from "./shopCard.module.css";
import Image from "next/image";

import { PiBagLight } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

const ShopCard = (props) => {
  const { image1, image2, head, text, discount, price } = props;

  const sale = props.sales || false;
  const width = props.width || "";
  const marginRight = props.right || "";

  return (
    <>
      <div
        className={style["shop-card"]}
        style={{ width: `${width}`, 'margin-right': `${marginRight}  ` }}
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
          <div className={style.image1}>
            <Image src={image1} alt={image1} fill />
          </div>
          <div className={style.image2}>
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
