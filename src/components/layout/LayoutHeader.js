import React from "react";
import { Layout, Button } from "antd";
import { Link } from "react-router-dom";
import StyledHeader from "../../style/StyledHeader";
import styled from "styled-components";
import Axios from "axios";

const { Header } = Layout;
const LOGOUT_URL = `http://localhost:8080/logout`;

const StyledImage = styled.img`
  max-block-size: 100%;
`;

const logout = () => {
  console.log("logout clicked");
  Axios.get(LOGOUT_URL).then((resp) => {
    console.log(resp.data);
  });
};

const LayoutHeader = (props) => {
  return (
    <StyledHeader>
      <Header>
        <Link to={"/"}>
          <StyledImage className="logo" alt="iCook" src="/logo.png" />
        </Link>
        <Link to={"/search"}>Search</Link>
        <Link to={"/bookmark"}>Bookmarks</Link>
        <Link to={"/random-drink"}>Get random drink</Link>
        <Button htmlType="button" style={{ margin: "0 8px" }} onClick={logout}>
          Logout
        </Button>
      </Header>
    </StyledHeader>
  );
};

export default LayoutHeader;
