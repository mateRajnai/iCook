import React from "react";
import { Layout as AntLayout } from "antd";
import LayoutHeader from "./components/LayoutHeader";
import LayoutFooter from "./components/LayoutFooter";
import "antd/dist/antd.css";

const Layout = (props) => {
  return (
    <AntLayout className="layout">
      <LayoutHeader />
      <LayoutFooter />
    </AntLayout>
  );
};

export default Layout;
