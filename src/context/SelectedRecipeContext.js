import React, { createContext, useState } from "react";

export const SelectedRecipeContext = createContext();

export const SelectedRecipeProvider = (props) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <SelectedRecipeContext.Provider
      value={{
        selectedRecipe,
        setSelectedRecipe,
      }}
    >
      {props.children}
    </SelectedRecipeContext.Provider>
  );
};
