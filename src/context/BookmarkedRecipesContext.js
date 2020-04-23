import React, { useState, useEffect } from "react";
import Axios from "axios";

const BOOKMARKED_RECIPES_URL = "http://localhost:8080/favorites";
const EDAMAM_BASE_URL = "https://api.edamam.com/search?";

export const BookmarkedRecipesContext = React.createContext();

export const BookmarkedRecipesProvider = (props) => {
  const [bookmarkedRecipes, setBookmarkedRecipes] = useState([]);
  const [bookmarkedRecipeObjects, setBookmarkedRecipeObjects] = useState([]);

  const bookmarkedTheme = {
    color: "yellow",
  };

  const defaultTheme = {
    color: "grey",
  };

  const getRecipeObjects = () => {
    Axios.get(EDAMAM_BASE_URL).then((resp) =>
      setBookmarkedRecipeObjects(resp.data)
    );
  };

  const getData = () => {
    Axios.get(BOOKMARKED_RECIPES_URL).then((resp) =>
      setBookmarkedRecipes(resp.data)
    );
  };

  const updateData = (data) => {
    Axios.put(BOOKMARKED_RECIPES_URL, data, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((resp) => {
      setBookmarkedRecipes(resp.data);
    });
  };

  const escapeUriCharacters = (uri) => {
    return uri.replace(/\//g, "%2F").replace(/:/g, "%3A").replace(/#/g, "%23");
  };

  const themeSetter = (uri) => {
    if (bookmarkedRecipes.includes(escapeUriCharacters(uri))) {
      return bookmarkedTheme;
    }
    return defaultTheme;
  };

  const addToBookmarks = (event) => {
    event.stopPropagation();
    const recipeId = event.currentTarget.attributes.getNamedItem(
      "data-recipe-id"
    ).value;
    const escapedRecipeId = escapeUriCharacters(recipeId);
    updateData(escapedRecipeId);
  };

  useEffect(() => {
    if (bookmarkedRecipes.length !== 0) {
      getRecipeObjects();
    }
  }, [bookmarkedRecipes]);

  useEffect(() => {
    getData();
    getRecipeObjects();
  }, []);

  return (
    <BookmarkedRecipesContext.Provider
      value={{
        themeSetter,
        addToBookmarks,
        bookmarkedRecipeObjects,
      }}
    >
      {props.children}
    </BookmarkedRecipesContext.Provider>
  );
};
