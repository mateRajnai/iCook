import React from "react";
import { Row, Col, Menu, Layout } from "antd";
import styled from "styled-components";

import RecipeSearch from "./RecipeSearch";
import RecipeList from "./RecipeList";

const { Sider } = Layout;

const InnerDiv = styled.div`
  position: fixed;
  top: "70px";
  padding-top: "20px";
  width: "500px";
  margin-left: "50px";
`;

export const RecipeContent = (props) => {
  return (
    <Row>
      <Col lg={6} md={4} sm={4}>
        <InnerDiv className="ant-affix">
          <Sider width={400} className="site-layout-background main-menu-inner">
            <Menu className="aside-container" mode="inline">
              <RecipeSearch />
            </Menu>
          </Sider>
        </InnerDiv>
      </Col>
      <Col lg={18} md={20} sm={20}>
        <RecipeList />
      </Col>
    </Row>
  );
};

export default RecipeContent;
