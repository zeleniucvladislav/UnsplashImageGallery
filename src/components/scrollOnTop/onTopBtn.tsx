import React, { useState, useEffect } from "react";
import { BsArrowBarUp } from "react-icons/bs";

import styles from "./onTopBtn.module.scss";

const OnTopBtn = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    window.scrollY > 500 ? setVisible(true) : setVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{ opacity: visible ? "100%" : "0%" }}
      className={styles.btn}
    >
      <BsArrowBarUp className={styles.btn_icon} />
    </button>
  );
};

export default OnTopBtn;
