import React from "react";
import { Layout as AntLayout } from "antd";
import LayoutHeader from "./components/LayoutHeader";
import LayoutFooter from "./components/LayoutFooter";
import "antd/dist/antd.css";
import RecipeContent from "./components/RecipeContent";
import MainContent from "./style/MainContent";

const Layout = (props) => {
  return (
    <AntLayout className="layout">
      <LayoutHeader />
      <MainContent>
        <RecipeContent />
      </MainContent>
      <LayoutFooter />
    </AntLayout>
  );
};

export default Layout;
