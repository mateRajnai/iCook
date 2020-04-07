import React from "react";
import { Row, Col } from "antd";
import RecipeFilter from "./RecipeFilter";
import RecipeList from "./RecipeList";

export const RecipeContent = (props) => {
  return (
    <Row>
      <Col span={8}>
        <RecipeFilter />
      </Col>
      <Col span={16}>
        <RecipeList />
      </Col>
    </Row>
  );
};

export default RecipeContent;
