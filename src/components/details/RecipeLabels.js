import React, { useContext } from "react";
import { Row, Col } from "antd";
import { RecipeContext } from "../../context/RecipeContext";

const RecipeLabels = (props) => {
  const { selectedRecipe } = useContext(RecipeContext);

  return (
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
  );
};

export default RecipeLabels;
