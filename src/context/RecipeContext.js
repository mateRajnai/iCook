import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

const RESULTS_PER_SEARCH = 10;

export const RecipeContext = createContext();

export const RecipeProvider = (props) => {
  const API_ID = process.env.REACT_APP_API_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [queryString, setQueryString] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const [indexOfFromInUrl, setIndexOfFromInUrl] = useState(0);
  const [indexOfToInUrl, setIndexOfToInUrl] = useState(RESULTS_PER_SEARCH);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterQuery, setFilterQuery] = useState("");

  const search = (searchQuery, filterQuery) => {
    setSearchQuery(searchQuery);
    setFilterQuery(filterQuery);
    const actualUrl = `https://api.edamam.com/search?q=${searchQuery}&app_id=${API_ID}&app_key=${API_KEY}${filterQuery}`;
    if (actualUrl !== queryString) {
      setLoading(true);
      setInitialStatesAfterNewSearch(actualUrl);
    }
  };

  const loadMoreRecipes = () => {
    const actualUrl = `https://api.edamam.com/search?q=${searchQuery}&app_id=${API_ID}&app_key=${API_KEY}&from=${indexOfFromInUrl}&to=${indexOfToInUrl}${filterQuery}`;
    setQueryString(actualUrl);
  };

  const getData = (url) => {
    Axios.get(url)
      .then((resp) => {
        if (resp.data.count === 0) {
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

  const setInitialStatesAfterNewSearch = (actualUrl) => {
    setIndexOfFromInUrl(0);
    setIndexOfToInUrl(10);
    setRecipes([]);
    setQueryString(actualUrl);
  };

  const setIndexOfUrlForInfiniteScrolling = () => {
    setIndexOfFromInUrl((index) => index + RESULTS_PER_SEARCH);
    setIndexOfToInUrl((index) => index + RESULTS_PER_SEARCH);
  };

  useEffect(() => {
    if (recipes.length === RESULTS_PER_SEARCH) {
      setLoading(false);
    }
  }, [recipes]);

  useEffect(() => {
    if (queryString !== "") {
      getData(queryString);
      setIndexOfUrlForInfiniteScrolling();
    }
  }, [queryString]);

  useEffect(() => {}, [loading]);

  return (
    <RecipeContext.Provider
      value={{
        search,
        queryString,
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
