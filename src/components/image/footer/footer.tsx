import React from "react";
import { BsDownload, BsHeartFill } from "react-icons/bs";
import moment from "moment";
import axios from "axios";

import { useModalContext } from "../../../context";
import downloadFile from "../../download/download";

import styles from "./footer.module.scss";

type Props = {
  color: string;
  createdAt: string;
  likes: number;
  downloadUrl: string;
};

const Footer: React.FC<Props> = ({ color, createdAt, likes, downloadUrl }) => {
  const imageFooterBg = color + "4D"; //adding opacity to hex color
  const date = moment(createdAt).format("Do MMMM YYYY");

  const { setModal } = useModalContext();

  const onDownload = () => {
    setModal(true);
    axios({
      url: downloadUrl,
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      downloadFile(res.data, "unsplash.jpg");
    });
    setTimeout(() => {
      setModal(false);
    }, 1500);
  };

  return (
    <article
      style={{ backgroundColor: imageFooterBg }}
      className={styles.image_footer}
    >
      <div className={styles.image_footer__left}>
        <p>{date}</p>
      </div>
      <div className={styles.image_footer__right}>
        <span className={styles.like_wrapper}>
          <BsHeartFill color="#ff6a4d" />
          {likes}
        </span>
        <button className={styles.download_btn} onClick={onDownload}>
          <BsDownload />
        </button>
      </div>
    </article>
  );
};

export default Footer;
