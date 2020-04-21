import React from "react";
import SearchByKeyword from "./searchByKeyword/SearchByKeyword";
import RecipeFilter from "./filtering/RecipeFilter";

const RecipeSearch = () => {
  return (
    <React.Fragment>
      <SearchByKeyword />
      <RecipeFilter />
    </React.Fragment>
  );
};

export default RecipeSearch;
