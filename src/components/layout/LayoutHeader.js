import React, { useContext } from "react";
import { Layout, Button } from "antd";
import { Link } from "react-router-dom";
import StyledHeader from "../../style/StyledHeader";
import styled from "styled-components";
import { SignupModalContext } from "../../context/SignupModalContext";

const { Header } = Layout;

const StyledImage = styled.img`
  max-block-size: 100%;
`;
const RightAlignedDiv = styled.div`
  float: right;
`;

const LayoutHeader = (props) => {
  const { showModal } = useContext(SignupModalContext);

  return (
    <StyledHeader>
      <Header>
        <Link to={"/"}>
          <StyledImage className="logo" alt="iCook" src="/logo.png" />
        </Link>
        <Link to={"/search"}>Search</Link>
        <Link to={"/bookmark"}>Bookmarks</Link>
        <Link to={"/random-drink"}>Get random drink</Link>
        <RightAlignedDiv>
          <Button type="secondary" data-name="signup" onClick={showModal}>
            Signup
          </Button>
          <Button type="secondary" data-name="sign-in" onClick={showModal}>
            Sign in
          </Button>
        </RightAlignedDiv>
      </Header>
    </StyledHeader>
  );
};

export default LayoutHeader;
