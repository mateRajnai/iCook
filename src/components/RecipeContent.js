import React from "react";
import { Row, Col } from "antd";
import RecipeFilter from "./RecipeFilter";
import RecipeList from "./RecipeList";
import SearchByKeyword from "./SearchByKeyword";

export const RecipeContent = (props) => {
  return (
    <Row>
      <Col lg={6} md={4} sm={4}>
        <Row>
          <RecipeFilter />
        </Row>
        <Row>
          <SearchByKeyword />
        </Row>
      </Col>
      <Col lg={18} md={20} sm={20}>
        <RecipeList />
      </Col>
    </Row>
  );
};

export default RecipeContent;
