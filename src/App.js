import React from "react";
import Layout from "./components/layout/Layout";
import "./App.css";
import { RecipeProvider } from "./context/RecipeContext";
import { SearchProvider } from "./context/SearchContext";
import { SelectedRecipeProvider } from "./context/SelectedRecipeContext";
import { BookmarkedRecipesProvider } from "./context/BookmarkedRecipesContext";

function App() {
  return (
    <RecipeProvider>
      <BookmarkedRecipesProvider>
        <SelectedRecipeProvider>
          <SearchProvider>
            <div className="App">
              <Layout />
            </div>
          </SearchProvider>
        </SelectedRecipeProvider>
      </BookmarkedRecipesProvider>
    </RecipeProvider>
  );
}

export default App;
