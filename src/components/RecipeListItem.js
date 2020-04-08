import React from "react";
import { Card, Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import ListItem from "../style/ListItem";

const RecipeListItem = (props) => {
  const recipe = props.recipe;
  const showRecipedetails = () => {
    console.log("click");
  };

  const addToBookmarks = () => {
    console.log("bookmarks");
  };

  return (
    <ListItem>
      <Row justify="center">
        <Col sm={24} md={24} lg={18}>
          <Card title={recipe.label} onClick={showRecipedetails}>
            <Row gutter={[32]}>
              <Col>
                <img src={recipe.image} alt={recipe.label} height={100}></img>
              </Col>
              <Col>
                <Row>Servings:</Row>
                <Row>
                  <p>{recipe.yield}</p>
                </Row>
              </Col>
              <Col>
                <Row>Calories:</Row>
                <Row>
                  <p>{parseFloat(recipe.calories).toFixed(2)}</p>
                </Row>
              </Col>
              <Col>
                <Row>Calories per serving:</Row>
                <Row>
                  <p>
                    {(
                      parseFloat(recipe.calories) / parseFloat(recipe.yield)
                    ).toFixed(2)}
                  </p>
                </Row>
              </Col>
              <Col>
                <Row>Diet properties:</Row>
                <Row>
                  <ul>
                    {recipe.dietLabels.map((label) => (
                      <li key={label}>{label}</li>
                    ))}
                  </ul>
                </Row>
              </Col>
              <Col>
                <Row>Health properties:</Row>
                <Row>
                  <ul>
                    {recipe.healthLabels.map((label) => (
                      <li key={label}>{label}</li>
                    ))}
                  </ul>
                </Row>
              </Col>
              <Col flex="auto">
                <Row justify="center">
                  <Col>
                    <FontAwesomeIcon
                      onClick={addToBookmarks}
                      id="bookmark"
                      icon={faBookmark}
                      size={"5x"}
                    ></FontAwesomeIcon>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </ListItem>
  );
};

export default RecipeListItem;
