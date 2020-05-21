import React, { useState, useEffect } from "react";
import Axios from "axios";
import UrlBuilder from "./UrlBuilder";
import Cookies from "js-cookie";

const BOOKMARKED_RECIPES_URL = "http://localhost:8080/favorites";
const urlBuilder = new UrlBuilder();

export const BookmarkedRecipesContext = React.createContext();

export const BookmarkedRecipesProvider = (props) => {
  const [bookmarkedRecipes, setBookmarkedRecipes] = useState([]);
  const [bookmarkedRecipeObjects, setBookmarkedRecipeObjects] = useState([]);

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
    Axios.get(actualUrl, {
      headers: {
        "Access-Control-Allow-Headers": "Authorization",
        Authorization: `Bearer ${Cookies.get("jwt")}`,
      },
    }).then((resp) => setBookmarkedRecipeObjects(resp.data));
  };

  const getData = () => {
    Axios.get(BOOKMARKED_RECIPES_URL, {
      headers: {
        "Access-Control-Allow-Headers": "Authorization",
        Authorization: `Bearer ${Cookies.get("jwt")}`,
      },
    }).then((resp) => setBookmarkedRecipes(resp.data));
  };

  const deleteData = (data) => {
    Axios.delete(BOOKMARKED_RECIPES_URL + "/" + data.id, {
      headers: {
        "Access-Control-Allow-Headers": "Authorization",
        Authorization: `Bearer ${Cookies.get("jwt")}`,
      },
    }).then((resp) => {
      if (resp.status === 200) {
        filterOutDeletedBookmarkedRecipeByRecipeId(data.recipeId);
      }
    });
  };

  const saveData = (data) => {
    Axios.post(BOOKMARKED_RECIPES_URL, data, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "Authorization",
        Authorization: `Bearer ${Cookies.get("jwt")}`,
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
    if (bookmarkedRecipes.length > bookmarkedRecipeObjects.length) {
      getRecipeObjects(urlBuilder.getBookmarked(bookmarkedRecipes));
    }
  });

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
