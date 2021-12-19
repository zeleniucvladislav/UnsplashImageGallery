import React, { useState } from "react";
import { ModalContext } from "../context";
import { Search } from "../components";

import Modal from "../components/modal/modal";
import SearchedImages from "./images/searchedImages";
import NewImages from "./images/newImages";

const Homepage = () => {
  const [modal, setModal] = useState(false);
  const [query, setQuery] = useState("");

  const onSearch = (searchQuery: string) => {
    setQuery(searchQuery);
  };

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {modal && <Modal text="Download started! This will take a while." />}
      <Search onSearch={onSearch} />
      {query.length > 0 ? <SearchedImages query={query} /> : <NewImages />}
    </ModalContext.Provider>
  );
};

export default Homepage;
