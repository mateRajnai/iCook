import React from "react";
import { Row, Col, Menu } from "antd";
import SearchMenuContainer from "../../style/SearchMenuContainer";
import BookmarkSearch from "./BookmarkSearch";
import BookmarkList from "./BookmarkList";

const BookmarkedRecipesContent = () => {
  return (
    <Row>
      <Col lg={6} md={4} sm={4}>
        <SearchMenuContainer className="ant-affix">
          <Menu className="aside-container">
            <BookmarkSearch />
          </Menu>
        </SearchMenuContainer>
      </Col>
      <Col lg={18} md={20} sm={20}>
        <BookmarkList />
      </Col>
    </Row>
  );
};

export default BookmarkedRecipesContent;
