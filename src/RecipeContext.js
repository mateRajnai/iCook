import React, { createContext, useState } from "react";
import Axios from "axios";

export const RecipeContext = createContext();

export const RecipeProvider = (props) => {
  const API_ID = "29f808e6";
  const API_KEY = "172c8533603f02665a8920e3ee1ea944";
  const [query, setQuery] = useState("");

  const search = (userInput) => {
    setQuery(userInput);

    Axios.get(
      `https://api.edamam.com/search?q=${userInput}&app_id=${API_ID}&app_key=${API_KEY}`
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
