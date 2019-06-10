import React from "react";

const SearchInput = ({ searchName, handleSearch }) => {
  return (
    <div>
      filter shown with <input onChange={handleSearch} value={searchName} />
    </div>
  );
};

export default SearchInput;
