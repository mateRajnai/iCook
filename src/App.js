import React from "react";
import Layout from "./components/layout/Layout";
import "./App.css";
import { RecipeProvider } from "./context/RecipeContext";
import { SearchProvider } from "./context/SearchContext";
import { SelectedRecipeProvider } from "./context/SelectedRecipeContext";
import { BookmarkedRecipesProvider } from "./context/BookmarkedRecipesContext";
import { DrinkContextProvider } from "./context/DrinkContext";

function App() {
  return (
    <RecipeProvider>
      <BookmarkedRecipesProvider>
        <SelectedRecipeProvider>
          <SearchProvider>
            <DrinkContextProvider>
              <div className="App">
                <Layout />
              </div>
            </DrinkContextProvider>
          </SearchProvider>
        </SelectedRecipeProvider>
      </BookmarkedRecipesProvider>
    </RecipeProvider>
  );
}

export default App;
