import React from "react";
import { Layout as AntLayout } from "antd";
import LayoutHeader from "./components/LayoutHeader";
import LayoutFooter from "./components/LayoutFooter";
import "antd/dist/antd.css";
import RecipeFilter from "./components/RecipeFilter";
import SearchByKeyword from "./components/SearchByKeyword";

const { Content } = AntLayout;

const Layout = (props) => {
  return (
    <AntLayout className="layout">
      <LayoutHeader />
      <Content style={{ margin: "150px 20px 100px 20px" }}>
        <RecipeFilter />
        <SearchByKeyword />
      </Content>
      <LayoutFooter />
    </AntLayout>
  );
};

export default Layout;
