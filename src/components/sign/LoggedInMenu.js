import React from "react";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

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
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        Click me <DownOutlined />
      </a>
    </Dropdown>
  );
};

export default LoggedInMenu;
