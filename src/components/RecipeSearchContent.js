import React from "react";
import { Row, Col, Menu, Layout } from "antd";

import RecipeSearch from "./RecipeSearch";
import RecipeList from "./RecipeList";

const { Sider } = Layout;

export const RecipeContent = (props) => {
  return (
    <Row>
      <Col lg={6} md={4} sm={4}>
        <div
          className="ant-affix"
          style={{
            position: "fixed",
            top: "70px",
            paddingTop: "20px",
            width: "500px",
            marginLeft: "50px",
          }}
        >
          <Sider width={400} className="site-layout-background main-menu-inner">
            <Menu className="aside-container" mode="inline">
              <RecipeSearch />
            </Menu>
          </Sider>
        </div>
      </Col>
      <Col lg={18} md={20} sm={20}>
        <RecipeList />
      </Col>
    </Row>
  );
};

export default RecipeContent;
