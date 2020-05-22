import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import UrlBuilder from "./UrlBuilder";
import Cookies from "js-cookie";
import { UserContext } from "../context/UserContext";

const BOOKMARKED_RECIPES_URL = "http://localhost:8080/favorites";
const urlBuilder = new UrlBuilder();

export const BookmarkedRecipesContext = React.createContext();

export const BookmarkedRecipesProvider = (props) => {
  const [bookmarkedRecipes, setBookmarkedRecipes] = useState([]);
  const [bookmarkedRecipeObjects, setBookmarkedRecipeObjects] = useState([]);
  const { isLoggedIn } = useContext(UserContext);

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
    if (isLoggedIn) {
      Axios.get(actualUrl, {
        headers: {
          "Access-Control-Allow-Headers": "Authorization",
          Authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      }).then((resp) => setBookmarkedRecipeObjects(resp.data));
    }
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
    if (isLoggedIn) {
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
    }
  };

  const saveData = (data) => {
    if (isLoggedIn) {
      Axios.post(BOOKMARKED_RECIPES_URL, data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "Authorization",
          Authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      }).then((resp) =>
        setBookmarkedRecipes((prevRecipes) => [...prevRecipes, resp.data])
      );
    } else {
      alert("Please sign in to save recipes as favorites!");
    }
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
    if (isLoggedIn) {
      getData();
    }
  }, [isLoggedIn]);

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
