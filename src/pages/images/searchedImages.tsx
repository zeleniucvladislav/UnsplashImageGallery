/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from "react";
import { AxiosResponse } from "axios";

import { Error, Image, Loading, InfiniteScroll } from "../../components";

import { getSearchedImages } from "../../api/images";

import ImageData from "../../types/imageData";

import styles from "./images.module.scss";

type Props = {
  query: string;
};

const SearchedImages = ({ query }: Props) => {
  const [page, setPage] = useState(1);
  const [images, setImages] = useState<{ list: any[]; total_pages: number }>({
    list: [],
    total_pages: 0,
  });
  const [loading, setLoading] = useState(true);
  const [imageQuery, setImageQuery] = useState(query);
  const [error, setError] = useState({ status: false, message: "" });

  const fetchImages = useCallback(
    (scrollFetch: boolean) => {
      setLoading(true);
      getSearchedImages(page, query)
        .then((res: AxiosResponse) => {
          const result = [...images.list, ...res.data.results];
          scrollFetch
            ? setImages({ ...images, list: result })
            : setImages({ total_pages: res.data.total_pages, list: result });

          setLoading(false);
        })
        .catch((err) => {
          setError({ status: true, message: err.message });
        });
    },
    [page, imageQuery]
  );

  useEffect(() => {
    //useEffect for initial image load and after query change
    setLoading(true);
    fetchImages(false);
  }, [imageQuery]);

  useEffect(() => {
    //reset values when query change
    if (query !== imageQuery) {
      setPage(1);
      setImages({ list: [], total_pages: 0 });
      setImageQuery(query);
    }
  }, [query]);

  useEffect(() => {
    //infinite scroll fetch images
    if (page > 1) {
      setLoading(true);
      fetchImages(true);
    }
  }, [page]);

  if (error.status) {
    return <Error message={error.message} />;
  }
  if (!loading && images.list.length < 1) {
    return <Error message="No images found" />;
  }

  const toggleInfiniteScroll = !loading && images.total_pages > page;

  return (
    <div className={styles.images_wrapper}>
      <section className={styles.images}>
        {images.list.map((img: ImageData, key) => {
          return <Image {...img} key={key} />;
        })}
      </section>
      {loading && <Loading />}
      {toggleInfiniteScroll && <InfiniteScroll setPage={setPage} />}
    </div>
  );
};

export default SearchedImages;
