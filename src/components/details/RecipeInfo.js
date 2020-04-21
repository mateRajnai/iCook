import React, { useContext } from "react";
import { Row, Col } from "antd";
import { RecipeContext } from "../../context/RecipeContext";

const RecipeInfo = (props) => {
  const { selectedRecipe } = useContext(RecipeContext);

  return (
    <Col span={24}>
      <Row justify="space-between">
        <Col id="header">
          <h1>{selectedRecipe.label}</h1>
        </Col>
        <Col>
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
