import React from "react";
import style from "./hero.module.css";
import Image from "next/image";
import iphone from "../../public/images/iphone.png";
import headphone from "../../public/images/headphone.png";
import laptop from "../../public/images/laptop.png";
import plane from "../../public/images/plane.png";
import handfree from "../../public/images/handfree.png";
import watch from "../../public/images/watch.png";
import speaker from "../../public/images/speaker.png";
const Hero = () => {
  return (
    <div className={style["hero-container"]}>
      <div className={style["hero-card-top"]}>
        <div
          className={`${style["hero-card-1"]} ${style["hero-card"]}`}
          data-aos="fade-up"
        >
          <div className={style["card-text"]}>
            <h3>Blast Past Fast.</h3>
            <h2>
              IPhone 12 Pro <br />
              It&apos;s A Leap Year.
            </h2>
            <button className={style.btn1}>Shop By Category</button>
          </div>
          <div className={style["card-image-1"]}>
            <Image src={iphone} alt="iphone" fill />
          </div>
        </div>
        <div
          className={`${style["hero-card-2"]} ${style["hero-card"]}`}
          data-aos="fade-up"
        >
          <div className={style["card-image-2"]}>
            <Image src={headphone} alt="iphone" fill />
          </div>
          <div className={`${style["card-text-2"]} ${style["card-text"]}`}>
            <h3>Noise Cancelling</h3>
            <h2>
              Beats Solo <br /> Wireless-Pro
            </h2>
            <button className={style.btn2}>Shop By Category</button>
          </div>
        </div>

        {/* card 3 */}
        <div
          className={`${style["hero-card-3"]} ${style["hero-card"]}`}
          data-aos="fade-up"
        >
          <div className={style["card-text"]}>
            <h3>Macbook Pro</h3>
            <h2>
              More Power.
              <br /> Wakes Instantly.
            </h2>
            <button className={style.btn3}>Shop By Category</button>
          </div>
          <div className={style["card-image-3"]}>
            <Image src={laptop} alt="laptop" fill />
          </div>
        </div>
      </div>

      {/*    Bottom cards */}
      <div className={style["hero-card-bottom"]}>
        <div
          className={`${style["hero-card-4"]} ${style["hero-card"]}`}
          data-aos="fade-up"
        >
          <div className={style["card-text"]}>
            <h3>Blast Past Fast.</h3>
            <h2>
              IPhone 12 Pro <br />
              It&apos;s A Leap Year.
            </h2>
            <button className={style.btn4}>Shop By Category</button>
          </div>
          <div className={style["card-image-1"]}>
            <Image src={speaker} alt="speaker" fill />
          </div>
        </div>
        <div className={`${style["hero-card-5"]}`}>
          <div className={`${style["hero-card-5A"]} `} data-aos="fade-up">
            <div className={style["card-text-5"]}>
              <h3>Quadcopter</h3>
              <h2>
                DJI Mavic Mini
                <br />
                Drone FlyCam
              </h2>
              <button className={style.btn5A}>Shop By Category</button>
            </div>
            <div className={style["card-image-5A"]}>
              <Image src={plane} alt="plane" fill />
            </div>
          </div>
          <div className={`${style["hero-card-5B"]} `} data-aos="fade-up">
            <div className={style["card-text"]}>
              <h3>wear gadgets</h3>
              <h2>
                Wear Gadgets
                <br />
                Stay Creative
              </h2>
              <button className={style.btn5B}>Shop By Category</button>
            </div>
            <div className={style["card-image-5B"]}>
              <Image src={watch} alt="watch" fill />
            </div>
          </div>
        </div>

        {/* card 6 */}
        <div
          className={`${style["hero-card-6"]} ${style["hero-card"]}`}
          data-aos="fade-up"
        >
          <div className={style["card-text"]}>
            <h3>Earphone</h3>
            <h2>
              Stay Connect.
              <br /> Stay Creative.
            </h2>
            <button className={style.btn6}>Shop By Category</button>
          </div>
          <div className={style["card-image-3"]}>
            <Image src={handfree} alt="handfree" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
