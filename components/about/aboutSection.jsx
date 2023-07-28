import React from "react";
import style from "./aboutSection.module.css";
import aboutImg from "@/public/images/about.png";
import Image from "next/image";
const AboutSection = () => {
  return (
    <div className={style["about-section"]}>
      <div className={style["about-section-left"]} data-aos="fade-up">
        <h3 className={style.welcome}>Welcome To Phlox</h3>
        <h1 className={style["about-section-title"]}>Who We Are ?</h1>
        <div className={style.text}>
          <p>
            When, while the lovely valley teems with vapour around me, and the
            meridian sun strikes the upper surface of the impenetrable foliage
            of my trees, and but a few stray
          </p>{" "}
          <p>
            gleams steal into the inner sanctuary, I throw myself down among the
            tall grass by the trickling stream; and, as I lie close to the
            earth, a thousand unknown plants are noticed by me .{" "}
          </p>{" "}
          <p>
            {" "}
            when I hear the buzz of the little world among the stalks, and grow
            familiar with the countless indescribable forms of the insects and
            flies, then I feel the presence .
          </p>
        </div>
        <button className={style["about-section-btn"]}>Contact us</button>
      </div>
      <div className={style["about-image"]} data-aos="fade-right">
        <Image
          src={aboutImg}
          fill
          alt="about"
          priority
          sizes="(max-width:600px) 100vw, 540px"
        />
      </div>
    </div>
  );
};

export default AboutSection;
