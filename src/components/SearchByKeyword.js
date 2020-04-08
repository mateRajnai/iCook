import React, { useContext } from "react";
import { Input } from "antd";
import { RecipeContext } from "../context/RecipeContext";

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
        defaultValue={props.keywordFilter.value}
        onSearch={(value) => handleSearch(value)}
        defaultValue={props.keywordFilter.value}
        enterButton
      />
    </div>
  );
};

export default SearchByKeyword;
