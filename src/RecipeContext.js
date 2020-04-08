import React, { createContext } from "react";
import Axios from "axios";

export const RecipeContext = createContext();

export const RecipeProvider = (props) => {
  const API_ID = "29f808e6";
  const API_KEY = "172c8533603f02665a8920e3ee1ea944";

  const search = (searchQuery, filterQuery = "") => {
    console.log(
      `https://api.edamam.com/search?q=${searchQuery}&app_id=${API_ID}&app_key=${API_KEY}${filterQuery}`
    );
    Axios.get(
      `https://api.edamam.com/search?q=${searchQuery}&app_id=${API_ID}&app_key=${API_KEY}${filterQuery}`
    ).then((resp) => {
      console.log(resp);
    });
  };

  return (
    <RecipeContext.Provider value={{ search }}>
      {props.children}
    </RecipeContext.Provider>
  );
};
