import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const LayoutFooter = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
        position: "fixed",
        bottom: "0",
        zIndex: 1,
        width: "100%",
      }}
    >
      <b>iCook ©2020 Created by Team Foodie</b>
      <div
        id="edamam-badge"
        data-color="white"
        style={{ display: "inline-block", margin: "0 10px" }}
      ></div>
    </Footer>
  );
};

export default LayoutFooter;
