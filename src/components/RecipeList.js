import React, { useState, useEffect } from "react";
import RecipeListItem from "./RecipeListItem";
import axios from "axios";
import { Row } from "antd";

const RecipeList = (props) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.edamam.com/search?q=chicken&app_id=29f808e6&app_key=172c8533603f02665a8920e3ee1ea944&from=0&to=1"
      )
      .then((resp) =>
        resp.data.hits.map((recipe) =>
          setRecipes((prevState) => [...prevState, recipe])
        )
      );
  }, []);

  const content = (
    <Row justify="center" style={{ margin: "10px" }}>
      {recipes.map((recipe) => (
        <RecipeListItem key={recipe.recipe.uri} recipe={recipe.recipe} />
      ))}
    </Row>
  );
  return content;
};

export default RecipeList;
