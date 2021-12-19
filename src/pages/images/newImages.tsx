/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { AxiosResponse } from "axios";

import { Error, Image, Loading, InfiniteScroll } from "../../components";
import { getImages } from "../../api/images";

import ImageData from "../../types/imageData";

import styles from "./images.module.scss";

const NewImages = () => {
  const [page, setPage] = useState(1);
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ status: false, message: "" });

  useEffect(() => {
    setLoading(true);
    getImages(page)
      .then((res: AxiosResponse) => {
        setImages([...images, ...res.data]);
        setLoading(false);
      })
      .catch((err) => {
        setError({ status: true, message: err.message });
      });
  }, [page]);

  if (error.status) {
    return <Error message={error.message} />;
  }

  return (
    <div className={styles.images_wrapper}>
      <section className={styles.images}>
        {images.map((img: ImageData, key) => {
          return <Image {...img} key={key} />;
        })}
      </section>
      {loading && <Loading />}
      {!loading && <InfiniteScroll setPage={setPage} />}
    </div>
  );
};

export default NewImages;
