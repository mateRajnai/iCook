import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import StyledHeader from "../style/StyledHeader";

const { Header } = Layout;

const LayoutHeader = (props) => {
  return (
    <StyledHeader>
      <Header>
        <Link to={"/"}>
          <img
            className="logo"
            alt="iCook"
            src="/logo.png"
            style={{ maxBlockSize: "100%" }}
          />
        </Link>
        <Link to={"/search"}>Search</Link>
        <Link to={"/random-drink"}>Get random drink</Link>
      </Header>
    </StyledHeader>
  );
};

export default LayoutHeader;
