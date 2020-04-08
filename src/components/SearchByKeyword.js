import React, { useContext } from "react";
import { Input } from "antd";
import { RecipeContext } from "../RecipeContext";

const SearchByKeyword = (props) => {
  const { Search } = Input;
  const { search } = useContext(RecipeContext);

  const handleSearch = (value) => {
    const keyWordFilter = props.keywordFilter;
    keyWordFilter.value = value;
    props.setKeyword(keyWordFilter);
    search(props.keywordFilter.value, props.prepareFilterQuery());
  };

  return (
    <div>
      <Search
        placeholder="Search recipes by keyword"
        onSearch={(value) => handleSearch(value)}
        enterButton
      />
    </div>
  );
};

export default SearchByKeyword;
