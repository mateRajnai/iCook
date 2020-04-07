import React from "react";
import { Row, Col } from "antd";
import RecipeFilter from "./RecipeFilter";

export const RecipeContent = (props) => {
  return (
    <Row>
      <Col span={8}>
        <RecipeFilter />
      </Col>
      <Col span={16}>
        <h1>Recipelist</h1>
      </Col>
    </Row>
  );
};

export default RecipeContent;
