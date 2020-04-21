import React, { useContext } from "react";
import { RecipeContext } from "../../context/RecipeContext";
import { Row, Col } from "antd";
import DetailedPage from "../../style/DetailedPage";
import RecipeLabels from "./RecipeLabels";
import NutritionalValues from "./nutritionDisplay/NutritionalValues";
import RecipeInfo from "./RecipeInfo";

const RecipeDetails = (props) => {
  const { selectedRecipe } = useContext(RecipeContext);
  let content = null;

  if (selectedRecipe != null) {
    content = (
      <DetailedPage>
        <Row justify="center">
          <Col id="container" span={16}>
            <Row className="main-row" id="recipe-details">
              <RecipeInfo></RecipeInfo>
            </Row>
            <Row className="main-row" id="recipe-labels">
              <RecipeLabels></RecipeLabels>
            </Row>
            <Row className="main-row" justify="center" id="nutritional values">
              <NutritionalValues></NutritionalValues>
            </Row>
            <Row className="main-row" justify="center" id="notes">
              <Col>
                <h2>Personal notes</h2>
                <p>Coming soon...</p>
              </Col>
            </Row>
            <Row className="main-row" justify="center" id="comments">
              <Col>
                <h2>Comments</h2>
                <p>Coming soon...</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </DetailedPage>
    );
  }
  return content;
};

export default RecipeDetails;
