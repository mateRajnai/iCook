import React, { useState } from "react";
import Axios from "axios";

const UPDATE_BOOKMARKED_RECIPES_URL = "http://localhost:8080/favorites";

export const BookmarkedRecipesContext = React.createContext();

export const BookmarkedRecipesProvider = (props) => {
  const [bookmarkedRecipes, setBookmarkedRecipes] = useState([]);

  const updateData = (data) => {
    Axios.put(UPDATE_BOOKMARKED_RECIPES_URL, data, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((resp) => {
      const recipeIds = resp.data;
      console.log(recipeIds);
      setBookmarkedRecipes(recipeIds);
    });
  };

  const escapeUriCharacters = (uri) => {
    return uri.replace(/\//g, "%2F").replace(/:/g, "%3A").replace(/#/g, "%23");
  };

  return (
    <BookmarkedRecipesContext.Provider
      value={{
        bookmarkedRecipes,
        setBookmarkedRecipes,
        updateData,
        escapeUriCharacters,
      }}
    >
      {props.children}
    </BookmarkedRecipesContext.Provider>
  );
};
