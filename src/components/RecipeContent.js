import React from "react";
import { Row, Col } from "antd";

import RecipeSearch from "./RecipeSearch";
import RecipeList from "./RecipeList";

export const RecipeContent = (props) => {
  return (
    <Row>
      <Col lg={6} md={4} sm={4}>
        <RecipeSearch />
      </Col>
      <Col lg={18} md={20} sm={20}>
        <RecipeList />
      </Col>
    </Row>
  );
};

export default RecipeContent;
