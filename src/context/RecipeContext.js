import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const RecipeContext = createContext();

export const RecipeProvider = (props) => {
  const API_ID = "29f808e6";
  const API_KEY = "172c8533603f02665a8920e3ee1ea944";
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const search = (userInput) => {
    if (userInput !== query) {
      setLoading(true);
      setRecipes([]);
      setQuery(userInput);
      Axios.get(
        `https://api.edamam.com/search?q=${userInput}&app_id=${API_ID}&app_key=${API_KEY}`
      ).then((resp) =>
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
