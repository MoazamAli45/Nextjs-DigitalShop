import React, { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";
import style from "./ScrollToTop.module.css";

 const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const goToTopHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return isVisible ? (
    <div className={style["scroll-top"]} onClick={goToTopHandler}>
      <span>
        <BsArrowUp className={style.icon} />
      </span>
    </div>
  ) : null;
};

export default ScrollToTop;