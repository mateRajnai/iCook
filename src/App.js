import React from "react";
import Layout from "./Layout";
import "./App.css";
import { RecipeProvider } from "./RecipeContext";

function App() {
  return (
    <RecipeProvider>
      <div className="App">
        <Layout />
      </div>
    </RecipeProvider>
  );
}

export default App;
