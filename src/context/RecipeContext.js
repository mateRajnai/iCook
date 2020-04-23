import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";
import UrlBuilder from "./UrlBuilder";

const RESULTS_PER_SEARCH = 10;
const urlBuilder = new UrlBuilder();

export const RecipeContext = createContext();

export const RecipeProvider = (props) => {
  const [searchURL, setSearchURL] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const search = (newSearchQuery, newFilterQuery) => {
    setRecipes([]);
    setSearchURL(urlBuilder.newSearch(newSearchQuery, newFilterQuery));
    setLoading(true);
  };

  const loadMoreRecipes = () => {
    setSearchURL(urlBuilder.loadMore());
  };

  const getData = (url) => {
    Axios.get(url)
      .then((resp) => {
        if (resp.data.count === 0) {
          setRecipes(null);
          setLoading(false);
        }
        return resp;
      })
      .then((resp) =>
        resp.data.hits.map((data) =>
          setRecipes((prevRecipes) => [...prevRecipes, data.recipe])
        )
      );
  };

  //handles loading
  useEffect(() => {
    if (recipes.length === RESULTS_PER_SEARCH) {
      setLoading(false);
    }
  }, [recipes]);

  //handles search, whenever the URL changes
  useEffect(() => {
    if (searchURL !== "") {
      getData(searchURL);
    }
  }, [searchURL]);

  useEffect(() => {}, [loading]);

  return (
    <RecipeContext.Provider
      value={{
        search,
        queryString: urlBuilder.searchQuery,
        recipes,
        loading,
        setLoading,
        loadMoreRecipes,
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};
