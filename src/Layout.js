import React from "react";
import { Layout as AntLayout } from "antd";
import LayoutHeader from "./components/LayoutHeader";
import LayoutFooter from "./components/LayoutFooter";
import "antd/dist/antd.css";

import RecipeList from "./components/RecipeList";

const Layout = (props) => {
  return (
    <AntLayout className="layout">
      <LayoutHeader />
      <RecipeList />
      <LayoutFooter />
    </AntLayout>
  );
};

export default Layout;
