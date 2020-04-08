import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Layout as AntLayout } from "antd";
import "antd/dist/antd.css";

import LayoutHeader from "./components/LayoutHeader";
import LayoutFooter from "./components/LayoutFooter";
import RecipeSearchContent from "./components/RecipeSearchContent";
import MainContent from "./style/MainContent";
import RecipeDetails from "./components/RecipeDetails";

const Layout = (props) => {
  return (
    <BrowserRouter>
      <AntLayout className="layout">
        <LayoutHeader />
        <MainContent>
          <Route
            path={["/search", "/"]}
            exact
            component={RecipeSearchContent}
          />
          <Route path={"/recipe/:id"} component={RecipeDetails} />
        </MainContent>
        <LayoutFooter />
      </AntLayout>
    </BrowserRouter>
  );
};

export default Layout;
