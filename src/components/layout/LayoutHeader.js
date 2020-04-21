import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import StyledHeader from "../../style/StyledHeader";
import styled from "styled-components";

const { Header } = Layout;

const StyledImage = styled.img`
  max-block-size: 100%;
`;

const LayoutHeader = (props) => {
  return (
    <StyledHeader>
      <Header>
        <Link to={"/"}>
          <StyledImage className="logo" alt="iCook" src="/logo.png" />
        </Link>
        <Link to={"/search"}>Search</Link>
        <Link to={"/random-drink"}>Get random drink</Link>
      </Header>
    </StyledHeader>
  );
};

export default LayoutHeader;
