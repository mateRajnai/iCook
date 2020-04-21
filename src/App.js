import React from "react";
import Layout from "./components/layout/Layout";
import "./App.css";
import { RecipeProvider } from "./context/RecipeContext";
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <RecipeProvider>
      <SearchProvider>
        <div className="App">
          <Layout />
        </div>
      </SearchProvider>
    </RecipeProvider>
  );
}

export default App;
