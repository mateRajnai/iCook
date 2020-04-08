import React, { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { Row, Col } from "antd";

const RecipeDetails = (props) => {
  const { selectedRecipe } = useContext(RecipeContext);
  let content = null;

  if (selectedRecipe != null) {
    content = (
      <Row justify="center">
        <Col span={16}>
          <Row justify="space-around" id="recipe-details">
            <Col>
              <h1>{selectedRecipe.label}</h1>
              <img src={selectedRecipe.image} alt={selectedRecipe.label}></img>
            </Col>
            <Col>
              <p>Ingredients for {selectedRecipe.yield} servings:</p>
              <ul>
                {selectedRecipe.ingredientLines.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </Col>
          </Row>
          <Row id="recipe-labels">
            <Col flex="auto">
              <Row>
                <Col span={8}>
                  <h3>Health label(s):</h3>
                </Col>
                <Col span={8}>
                  <h3>Diet label(s):</h3>
                </Col>
                <Col span={8}>
                  <h3>Caution(s):</h3>
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <ul>
                    {selectedRecipe.healthLabels.map((label, index) => (
                      <li key={index}>{label}</li>
                    ))}
                  </ul>
                </Col>
                <Col span={8}>
                  {selectedRecipe.dietLabels.map((label, index) => (
                    <p key={index}>{label}</p>
                  ))}
                </Col>
                <Col span={8}>
                  {selectedRecipe.cautions.map((caution, index) => (
                    <p key={index}>{caution}</p>
                  ))}
                </Col>
              </Row>
            </Col>
          </Row>
          <Row id="nutritional values"></Row>
          <Row id="notes"></Row>
          <Row id="comments"></Row>
        </Col>
      </Row>
    );
  }
  return content;
};

export default RecipeDetails;
