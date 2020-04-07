import React, { Component } from "react";
import { Input } from "antd";

const SearchByKeyword = () => {
  const { Search } = Input;

  return (
    <div>
      <Search
        placeholder="Search recipes by keyword"
        onSearch={(value) => console.log(value)}
        enterButton
      />
    </div>
  );
};

export default SearchByKeyword;
