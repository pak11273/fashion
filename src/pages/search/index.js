import ProductResults from "./../../components/ProductResults";
import React from "react";

const Search = (props) => {
  console.log('p: ', props)
  return (
    <div className="searchPage">
      <ProductResults />
    </div>
  );
};

export default Search;
