import React from "react";
import { Layout } from "antd";
import styled from "styled-components";

const { Footer } = Layout;

const StyledFooter = styled(Footer)`
  text-align: center;
  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 8%;
`;

const BadgeContainer = styled.div`
  display: inline-block;
  margin: 0 10px;
`;

const LayoutFooter = () => {
  return (
    <StyledFooter>
      <b>iCook ©2020 Created by Team Foodie</b>
      <BadgeContainer
        id="edamam-badge"
        data-color="transparent"
      ></BadgeContainer>
    </StyledFooter>
  );
};

export default LayoutFooter;
