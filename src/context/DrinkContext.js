import React, { createContext, useState } from "react";
import axios from "axios";

export const DrinkContext = createContext();

export const DrinkContextProvider = (props) => {
  const [randomDrink, setRandomDrink] = useState(null);

  const getRandomDrink = () => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => handleIngredients(response.data.drinks[0]))
      .then((processedData) => setRandomDrink(processedData));
  };

  const handleIngredients = (drink) => {
    if (drink !== null) {
      let ingredients = [];
      for (let index = 1; index < 16; index++) {
        if (drink[`strIngredient${index}`] !== null) {
          ingredients = [
            ...ingredients,
            {
              ingredientName: drink[`strIngredient${index}`],
              measure: drink[`strMeasure${index}`],
            },
          ];
        }
      }
      drink = { ...drink, ingredients };
    }
    return drink;
  };

  return (
    <DrinkContext.Provider value={{ randomDrink, getRandomDrink }}>
      {props.children}
    </DrinkContext.Provider>
  );
};
