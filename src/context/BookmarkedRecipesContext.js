import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import UrlBuilder from "./UrlBuilder";
import { UserContext } from "../context/UserContext";
import { notification } from "antd";

const BOOKMARKED_RECIPES_URL =
  "https://icoook-api-server.herokuapp.com/favorites";

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
      Axios.get(actualUrl).then((resp) =>
        setBookmarkedRecipeObjects(resp.data)
      );
    }
  };

  const getData = () => {
    Axios.get(BOOKMARKED_RECIPES_URL, {
      withCredentials: true,
    }).then((resp) => setBookmarkedRecipes(resp.data));
  };

  const deleteData = (data) => {
    if (isLoggedIn) {
      Axios.delete(BOOKMARKED_RECIPES_URL + "/" + data.id, {
        withCredentials: true,
      }).then((resp) => {
        if (resp.status === 200) {
          filterOutDeletedBookmarkedRecipeByRecipeId(data.recipeId);
        }
      });
    }
  };

  const saveData = (data, recipe) => {
    if (isLoggedIn) {
      Axios.post(BOOKMARKED_RECIPES_URL, data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }).then((resp) => {
        setBookmarkedRecipeObjects((prevRecipeObjects) => [
          ...prevRecipeObjects,
          recipe,
        ]);
        setBookmarkedRecipes((prevRecipes) => [...prevRecipes, resp.data]);
      });
    } else {
      notification.open({
        message: "Please sign in!",
        description: "Guests are not allowed to bookmark recpies!",
        placement: "topRight",
        top: 50,
      });
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

  const addToBookmarks = (event, recipeObject) => {
    event.stopPropagation();
    const escapedRecipeId = escapeUriCharacters(recipeObject.uri);
    const bookmarkedRecipe = findBookmarkedRecipeByRecipeId(escapedRecipeId);

    if (bookmarkedRecipe == null) {
      const recipe = {
        recipeId: escapedRecipeId,
      };
      saveData(recipe, recipeObject);
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
