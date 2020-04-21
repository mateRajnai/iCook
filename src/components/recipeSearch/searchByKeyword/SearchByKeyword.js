import React, { useContext } from "react";
import { Input } from "antd";
import { RecipeContext } from "../../../context/RecipeContext";
import { SearchContext } from "../../../context/SearchContext";

const SearchByKeyword = (props) => {
  const { Search } = Input;
  const { search } = useContext(RecipeContext);
  const { keywordFilter, setKeywordFilter, prepareFilterQuery } = useContext(
    SearchContext
  );

  const handleSearch = (value) => {
    const keyWordFilter = keywordFilter;
    keyWordFilter.value = value;
    setKeywordFilter(keyWordFilter);
    search(keywordFilter.value, prepareFilterQuery());
  };

  return (
    <div>
      <Search
        placeholder="Search recipes by keyword"
        defaultValue={keywordFilter.value}
        onSearch={(value) => handleSearch(value)}
        enterButton
      />
    </div>
  );
};

export default SearchByKeyword;
