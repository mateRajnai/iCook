import React from "react";
import { Row, Col } from "antd";
import RecipeFilter from "./RecipeFilter";
import RecipeList from "./RecipeList";

export const RecipeContent = (props) => {
  return (
    <Row>
      <Col lg={8} md={6} sm={6}>
        <RecipeFilter />
      </Col>
      <Col lg={16} md={18} sm={18}>
        <RecipeList />
      </Col>
    </Row>
  );
};

export default RecipeContent;
