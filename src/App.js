import React from "react";
import Layout from "./components/layout/Layout";
import "./App.css";
import { RecipeProvider } from "./context/RecipeContext";
import { SearchProvider } from "./context/SearchContext";
import { SelectedRecipeProvider } from "./context/SelectedRecipeContext";
import { BookmarkedRecipesProvider } from "./context/BookmarkedRecipesContext";
import { DrinkContextProvider } from "./context/DrinkContext";
import { ThemeProvider } from "styled-components";
import GreenTheme from "./style/GreenTheme";
import { UserProvider } from "./context/UserContext";
import { NearbyStoresProvider } from "./context/NearbyStoresContext";

function App() {
  return (
    <NearbyStoresProvider>
      <UserProvider>
        <ThemeProvider theme={GreenTheme}>
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
        </ThemeProvider>
      </UserProvider>
    </NearbyStoresProvider>
  );
}

export default App;
