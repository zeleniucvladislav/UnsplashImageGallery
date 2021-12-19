import React, { useState, useEffect } from "react";
import { getRandomImage } from "../../api/images";

import styles from "./randomBg.module.scss";

const RandomBg = (props: any) => {
  const [background, setBackground] = useState("");

  useEffect(() => {
    getRandomImage().then((res) => setBackground(res.data.urls.regular));
  }, []);

  return (
    <div
      className={styles.background}
      style={{ backgroundImage: `url(${background})` }}
    >
      {props.children}
    </div>
  );
};

export default RandomBg;
