import React, { useContext } from "react";
import { Input } from "antd";
import { RecipeContext } from "../RecipeContext";

const SearchByKeyword = () => {
  const { Search } = Input;
  const { search } = useContext(RecipeContext);

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
