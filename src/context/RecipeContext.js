import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

const RESULTS_PER_SEARCH = 10;

export const RecipeContext = createContext();

export const RecipeProvider = (props) => {
  const API_ID = process.env.REACT_APP_API_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [searchURL, setSearchURL] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const [showResultsFrom, setShowResultsFrom] = useState(0);
  const [showResultsTo, setShowResultsTo] = useState(RESULTS_PER_SEARCH);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterQuery, setFilterQuery] = useState("");

  const search = (newSearchQuery, newFilterQuery) => {
    let currentSearchQuery = searchQuery;
    let currentFilterQuery = filterQuery;
    //it checks if it's a new search and initializes it, otherwise searches with the same queries but with increased index
    if (newSearchQuery !== searchQuery || newFilterQuery !== filterQuery) {
      setSearchQuery(newSearchQuery);
      setFilterQuery(newFilterQuery);
      setLoading(true);
      initNewSearch();
      currentSearchQuery = newSearchQuery;
      currentFilterQuery = newFilterQuery;
    }
    const url = `https://api.edamam.com/search?q=${currentSearchQuery}&app_id=${API_ID}&app_key=${API_KEY}&from=${showResultsFrom}&to=${showResultsTo}${currentFilterQuery}`;
    setSearchURL(url);
  };

  const loadMoreRecipes = () => {
    search(searchQuery, filterQuery);
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

  const initNewSearch = () => {
    setShowResultsFrom(0);
    setShowResultsTo(RESULTS_PER_SEARCH);
    setRecipes([]);
  };

  const prepareNextPage = () => {
    setShowResultsFrom((index) => index + RESULTS_PER_SEARCH);
    setShowResultsTo((index) => index + RESULTS_PER_SEARCH);
  };

  useEffect(() => {
    if (recipes.length === RESULTS_PER_SEARCH) {
      setLoading(false);
    }
  }, [recipes]);

  useEffect(() => {
    if (searchURL !== "") {
      getData(searchURL);
      prepareNextPage();
    }
  }, [searchURL]);

  useEffect(() => {}, [loading]);

  return (
    <RecipeContext.Provider
      value={{
        search,
        queryString: searchURL,
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
