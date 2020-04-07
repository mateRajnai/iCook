import React, { createContext, useState } from "react";
import Axios from "axios";

export const RecipeContext = createContext();

export const RecipeProvider = (props) => {
  const API_ID = "29f808e6";
  const API_KEY = "172c8533603f02665a8920e3ee1ea944";
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const search = (userInput) => {
    if (userInput !== query) {
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

  console.log(recipes);

  return (
    <RecipeContext.Provider value={[{ search }]}>
      {props.children}
    </RecipeContext.Provider>
  );
};
