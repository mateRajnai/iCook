import React, { useContext } from "react";
import { Row, Col } from "antd";
import { SelectedRecipeContext } from "../../context/SelectedRecipeContext";
import { BookmarkedRecipesContext } from "../../context/BookmarkedRecipesContext";
import BookmarkIcon from "../../style/BookmarkIcon";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const RecipeInfo = (props) => {
  const { selectedRecipe } = useContext(SelectedRecipeContext);
  const { addToBookmarks, themeSetter } = useContext(BookmarkedRecipesContext);

  return (
    <Col span={24}>
      <Row justify="space-between" id="header">
        <Col span={2}>
          <BookmarkIcon
            onClick={addToBookmarks}
            id="bookmark"
            data-recipe-id={selectedRecipe.uri}
            icon={faBookmark}
            theme={themeSetter(selectedRecipe.uri)}
            size={"2x"}
          ></BookmarkIcon>
        </Col>
        <Col span={10}>
          <h1>{selectedRecipe.label}</h1>
        </Col>
        <Col span={4} offset={4}>
          <a
            href={selectedRecipe.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            How do I cook this?
          </a>
        </Col>
      </Row>
      <Row justify="space-around">
        <Col span={8}>
          <img src={selectedRecipe.image} alt={selectedRecipe.label}></img>
        </Col>
        <Col span={8}>
          <p>Ingredients for {selectedRecipe.yield} servings:</p>
          <ul>
            {selectedRecipe.ingredientLines.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Col>
  );
};

export default RecipeInfo;
