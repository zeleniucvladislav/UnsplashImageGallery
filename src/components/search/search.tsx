import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

import styles from "./search.module.scss";
import RandomBg from "../randomBackground/randomBg";

type Props = {
  onSearch: (query: string) => void;
};

const Search = ({ onSearch }: Props) => {
  const [query, setQuery] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <RandomBg>
      <form onSubmit={onSubmit} className={styles.container}>
        <article className={styles.search_box}>
          <BsSearch className={styles.search_box__icon} />
          <input
            className={styles.search}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search images..."
            required
          />
        </article>
      </form>
    </RandomBg>
  );
};

export default Search;
