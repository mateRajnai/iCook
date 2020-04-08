import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const RecipeContext = createContext();

export const RecipeProvider = (props) => {
  const API_ID = "29f808e6";
  const API_KEY = "172c8533603f02665a8920e3ee1ea944";
  const [queryString, setQueryString] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const search = (searchQuery, filterQuery) => {
    const actualUrl = `https://api.edamam.com/search?q=${searchQuery}&app_id=${API_ID}&app_key=${API_KEY}${filterQuery}`;
    if (actualUrl !== queryString) {
      setLoading(true);
      setRecipes([]);
      setQueryString(actualUrl);
      Axios.get(actualUrl).then((resp) =>
        resp.data.hits.map((data) =>
          setRecipes((prevRecipes) => [...prevRecipes, data.recipe])
        )
      );
    }
  };

  useEffect(() => {
    if (recipes.length > 3) {
      setLoading(false);
    }
  }, [recipes]);

  useEffect(() => {
    if (queryString !== "") {
      Axios.get(queryString).then((resp) =>
        resp.data.hits.map((data) =>
          setRecipes((prevRecipes) => [...prevRecipes, data.recipe])
        )
      );
    }
  }, [queryString]);

  return (
    <RecipeContext.Provider
      value={{
        search,
        recipes,
        loading,
        setLoading,
        selectedRecipe,
        setSelectedRecipe,
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};
