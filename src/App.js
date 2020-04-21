import React from "react";
import Layout from "./components/layout/Layout";
import "./App.css";
import { RecipeProvider } from "./context/RecipeContext";
import { SearchProvider } from "./context/SearchContext";
import { SelectedRecipeProvider } from "./context/SelectedRecipeContext";
import { DrinkContextProvider } from "./context/DrinkContext";

function App() {
  return (
    <RecipeProvider>
      <SelectedRecipeProvider>
        <SearchProvider>
          <DrinkContextProvider>
            <div className="App">
              <Layout />
            </div>
          </DrinkContextProvider>
        </SearchProvider>
      </SelectedRecipeProvider>
    </RecipeProvider>
  );
}

export default App;
