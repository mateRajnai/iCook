import React from "react";
import Layout from "./components/layout/Layout";
import "./App.css";
import { RecipeProvider } from "./context/RecipeContext";
import { SearchProvider } from "./context/SearchContext";
import { SelectedRecipeProvider } from "./context/SelectedRecipeContext";

function App() {
  return (
    <RecipeProvider>
      <SelectedRecipeProvider>
        <SearchProvider>
          <div className="App">
            <Layout />
          </div>
        </SearchProvider>
      </SelectedRecipeProvider>
    </RecipeProvider>
  );
}

export default App;
