import React from "react";
import Layout from "./components/layout/Layout";
import "./App.css";
import { RecipeProvider } from "./context/RecipeContext";

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
