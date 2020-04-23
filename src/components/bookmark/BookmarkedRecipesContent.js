import React from "react";
import { Row, Col } from "antd";
import BookmarkList from "./BookmarkList";

const BookmarkedRecipesContent = () => {
  return (
    <Row>
      <Col lg={18} md={20} sm={20}>
        <BookmarkList />
      </Col>
    </Row>
  );
};

export default BookmarkedRecipesContent;
