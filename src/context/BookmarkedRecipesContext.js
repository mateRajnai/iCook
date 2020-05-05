import React, { useState, useEffect } from "react";
import Axios from "axios";

const BOOKMARKED_RECIPES_URL = "http://localhost:8080/favorites";
const API_KEY = process.env.REACT_APP_API_KEY;
const API_ID = process.env.REACT_APP_API_ID;
const EDAMAM_BASE_URL = "https://api.edamam.com/search?";

export const BookmarkedRecipesContext = React.createContext();

export const BookmarkedRecipesProvider = (props) => {
  const [bookmarkedRecipes, setBookmarkedRecipes] = useState([]);
  const [bookmarkedRecipeObjects, setBookmarkedRecipeObjects] = useState([]);
  const [actualUrl, setActualUrl] = useState("");

  const createActualUrl = (bookmarkedRecipes) => {
    const queryString = bookmarkedRecipes
      .map((recipe) => "r=" + recipe.recipeId)
      .join("&");
    setActualUrl(
      EDAMAM_BASE_URL + queryString + `&app_id=${API_ID}&app_key=${API_KEY}`
    );
  };

  const findBookmarkedRecipeByRecipeId = (recipeId) => {
    return bookmarkedRecipes.find((recipe) => recipe.recipeId === recipeId);
  };

  const filterOutDeletedBookmarkedRecipeByRecipeId = (recipeId) => {
    setBookmarkedRecipes(
      bookmarkedRecipes.filter((recipe) => recipe.recipeId !== recipeId)
    );
    setBookmarkedRecipeObjects(
      bookmarkedRecipeObjects.filter(
        (recipeObject) => escapeUriCharacters(recipeObject.uri) !== recipeId
      )
    );
  };

  const getRecipeObjects = (actualUrl) => {
    Axios.get(actualUrl).then((resp) => setBookmarkedRecipeObjects(resp.data));
  };

  const getData = () => {
    Axios.get(BOOKMARKED_RECIPES_URL).then((resp) =>
      setBookmarkedRecipes(resp.data)
    );
  };

  const deleteData = (data) => {
    Axios.delete(BOOKMARKED_RECIPES_URL + "/" + data.id).then((resp) => {
      if (resp.status === 200) {
        filterOutDeletedBookmarkedRecipeByRecipeId(data.recipeId);
      }
    });
  };

  const saveData = (data) => {
    Axios.post(BOOKMARKED_RECIPES_URL, data, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((resp) =>
      setBookmarkedRecipes((prevRecipes) => [...prevRecipes, resp.data])
    );
  };

  const escapeUriCharacters = (uri) => {
    return uri.replace(/\//g, "%2F").replace(/:/g, "%3A").replace(/#/g, "%23");
  };

  const themeSetter = (uri) => {
    if (findBookmarkedRecipeByRecipeId(escapeUriCharacters(uri)) != null) {
      return "bookmarked";
    }
    return "bookmarkless";
  };

  const addToBookmarks = (event) => {
    event.stopPropagation();
    const recipeId = event.currentTarget.attributes.getNamedItem(
      "data-recipe-id"
    ).value;
    const escapedRecipeId = escapeUriCharacters(recipeId);
    const bookmarkedRecipe = findBookmarkedRecipeByRecipeId(escapedRecipeId);

    if (bookmarkedRecipe == null) {
      const recipe = {
        recipeId: escapedRecipeId,
      };
      saveData(recipe);
    } else {
      deleteData(bookmarkedRecipe);
    }
  };

  useEffect(() => {
    createActualUrl(bookmarkedRecipes);
  }, [bookmarkedRecipes]);

  useEffect(() => {
    if (
      actualUrl !==
      EDAMAM_BASE_URL + `&app_id=${API_ID}&app_key=${API_KEY}`
    ) {
      getRecipeObjects(actualUrl);
    }
  }, [actualUrl]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <BookmarkedRecipesContext.Provider
      value={{
        themeSetter,
        addToBookmarks,
        bookmarkedRecipes,
        bookmarkedRecipeObjects,
      }}
    >
      {props.children}
    </BookmarkedRecipesContext.Provider>
  );
};
