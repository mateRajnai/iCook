import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const LayoutHeader = (props) => {
  return (
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        height: "100px",
      }}
    >
      <Link to={"/"}>
        <img
          className="logo"
          alt="iCook"
          src="/logo.png"
          style={{ maxBlockSize: "100%" }}
        />
      </Link>
    </Header>
  );
};

export default LayoutHeader;
