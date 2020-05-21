import React, { useContext } from "react";
import { Layout, Button } from "antd";
import { Link, NavLink } from "react-router-dom";
import StyledHeader from "../../style/StyledHeader";
import styled from "styled-components";
import { SignModalContext } from "../../context/SignModalContext";
import { UserContext } from "../../context/UserContext";
import LoggedInMenu from "../sign/LoggedInMenu";

const { Header } = Layout;

const StyledImage = styled.img`
  max-block-size: 100%;
`;
const RightAlignedDiv = styled.div`
  float: right;
`;

const activeStyle = { color: "lightblue" };

const LayoutHeader = (props) => {
  const { showModal } = useContext(SignModalContext);
  const { isLoggedIn } = useContext(UserContext);

  return (
    <StyledHeader>
      <Header>
        <Link to={"/"}>
          <StyledImage className="logo" alt="iCook" src="/logo.png" />
        </Link>
        <NavLink exact={true} activeStyle={activeStyle} to={"/search"}>
          Search
        </NavLink>
        <NavLink exact={true} activeStyle={activeStyle} to={"/bookmark"}>
          Bookmarks
        </NavLink>
        <NavLink exact={true} activeStyle={activeStyle} to={"/random-drink"}>
          Get random drink
        </NavLink>
        {/* TO-DO: Not nice, refactor, but how? => code review */}
        {!isLoggedIn ? (
          <RightAlignedDiv>
            <Button type="secondary" data-name="signin" onClick={showModal}>
              Sign-In
            </Button>
            <Button
              type="link"
              data-name="signup"
              style={activeStyle}
              onClick={showModal}
            >
              Sign-Up
            </Button>
          </RightAlignedDiv>
        ) : (
          <RightAlignedDiv>
            <LoggedInMenu></LoggedInMenu>
          </RightAlignedDiv>
        )}
      </Header>
    </StyledHeader>
  );
};

export default LayoutHeader;
