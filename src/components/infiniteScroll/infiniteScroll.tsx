import React, { useEffect, useRef, useCallback } from "react";

type Props = {
  setPage: (page: any) => void;
};

const InfiniteScroll = ({ setPage }: Props) => {
  const loader = useRef(null);

  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setPage((page: number) => page + 1);
      }
    },
    [setPage]
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return <div ref={loader} />;
};

export default InfiniteScroll;
