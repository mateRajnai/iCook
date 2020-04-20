import React from "react";
import { Row, Col, Menu, Layout } from "antd";
import styled from "styled-components";

import RecipeSearch from "./RecipeSearch";
import RecipeList from "../recipeList/RecipeList";

const InnerDiv = styled.div`
  position: fixed;
  top: 70px;
  padding-top: 20px;
  width: 400px;
  height: 80%;
  overflow: auto;
  margin-left: 50px;
`;

export const RecipeSearchContent = (props) => {
  return (
    <Row>
      <Col lg={6} md={4} sm={4}>
        <InnerDiv className="ant-affix">
          <Menu className="aside-container">
            <RecipeSearch />
          </Menu>
        </InnerDiv>
      </Col>
      <Col lg={18} md={20} sm={20}>
        <RecipeList />
      </Col>
    </Row>
  );
};

export default RecipeSearchContent;
