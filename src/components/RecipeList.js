import React, { useContext } from "react";
import RecipeListItem from "./RecipeListItem";
import { RecipeContext } from "../context/RecipeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import { Row } from "antd";

const RecipeList = (props) => {
  const { recipes } = useContext(RecipeContext);
  const { loading } = useContext(RecipeContext);
  let content = null;

  if (loading) {
    content = (
      <Row justify="center" style={{ margin: "40px" }}>
        <FontAwesomeIcon
          icon={faHourglassHalf}
          spin
          size="8x"
        ></FontAwesomeIcon>
      </Row>
    );
  } else {
    content = (
      <div>
        {recipes.map((recipe) => (
          <RecipeListItem key={recipe.uri} recipe={recipe} />
        ))}
      </div>
    );
  }
  return content;
};

export default RecipeList;
