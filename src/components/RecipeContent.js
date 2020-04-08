import React from "react";
import { Row, Col } from "antd";

import Search from "./Search";

export const RecipeContent = (props) => {
  return (
    <Row>
      <Col span={8}>
        <Search />
      </Col>
      <Col span={16}>
        <h1>Recipelist</h1>
      </Col>
    </Row>
  );
};

export default RecipeContent;
