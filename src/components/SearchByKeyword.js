import React from "react";
import { Input } from "antd";
import Axios from "axios";

const SearchByKeyword = () => {
  const { Search } = Input;

  const API_ID = "29f808e6";
  const API_KEY = "172c8533603f02665a8920e3ee1ea944";

  const searchRecipes = (value) => {
    Axios.get(
      `https://api.edamam.com/search?q=${value}&app_id=${API_ID}&app_key=${API_KEY}`
    ).then((resp) => {
      console.log(resp);
    });
  };

  return (
    <div>
      <Search
        placeholder="Search recipes by keyword"
        onSearch={(value) => searchRecipes(value)}
        enterButton
      />
    </div>
  );
};

export default SearchByKeyword;
