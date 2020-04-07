import React from "react";
import { Row, Col } from "antd";
import RecipeFilter from "./RecipeFilter";
import SearchByKeyword from "./SearchByKeyword";

export const RecipeContent = (props) => {
  return (
    <Row>
      <Col span={8}>
        <SearchByKeyword />
        <RecipeFilter />
      </Col>
      <Col span={16}>
        <h1>Recipelist</h1>
      </Col>
    </Row>
  );
};

export default RecipeContent;
