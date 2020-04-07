import React, { useContext } from "react";
import { Input } from "antd";
import { RecipeContext } from "../context/RecipeContext";

const SearchByKeyword = () => {
  const SEARCH_FUNCTION_INDEX = 0;
  const { Search } = Input;
  const { search } = useContext(RecipeContext)[SEARCH_FUNCTION_INDEX];

  return (
    <div>
      <Search
        placeholder="Search recipes by keyword"
        onSearch={(value) => search(value)}
        enterButton
      />
    </div>
  );
};

export default SearchByKeyword;
