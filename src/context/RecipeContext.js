import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const RecipeContext = createContext();

export const RecipeProvider = (props) => {
  const API_ID = process.env.REACT_APP_API_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [queryString, setQueryString] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const [indexOfFromInUrl, setIndexOfFromInUrl] = useState(0);
  const [indexOfToInUrl, setIndexOfToInUrl] = useState(10);
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
    Axios.get(url).then((resp) =>
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
    setIndexOfFromInUrl((index) => index + 10);
    setIndexOfToInUrl((index) => index + 10);
  };

  useEffect(() => {
    setTimeout(() => {
      if (recipes.length === 0) {
        setLoading(false);
      }
    }, 2500);
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
