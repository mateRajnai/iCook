import React, { useContext } from "react";
import { Layout, Button } from "antd";
import { Link, NavLink } from "react-router-dom";
import StyledHeader from "../../style/StyledHeader";
import styled from "styled-components";
import { SignModalContext } from "../../context/SignModalContext";
import Axios from "axios";
import Cookies from "js-cookie";

const { Header } = Layout;
const LOGOUT_URL = `http://localhost:8080/logout`;

const StyledImage = styled.img`
  max-block-size: 100%;
`;
const RightAlignedDiv = styled.div`
  float: right;
`;

const activeStyle = { color: "lightblue" };

const logout = () => {
  console.log("logout clicked");
  Axios.post(LOGOUT_URL, {
    headers: {
      "Access-Control-Allow-Headers": "Authorization",
      Authorization: `Bearer ${Cookies.get("jwt")}`,
    },
  }).then((resp) => {
    console.log(resp.data);
  });
};

const LayoutHeader = (props) => {
  const { showModal } = useContext(SignModalContext);

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
          <Button
            htmlType="button"
            style={{ margin: "0 8px" }}
            onClick={logout}
          >
            Logout
          </Button>
        </RightAlignedDiv>
      </Header>
    </StyledHeader>
  );
};

export default LayoutHeader;
