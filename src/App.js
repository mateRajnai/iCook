import React from "react";
import Layout from "./components/layout/Layout";
import "./App.css";
import { RecipeProvider } from "./context/RecipeContext";
import { SelectedRecipeProvider } from "./context/SelectedRecipeContext";

function App() {
  return (
    <RecipeProvider>
      <SelectedRecipeProvider>
        <div className="App">
          <Layout />
        </div>
      </SelectedRecipeProvider>
    </RecipeProvider>
  );
}

export default App;
