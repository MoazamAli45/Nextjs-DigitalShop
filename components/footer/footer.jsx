import React from "react";
import logo from "../../public/images/logo1.png";
import style from "./footer.module.css";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className={style.container} data-aos="fade-up">
        <div className={style["footer-box"]}>
          <h5> Sign Up Newsletter & Promotions!</h5>
          <div className={style.headings}>
            <h2> Get 25% Discount</h2>
            <h3>On Your Next Purchase </h3>
          </div>
          <div className={style["footer-textfield"]}>
            <input type="text" placeholder="Enter your E-Mail" />
            <button>Get Started</button>
          </div>
        </div>

        {/*    Footer */}

        <footer>
          <div className={style["footer-top"]}>
            <div className={style["footer-image"]}>
              <Image
                src={logo}
                fill
                // layout="responsive"
                // sizes="2rem"
                alt="logo"
                data-aos="fade-right"
              />
            </div>
            <div className={style["footer-right"]}>
              <div className={style["footer-links"]} data-aos="fade-left">
                <h5>Visit Link</h5>
                <ul>
                  <li>Shop</li>
                  <li>Priacy</li>
                  <li>Terms & Conditions</li>
                </ul>
              </div>
              <div className={style["footer-links"]} data-aos="fade-left">
                <h5>Company</h5>
                <ul>
                  <li>Home </li>
                  <li>About us</li>
                  <li>Contact us</li>
                </ul>
              </div>
              <div className={style["footer-links"]} data-aos="fade-left">
                <h5>Contact</h5>
                <ul>
                  <li>+99 (0) 101 0000 888</li>
                  <li>Info@yourdomain.com</li>
                </ul>
              </div>
              <div className={style["footer-links"]} data-aos="fade-left">
                <h5>Address</h5>
                <ul>
                  <li>
                    Patricia Amedee 4401 Waldeck Street Grapevine Nashville, Tx
                    76051
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={style["footer-bottom"]}>
            <p>© 2023 By Averta. All rights reserved.</p>
            <div className={style["footer-icons"]}>
              <BsInstagram className={style.insta} />
              <FaLinkedinIn className={style.linkedin} />
              <FaFacebookF className={style.fb} />
              <AiOutlineTwitter className={style.twitter} />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
