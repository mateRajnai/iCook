import React, { useState, useEffect } from "react";
import RecipeListItem from "./RecipeListItem";
import axios from "axios";

const RecipeList = (props) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.edamam.com/search?q=chicken&app_id=29f808e6&app_key=172c8533603f02665a8920e3ee1ea944"
      )
      .then((resp) =>
        resp.data.hits.map((recipe) =>
          setRecipes((prevState) => [...prevState, recipe])
        )
      );
  }, []);

  const content = (
    <div>
      {recipes.map((recipe) => (
        <RecipeListItem recipe={recipe.recipe} />
      ))}
    </div>
  );
  return content;
};

export default RecipeList;
