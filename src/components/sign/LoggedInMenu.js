import React from "react";
import { Menu, Dropdown, Button } from "antd";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 50px;
  height: 50px;
`;

const LoggedInMenu = () => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <h3>Profile</h3>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        <Button>Logout</Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <StyledImage
        className="profile-menu"
        alt="Profile Menu"
        src="/profile-picture-default.png"
      />
    </Dropdown>
  );
};

export default LoggedInMenu;
