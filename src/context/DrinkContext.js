import React, { createContext, useState } from "react";
import axios from "axios";

export const DrinkContext = createContext();

export const DrinkContextProvider = (props) => {
  const [randomDrink, setRandomDrink] = useState(null);

  const getRandomDrink = () => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => setRandomDrink(response.data.drinks[0]));
  };

  return (
    <DrinkContext.Provider value={{ randomDrink, getRandomDrink }}>
      {props.children}
    </DrinkContext.Provider>
  );
};
