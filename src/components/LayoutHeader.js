import React from "react";
import { Layout } from "antd";

const { Header } = Layout;

const LayoutHeader = () => {
  return (
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        height: "100px",
      }}
    >
      <img
        className="logo"
        alt="iCook"
        src="/logo.png"
        style={{ maxBlockSize: "100%" }}
      />
    </Header>
  );
};

export default LayoutHeader;
