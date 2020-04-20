import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Layout as AntLayout } from "antd";
import "antd/dist/antd.css";

import LayoutHeader from "./LayoutHeader";
import LayoutFooter from "./LayoutFooter";
import RecipeSearchContent from "../recipeSearch/RecipeSearchContent";
import MainContent from "../../style/MainContent";
import RecipeDetails from "../details/RecipeDetails";

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
          <Route
            path={"/random-drink"}
            render={(props) => (
              <div style={{ textAlign: "center" }}>
                <h1>Coming soon...</h1>
              </div>
            )}
          />
        </MainContent>
        <LayoutFooter />
      </AntLayout>
    </BrowserRouter>
  );
};

export default Layout;
