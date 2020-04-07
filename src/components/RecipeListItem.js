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

  return (
    <ListItem>
      <Col lg={16} md={24}>
        <Card title={recipe.label} onClick={showRecipedetails}>
          <Row gutter={[32]}>
            <Col>
              <img src={recipe.image} alt={recipe.label} height={100}></img>
            </Col>
            <Col>
              <Row>Calories:</Row>
              <Row>
                <p>{parseFloat(recipe.calories).toFixed(2)}</p>
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
    </ListItem>
  );
};

export default RecipeListItem;
