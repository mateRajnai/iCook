import React, { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { Row, Col } from "antd";
import DetailedPage from "../style/DetailedPage";

const RecipeDetails = (props) => {
  const { selectedRecipe } = useContext(RecipeContext);
  let content = null;

  if (selectedRecipe != null) {
    content = (
      <DetailedPage>
        <Row justify="center">
          <Col id="container" span={16}>
            <Row className="main-row" id="recipe-details">
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
                    <img
                      src={selectedRecipe.image}
                      alt={selectedRecipe.label}
                    ></img>
                  </Col>
                  <Col span={8}>
                    <p>Ingredients for {selectedRecipe.yield} servings:</p>
                    <ul>
                      {selectedRecipe.ingredientLines.map(
                        (ingredient, index) => (
                          <li key={index}>{ingredient}</li>
                        )
                      )}
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="main-row" id="recipe-labels">
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
                    {selectedRecipe.healthLabels.map((label, index) => (
                      <p key={index}>{label}</p>
                    ))}
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
            <Row className="main-row" justify="center" id="nutritional values">
              <Col>
                <button>Show nutritional values</button>
              </Col>
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
